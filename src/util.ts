import fs from 'fs'

/**
 * @title isDirectory 
 * @description 是否为文件夹
 * @param path string 路径
 * @returns boolean
 */
export function isDirectory(path: string): boolean {
	return fs.lstatSync(path).isDirectory()
}


export type MathchLike = string | string[]
/**
 * @title match
 * @description 匹配是否符合matchs规则
 * @param str string
 * @param matchs string | string[]
 * @returns boolean
 */
export function match(str: string, matchs: MathchLike): boolean {
	if (!Array.isArray(matchs)) {
		matchs = [matchs]
	}
	for (let i = 0; i < matchs.length; i++) {
		if (new RegExp(`^${matchs[i].replaceAll('*', '.*')}$`).test(str)) {
			return true
		}
	}
	return false
}