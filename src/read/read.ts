import { match, MatchLike, isDirectory } from '../util'
import { CSVLikeDefault } from '../constant'
import { readXlsx } from './xlsx'
import { readdir } from './dir'
import { readFile } from './file'

function loopRead(
	path: string,
	ignore: string | string[] = [],
	matchs: { [key: string]: MatchLike } = {},
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
	ignore?: MatchLike,
	matchs?: { [key: string]: MatchLike }
) {
	return loopRead(path, ignore, matchs)
}

