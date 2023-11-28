import { readFile } from './file'
import { readDir } from './dir'
import { isDirectory } from '../util'
import { readTree } from './tree'
import type { ReadTreeOptions, TreeDataUnit } from './type'


export interface ReadOptions extends ReadTreeOptions {
	/**
	 * @description 树状数据
	 * @default: false
	 */
	tree?: boolean
	/**
	 * @description 数据合并成一个字符串(优先级大于<tree>)
	 * @default false
	 * @version 0.0.7
	 */
	dataMerge?: boolean
}

/**
 * @title read<T>
 * @description 读取文件(夹)
 * @param {string} path
 * @param {?ReadOptions} options 
 * @returns {T|string|string[]}
 */
export function read<T = string>(path: string, options: ReadOptions = {}): T | string | string[] | TreeDataUnit[] {
	const { tree = false, encoding = 'utf8', flag = 'r', withFileTypes } = options
	if (isDirectory(path)) {
		if (tree) return readTree(path, options)
		return readDir(path, { encoding, withFileTypes })
	}

	return readFile<T>(path, { encoding, flag })
}