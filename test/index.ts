// import '../src/read/__test__'
import fs from 'fs'
import csv from 'csvtojson/v2'
import { pathResolve } from '../src/util'
import { log } from '0log'
import { isArray } from 'check-it-type'
import { readXlsx } from '../src/read'
import { Converter } from 'csvtojson/v2/Converter'

// const p = pathResolve(__dirname)('./xls/b.csv').toString()
// console.log(readXlsx(p))

// const Converter = csv.Converter()
const res = csv()
	// .fromFile(pathResolve(__dirname)('./xls/b.csv'))
	// .fromFile(pathResolve(__dirname)('./xls/b.xls'))
	.fromFile('./test/xls/b.xls')
	.then(d => {
		isArray(d) && d.forEach(item => {
			// log(item)
			// Object.keys(item).forEach(it => {
			// 	log(item[it].toString())
			// })
		})
	})

// console.log(res)


// const csvString = fs.readFileSync('./test/xls/b.xls', { encoding: 'utf16le' });
// const csvString = fs.readFileSync('./test/xls/b.xls', { encoding: 'utf16le' }).toString();
// console.log(csvString)
// new Converter({ constructResult: false }).fromString(csvString, function (err, result) {
// 	//your code here console.log(err); 
// 	console.log(result);

// })