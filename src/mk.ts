import fs from 'fs'

type Path = string
type Options = {
	recursive?: boolean,
	mode?: string | number
}


function _mkdir(path: Path, options: Options = {
	mode: 0o777,
	recursive: false
}): Promise<NodeJS.ErrnoException | null> {
	return new Promise(resolve => {
		fs.mkdir(path, options, error => {
			resolve(error)
		})
	})
}

/**
 * 创建文件目录
 * @param path 文件目录
 * @param options 
 * @returns 
 */
export async function mkdir(path: Path, options: Options = {
	mode: 0o777,
	recursive: false
}): Promise<NodeJS.ErrnoException | null> {

	const result = await _mkdir(path, options)

	if (!result) return null

	if (result.code === "EEXIST") {
		return result
	}

	if (result.code !== 'ENOENT') return result

	const paths: string[] = path.split('/') || []
	let _path = '.'

	for (let i = 1; i < paths.length; i++) {
		_path += '/' + paths[i]
		await mkdir(_path, options)
		if (i === paths.length - 1) {
			return null
		}
	}

	return result
}