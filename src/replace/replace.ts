import fs from 'fs'
import { isDirectory, match, path, isEmptyDirectory } from '../util'
import { read } from '../read'
import { writeFile } from '../write'

export interface Loader {
	loader: (path: string, data: string) => void
	[key: string]: any
}

export interface ReplaceRule {
	test: RegExp
	exclude?: (RegExp | string)[]
	use: Loader | Loader[]
}

export interface ReplaceConfig {
	from: string,
	to: string,
	rules?: ReplaceRule[]
	/**
	 * @description 删除多余文件夹
	 * @default true
	 */
	clearEmptyDir?: boolean
	/**
	 * @description 忽略文件路径
	 */
	ignore?: string[]
	/**
	 * @description 保留源文件
	 * @default false
	 */
	keepSourceFiles?:boolean
}

export function replace(config: ReplaceConfig) {

	const { from, to, ignore, clearEmptyDir = true, keepSourceFiles = false } = config

	if (!isDirectory(from)) {
		if (match(from, ignore)) return;
		fs.copyFileSync(from, to, fs.constants.COPYFILE_FICLONE)
		return;
	}
	// 读取目录下的文件，返回文件名及文件类型{name: 'xxx.txt, [Symbol(type)]: 1 }
	const sourceFile = fs.readdirSync(from, { withFileTypes: true })

	for (const file of sourceFile) {
		// 源文件 地址+文件名
		const srcFile = path(from, file.name)
		// 目标文件
		const tagFile = path(to, file.name)

		if (match(srcFile, ignore)) continue;

		const newConfig: ReplaceConfig = JSON.parse(JSON.stringify(config))
		newConfig.from = srcFile
		newConfig.to = tagFile

		// 文件是目录且未创建
		if (file.isDirectory() && !fs.existsSync(tagFile)) {
			if (clearEmptyDir && isEmptyDirectory(srcFile, ignore)) continue;
			fs.mkdirSync(tagFile)
			replace(newConfig)
			continue;
		}
		if (file.isDirectory() && fs.existsSync(tagFile)) {
			// 文件时目录且已存在
			replace(newConfig)
			continue;
		}
		if (!file.isDirectory()) {
			keepSourceFiles && fs.copyFileSync(srcFile, tagFile, fs.constants.COPYFILE_FICLONE)
			const data = read(srcFile).toString()
			writeFile(tagFile + '.json', JSON.stringify({ data }))
		}
	}
}