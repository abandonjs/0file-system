import fs from 'fs'
import { parse } from 'node-xlsx'

/**
 * @title readXlsx
 * @description 读取xlsx文件数据
 * @param path string 准确的xlsx路径
 */
export function readXlsx(path: string) {
	return parse(fs.readFileSync(path))
}

/**
 * @title xlsxFormat
 * @description 将xlsx数据格式化
 * @param xData 待格式化数据
 * @returns { [SheetName]: SheetData }
 */
export function xlsxFormat(xData: any[]): { [key: string]: any[] } {
	const result = {}
	xData.forEach((unit: { name: string, data: any[][] }) => {
		const { name = '', data = [] } = unit
		if (result[name] === undefined) {
			result[name] = data
		}
	})

	return result
}