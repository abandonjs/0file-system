import { isArray } from 'asura-eye'
import fs, { RmDirOptions } from 'fs'
import { readDir } from '../read'
import { isDirectory } from '../util'
import { rmFile } from './file'

/**
 * @title rmdir
 * @description 删除文件夹
 * @param path {string}
 * @param options {?RmDirOptions}
 * @returns {boolean}
 */
export function rmdir(path: string, options?: RmDirOptions): boolean {
	if (!isDirectory(path)) return
	const dirs: string[] = [path]
	let result = true
	function handleRmdir(path: string, options?: RmDirOptions) {
		const dirOrFiles: string[] = readDir(path)
		isArray(dirOrFiles) && dirOrFiles.length > 0 && dirOrFiles.forEach(dirOrFile => {
			try {
				const newPath = path + '/' + dirOrFile
				if (isDirectory(newPath)) {
					dirs.push(newPath)
					return handleRmdir(newPath, options)
				} else {
					return rmFile(newPath)
				}
			} catch (error) {
				console.error(error)
				result = false
			}
		})
	}
	handleRmdir(path, options)
	let len = dirs.length
	while (--len) {
		if (isDirectory(dirs[len])) {
			try {
				fs.rmdirSync(dirs[len], options)
			} catch (error) {
				console.log(error)
				return false
			}
		}
	}
	return result
}