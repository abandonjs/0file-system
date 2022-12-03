import fs from 'fs'
import { isDirectory, match, MathchLike } from './util'
import { parse } from 'node-xlsx'
import { CSVLikeDefault } from './constant'

/**
 * @title readXlsx
 * @description 读取xlsx文件数据
 * @param path string 准确的xlsx路径
 */
export function readXlsx(path: string) {
	return parse(fs.readFileSync(path))
}

/**
 * @title xlsxFormat
 * @description 将xlsx数据格式化
 * @param xData 待格式化数据
 * @returns { [SheetName]: SheetData }
 */
export function xlsxFormat(xData: any[]): { [key: string]: any[] } {
	const result = {}
	xData.forEach((unit: { name: string, data: any[][] }) => {
		const { name = '', data = [] } = unit
		if (result[name] === undefined) {
			result[name] = data
		}
	})

	return result
}

/**
 * @title readDir
 * @title 读取文件目录
 * @param path 路径
 * @returns string[]
 */
export function readdir(path: string): string[] {
	return fs.readdirSync(path) || []
}

/**
 * @title readFile
 * @description 读取文件信息(uft8)
 * @param path  路径
 * @returns string
 */
export function readFile(path: string): string {
	return fs.readFileSync(path, { encoding: 'utf8', flag: 'r' })
}

function loopRead(
	path: string,
	ignore: string | string[] = [],
	matchs: { [key: string]: MathchLike } = {},
	data: { [key: string]: any } = {}
) {

	if (matchs.csv === undefined) {
		matchs.csv = CSVLikeDefault
	}

	if (ignore && match(path, ignore)) {
		return ''
	}

	const isDir = isDirectory(path)

	if (isDir) {

		const dirs: string[] = readdir(path) || []
		dirs.forEach(dir => {
			const pathUnit = path + '/' + dir
			if (ignore && match(pathUnit, ignore)) {
				return
			}
			data[dir] = loopRead(pathUnit, ignore, matchs)
		})
	}

	if (!isDir) {
		if (match(path, matchs.csv)) {
			data = readXlsx(path)
		} else {
			return readFile(path)
		}
	}

	return data
}

/**
 * @title read
 * @description 读取文件目录中文件全部数据
 * @param path string 路径
 * @param ignore ?string|string[]
 * @param matchs { [key:string] : MatchLike }
 * @returns 
 */
export function read(
	path: string,
	ignore?: MathchLike,
	matchs?: { [key: string]: MathchLike }
) {
	return loopRead(path, ignore, matchs)
}

