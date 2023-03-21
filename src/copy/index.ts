import fs from 'fs'
import { isDirectory, match, path, isEmptyDirectory } from '../util'

/**
 * @description 复制方法的配置
 */
export interface CopyConfig {
	/**
	 * @description 删除多余文件夹
	 * @default true
	 */
	clearEmptyDir?: boolean
	/**
	 * @description 忽略文件路径
	 */
	ignore?: string[]
}

/**
 * @title copy
 * @description 复制文件(夹)
 * @param fromPath {string} 资源路径
 * @param toPath {string} 目标路径
 * @returns 
 * @since 0.1.0
 */
export function copy(fromPath: string, toPath: string, config: CopyConfig = {}): void {
	const { ignore, clearEmptyDir = true } = config

	if (!isDirectory(fromPath)) {
		if (match(fromPath, ignore)) return;
		fs.copyFileSync(fromPath, toPath, fs.constants.COPYFILE_FICLONE)
		return;
	}
	// 读取目录下的文件，返回文件名及文件类型{name: 'xxx.txt, [Symbol(type)]: 1 }
	const sourceFile = fs.readdirSync(fromPath, { withFileTypes: true })

	for (const file of sourceFile) {
		// 源文件 地址+文件名
		const srcFile = path(fromPath, file.name)
		// 目标文件
		const tagFile = path(toPath, file.name)

		if (match(srcFile, ignore)) continue;

		// 文件是目录且未创建
		if (file.isDirectory() && !fs.existsSync(tagFile)) {
			if (clearEmptyDir && isEmptyDirectory(srcFile)) continue;
			fs.mkdirSync(tagFile)
			copy(srcFile, tagFile, config)
			continue;
		}
		if (file.isDirectory() && fs.existsSync(tagFile)) {
			// 文件时目录且已存在
			copy(srcFile, tagFile, config)
			continue;
		}
		!file.isDirectory() && fs.copyFileSync(srcFile, tagFile, fs.constants.COPYFILE_FICLONE)
	}
}

// const run = async () => {
// 	const startTime = await new Date().getTime()
// 	console.log(!fs.existsSync(sourceDir),)
// 	if (!fs.existsSync(sourceDir)) {
// 		throw error('no such file or directory')
// 	} else if (!fs.existsSync(targetDir)) {
// 		await fs.mkdirSync(targetDir)
// 		await copy(sourceDir, targetDir)
// 	} else {
// 		await copy(sourceDir, targetDir)
// 	}

// 	const endTime = await new Date().getTime()
// 	console.log("耗时:", ((endTime - startTime) / 1000).toFixed(2) + "s");
// }
// run()

