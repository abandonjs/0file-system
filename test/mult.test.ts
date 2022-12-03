// import { test, expect } from 'rh-test'
// import { writeFileSync } from 'fs'
import { read } from "./index.test";

// 0 && writeFileSync('./test/doc/a.txt', '123')

(async () => {
	const readRes:any = read('./test', ['doc', '*html', '*test.ts'])
	// console.log(await mkdir('./test/aaa/bbb/ccc/ddd'))
	// console.log(await mk('./test'))
	console.log(readRes?.aa?.d?.c.e.f.g)
	// console.log(readRes?.aa?.d?.c.e.f.g['a.txt'])
	// console.log(readRes?.xls)
	// console.log(readRes?.xls?.['a.xlsx'])
	// console.log(readRes?.xls?.xls?.xls)
})()
