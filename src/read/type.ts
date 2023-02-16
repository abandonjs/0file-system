/**
 * @description 读取文件 规则
 */
export interface ReadFileRule {
	test: RegExp
	loader: <T>(path: string, options?: ReadFileOptions) => T
}

/**
 * @default { encoding: 'utf8', flag: 'r' }
 * @description 读取文件配置选项
 */
export interface ReadFileOptions {
	encoding: BufferEncoding
	flag?: string | undefined
}

/**
 * @description 文件树结构数据单元
 */
export interface TreeDataUnit {
	name: string
	isDir: boolean
	files: string[]
	dirs: string[]
	path?: string
	data?: string
	children?: TreeDataUnit[]
}

/**
 * 
 */
export interface ReadTreeOptions {
	use?: string[]
	depth?: 'auto' | number
	ignore?: string[]
	files?: string[]
	dirs?: string[]
	/**
	 * @description 读取文件数据
	 * @default true
	 */
	readData?: boolean

	/**
	 * @default utf8
	 */
	encoding?: BufferEncoding
	flag?: string | undefined
	withFileTypes?: false
}