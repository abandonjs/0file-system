import { pathResolve } from '../../util'
import { toBe, test } from 'unit-testing-js'
import { log } from '0log'
import * as _ from '..'

const path = pathResolve(__dirname)

const data =
	`1. aaaa
2. baaa
3. caaa
4. daaa`

test('read', toBe,
	// { param: _.read(path('./files/a.txt')).toString().replace(/\r/gi, ''), tobe: data },
	{
		param: _.readFile(path('./files/a.txt')).replace(/\r/gi, '')
		, tobe: data
	},
)

test('dir', toBe,
	{ param: _.readDir(path('./files')), tobe: ['a.txt', 'aa', 'aaa', 'data', 'doc'] }
)

// const data3 = _.readTree(path('./files'), { depth: 1, readData: false })
// console.log(data3)

// test('dirTree', toBe,
// 	{ param: _.readDirTree(path('./files')) }
// )