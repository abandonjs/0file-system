import fs from 'fs'

/**
 * @title readDir
 * @title 读取文件目录
 * @param path 路径
 * @returns string[]
 */
export function readdir(path: string): string[] {
	return fs.readdirSync(path) || []
}