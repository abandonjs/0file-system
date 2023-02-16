import fs, { MakeDirectoryOptions } from 'fs'

/**
 * @title writeDir
 * @description 创建文件目录
 * @param path {string} 文件目录
 * @param options {MakeDirectoryOptions={recursive:true}} 
 * @returns 
 */
export async function mkdir(path: string, options: MakeDirectoryOptions = {}) {

	try {
		fs.mkdirSync(path, { recursive: true, ...options })
		return true
	} catch (error) {
		console.error(error)
		return false
	}
}