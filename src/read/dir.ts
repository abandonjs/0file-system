import fs from 'fs'

/**
 * @description 读取文件夹配置选项
 */
export interface ReadDirOptions {
	encoding: BufferEncoding
	withFileTypes?: false
}

/**
 * @title readDir
 * @title 读取文件目录
 * @param path {string} 路径
 * @param options {?ReadDirOptions} 路径
 * @returns string[]
 */
export function readDir(path: string, options?: ReadDirOptions): string[] {
	return fs.readdirSync(path, options) || []
}