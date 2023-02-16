import fs from 'fs'
import { parse } from 'node-xlsx'
import { ObjectType } from 'abandonjs'
import { build } from 'node-xlsx'
import { readFile } from '../src/read/file'

export function isXlsx(path: string): boolean {
	return /\.csv$/.test(path)
		|| /\.xls$/.test(path)
		|| /\.xlsx$/.test(path)
}

/**
 * @title readXlsx
 * @description 读取xlsx文件数据
 * @param path string 准确的xlsx路径
 */
export function readXlsx(path: string) {
	// return parse(readFile(path))
	return parse(fs.readFileSync(path))
}

/**
 * @title xlsxFormat
 * @description 将xlsx数据格式化
 * @param xData 待格式化数据
 * @returns { [SheetName]: SheetData }
 */
export function xlsxFormat(xData: any[]): ObjectType<any[]> {
	
	const result: ObjectType<any[]> = {}
	
	xData.forEach((unit: { name: string, data: any[][] }) => {
		const { name = '', data = [] } = unit
		if (result[name] === undefined) {
			result[name] = data
		}
	})

	return result
}


/**
 * @title writeXlsx
 * @description 写入xlsx文件
 * @param path string 文件路径
 * @param data 数据
 * @returns undefined
 */
export function writeXlsx(path: string, data: any[], options: any = {}) {
	return fs.writeFileSync(path, build(data), options)
}