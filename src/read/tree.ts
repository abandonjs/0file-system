import { isDirectory } from '../util'
import { readFile } from './file'
import { readDir } from './dir'
import type { ReadTreeOptions, TreeDataUnit } from './type'

function _match_(names: string[] = [], ignore: string[]) {
	return names.filter((name = '') => {
		for (let i = 0; i < ignore.length; i++) {
			const unit: string = ignore[i]

			if (unit === name) {
				return false
			}
			if (unit.indexOf('*') > -1) {
				const [before = '', after = ''] = unit.split('*') || ['', '']
				if (
					(before !== '' && name.indexOf(before) === 0)
					|| (after !== '' && name.indexOf(after) > -1)
				) {
					return false
				}
			}
		}
		return true
	})
}

/**
 * @title readTree
 * @description 读取文件结构,以及内容
 * @param path {string}
 * @param options {?ReadTreeOptions}
 * @returns {TreeDataUnit[]}
 */
export function readTree(path: string, options?: ReadTreeOptions): TreeDataUnit[] {
	const {
		depth = 'auto', ignore = [], readData = true,
		use = [], files = [], dirs: _dirs_ = [],
		encoding = 'utf8',
		flag = 'r',
		withFileTypes
	} = options || {}

	const data: TreeDataUnit[] = []

	let dirs = []
	if (files.length === 0 && _dirs_.length === 0) {
		dirs = _match_(readDir(path, { encoding, withFileTypes }), ignore) || []
	} else {
		dirs = files.concat(dirs)
	}

	dirs.forEach(name => {
		const newPath = path + '/' + name
		const isDir = isDirectory(newPath)
		const newDirs = []
		const files = []
		const list = (isDir ? readDir(newPath) : [])
		list.forEach(fileOrDir => {
			const newPath2 = newPath + '/' + fileOrDir
			if (isDirectory(newPath2)) {
				newDirs.push(fileOrDir)
			} else {
				files.push(fileOrDir)
			}
		})
		const unit: TreeDataUnit = {
			name,
			path,
			isDir,
			files,
			dirs: newDirs,
			data: '',
			children: [],
		}
		if (isDir) {

			options.dirs = newDirs
			options.files = files

			if (depth === 'auto') {
				unit.children = readTree(newPath, options)
			} else if (depth > 0) {
				options.depth = depth - 1
				unit.children = readTree(newPath, options)
			}
		} else if (readData) {
			if (
				use.length === 0
				|| (use.filter(u => name.indexOf(u) > -1).length > 0)
			)
				unit.data = readFile(newPath, { encoding, flag })
		}
		data.push(unit)
	})


	return data
}