import fs from 'fs'
import { isDirectory } from '../util'

/**
 * @title rmFile
 * @description 删除文件夹
 * @param path {string}
 * @returns {boolean}
 */
export function rmFile(path: string): boolean {
	if (!isDirectory(path)) {
		try {
			fs.unlinkSync(path)
		} catch (error) {
			console.error(error)
			return false
		}
		return true
	}
	return false
}