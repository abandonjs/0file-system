import fs, { WriteFileOptions } from 'fs'
import { mkdir } from './dir'

/**
 * @title writeFile 
 * @param {string} path 
 * @param {string | NodeJS.ArrayBufferView} data 
 * @param {?WriteFileOptions} option 
 * @returns {boolean}
 */
export function writeFile(path: string, data: string | NodeJS.ArrayBufferView, option?: WriteFileOptions): boolean {
	try {
		const urlUnits: string[] = path.split(/\/|\\/)
		urlUnits.pop()
		const dirPath: string = urlUnits.join('/')
		if (!fs.existsSync(dirPath)) {
			mkdir(dirPath)
		}
		fs.writeFileSync(path, data, option)
		return true
	} catch (error) {
		console.error(error)
		return false
	}
}