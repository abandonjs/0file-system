import fs from 'fs'

/**
 * @title readFile
 * @description 读取文件信息(uft8)
 * @param path  路径
 * @returns string
 */
export function readFile(path: string): string {
	return fs.readFileSync(path, { encoding: 'utf8', flag: 'r' })
}