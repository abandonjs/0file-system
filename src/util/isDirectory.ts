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