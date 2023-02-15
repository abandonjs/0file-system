export interface DataUnit {
	name: string
	path?: string
	data?: string
	children?: DataUnit[]
}
export interface Config {
	use?: string[]
	depth?: 'auto' | number
	ignore?: string[]
}