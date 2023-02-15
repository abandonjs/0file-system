import fs from 'fs'
import { build } from 'node-xlsx'


/**
 * @title writeXlsx
 * @description 写入xlsx文件
 * @param path string 文件路径
 * @param data 数据
 * @returns undefined
 */
export function writeXlsx(path: string, data: any[], options: any = {}) {
	return fs.writeFileSync(path, build(data), options)
}