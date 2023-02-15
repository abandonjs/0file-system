import fs from 'fs'
import { isDirectory } from '../util'
import type { Config, DataUnit } from './type'

function __match(names: string[] = [], ignore: string[]) {
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

export function readDirTree(path: string, config: Config) {
	const { depth = 'auto', ignore = [], use = [] } = config || {}

	const data: DataUnit[] = []

	const dirs = __match(fs.readdirSync(path), ignore)

	dirs.forEach(name => {
		const newPath = path + '/' + name
		const unit: DataUnit = {
			name,
			path,
			data: '',
			children: [],
		}
		if (isDirectory(newPath)) {
			unit.children = readDirTree(newPath, config)
		} else {
			if (use.filter(u => name.indexOf(u) > -1).length > -1)
				unit.data = fs.readFileSync(newPath).toString()
		}
		data.push(unit)
	})


	return data
}