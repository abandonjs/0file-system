import fs, { WriteFileOptions } from 'fs'
import { mkdir } from './dir'

/**
 * @title writeFile 
 * @param path {string}
 * @param data {string | NodeJS.ArrayBufferView}
 * @param option {?WriteFileOptions}
 * @returns {boolean}
 */
export function writeFile(path: string, data: string | NodeJS.ArrayBufferView, option?: WriteFileOptions) {
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