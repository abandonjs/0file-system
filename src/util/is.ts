import { isArray } from 'check-it-type';
import fs, { PathLike } from 'fs'
import { match } from './match';

/**
 * @title isDirectory 
 * @description 是否为文件夹
 * @param path {PathLike} 路径
 * @returns {boolean}
 * @since 0.1.0
 */
export function isDirectory(path: PathLike): boolean {
	return fs.lstatSync(path).isDirectory()
}


/**
 * @title isEmptyDirectory 
 * @description 是否为文件夹
 * @param path {PathLike} 路径
 * @param ignore {string|string[]} 路径
 * @returns {boolean}
 * @since 0.1.0
 */
export function isEmptyDirectory(path: PathLike, ignore?: string | string[]): boolean {
	if (isFile(path)) return false;
	const ignoreList: string[] = isArray(ignore) ? ignore : [ignore]

	const list = fs.readdirSync(path)

	return list.filter(item => !(match(item, ignoreList))).length > 0

}


/**
 * @title isFile
 * @description 是否为文件
 * @param path {PathLike} 路径
 * @returns {boolean}
 * @since 0.1.0
 */
export function isFile(path: PathLike): boolean {
	return !isDirectory(path)
}