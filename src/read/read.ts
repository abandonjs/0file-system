import { readFile } from './file'
import { readDir } from './dir'
import { isDirectory } from '../util'
import { readTree } from './tree'
import type { ReadTreeOptions, TreeDataUnit } from './type'


export interface ReadOptions extends ReadTreeOptions {
	/**
	 * default: false
	 */
	tree?: boolean
}

/**
 * @title read<T>
 * @description 读取文件(夹)
 * @param path {string}
 * @param options {?ReadOptions}
 * @returns T | string | string[]
 */
export function read<T = string>(path: string, options?: ReadOptions): T | string | string[] | TreeDataUnit[] {
	const { tree = false, encoding = 'utf8', flag = 'r', withFileTypes } = options || {}
	if (isDirectory(path)) {
		if (tree) return readTree(path, options)
		return readDir(path, { encoding, withFileTypes })
	}

	return readFile<T>(path, { encoding, flag })
}