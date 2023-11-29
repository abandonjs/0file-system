import fs from 'fs'
import { isFunction, isRegExp } from 'asura-eye'
import { ReadFileRules } from '../config'
import type { ReadFileOptions } from './type'

/**
 * @title readFile
 * @description 读取文件信息(uft8)
 * @param path {string} 路径
 * @param options {ReadFileOptions={ encoding: 'utf8', flag: 'r' }} 路径
 * @returns {string}
 */
export function readFile<T = string>(
	path: string,
	options: ReadFileOptions = { encoding: 'utf8', flag: 'r' }
): T | string {
	if (ReadFileRules.length > 0) {
		for (let i = 0; i < ReadFileRules.length; i++) {
			const { test, loader } = ReadFileRules[i]
			if (isRegExp(test) && isFunction(loader))
				if (test.test(path)) {
					return loader<T>(path, options)
				}
		}
	}
	return fs.readFileSync(path, options)
}