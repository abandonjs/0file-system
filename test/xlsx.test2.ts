// import { readXlsx, xlsxFormat, writeXlsx, 
// 	// readXlsxs
//  } from './index.test'

// // console.log(readXlsxs('./test/xls')?.xls?.xls2)

// const dataSheet1 = [
// 	[1, 2, 3],
// 	[true, false, null, 'sheetjs'],
// 	['foo', 'bar', new Date(), '0.3'],
// 	['baz', null, 'qux'],
// ];
// const dataSheet2 = [
// 	[4, 5, 6],
// 	[7, 8, 9, 10],
// 	[11, 12, 13, 14],
// 	['baz', null, 'qux'],
// ];
// const range = { s: { c: 0, r: 0 }, e: { c: 0, r: 3 } }; // A1:A4
// const sheetOptions = { '!merges': [range] };

// 0 && writeXlsx('./test/xls/b.xls', [
// 	{ name: 'myFirstSheet', data: dataSheet1 },
// 	{ name: 'mySecondSheet', data: dataSheet2, options: sheetOptions },
// ])

// 0 && console.log(
// 	xlsxFormat(readXlsx('./test/xls/a.xlsx'))
// )