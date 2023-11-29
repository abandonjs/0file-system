// import fs from 'fs'
// import { readXlsx } from './index.test'

// console.log(readXlsx('./test/xls/b.xlsx').length)
// console.log(readXlsx('./test/xls/b.xlsx'))

// const b = fs.readFileSync('./test/xls/b.xlsx', { encoding: 'utf-8', flag: 'r' })
// const bStr = b.toString()
// const bReg = /(<worksheet .+<\/worksheet>)/
// console.log(bStr)
// console.log(bReg.exec(bStr))
// const str = `</sheetViews>
// <sheetData>
// <row r="1"><c r="A1"><v>1</v></c><c r="B1"><v>2</v></c><c r="C1"><v>3</v></c></row>
// <row r="2"><c r="A2" t="b"><v>1</v></c><c r="B2" t="b"><v>0</v></c><c r="D2" t="str"><v>sheetjs</v></c></row>
// <row r="3"><c r="A3" t="str"><v>foo</v></c><c r="B3" t="str"><v>bar</v></c><c r="C3" s="1"><v>44735.482595243055</v></c><c r="D3" t="str"><v>0.3</v></c></row>
// <row r="4"><c r="A4" t="str"><v>baz</v></c><c r="C4" t="str"><v>qux</v></c></row>
// </sheetData>
// <ignoredErrors><ignoredError numberStoredAsText="1" sqref="A1:D4"/></ignoredErrors></worksheet>
// <worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><dimension ref="A1:D4"/><sheetViews><sheetView workbookViewId="0"/></sheetViews>
// <sheetData><row r="1"><c r="A1"><v>4</v></c><c r="B1"><v>5</v></c><c r="C1"><v>6</v></c></row><row r="2"><c r="A2"><v>7</v></c><c r="B2"><v>8</v></c><c r="C2"><v>9</v></c><c r="D2"><v>10</v></c></row><row r="3"><c r="A3"><v>11</v></c><c r="B3"><v>12</v></c><c r="C3"><v>13</v></c><c r="D3"><v>14</v></c></row><row r="4"><c r="A4" t="str"><v>baz</v></c><c r="C4" t="str"><v>qux</v></c></row>
// </sheetData><mergeCells count="1"><mergeCell ref="A1:A4"/></mergeCells><ignoredErrors><ignoredError numberStoredAsText="1" sqref="A1:D4"/></ignoredErrors></worksheet>
// `
// console.log(str)

// console.log(bStr.split('<worksheet').filter(item=>item.indexOf('</worksheet')>-1))

// fs.writeFileSync('./test/data/b.txt', b.toString(), 'utf-8')
// fs.writeFileSync('./test/data/b.txt', '\ufeff' + b.toString(), 'utf-8')
// fs.writeFileSync('./test/data/b.txt', b.toString(), 'utf-8')


// let {createReadStream} = require('fs');
//创建一个可读流
// let rs = fs.createReadStream('./test/xls/b.xlsx');
// // let rs = fs.createReadStream(__dirname + "/demo.txt");
// //只要用到流，就必须检测流的状态
// rs.on('open', function () {
// 	console.log('可读流打开');
// });
// rs.on('close', function () {
// 	console.log('可读流关闭');
// });
// // 给可读流绑定一个data事件，就会触发可读流自动读取内容
// // let result = rs.on('data');//这个表示一次性全部读取进去
// rs.on('data', function (data) {
// 	// data是buffer一个伪数组，data.length值为65536,表示该buffer实例占用内存空间的大小
// 	// 65536/1024 = 64字节，也就是每次读取64字节
// 	console.log(data.length);
// 	console.log(data);
// });

// demo.js
// const { readFile, writeFile, mkdir } = (fs as any).promises;

// ; (async () => {
// 	// 创建模拟数据
// 	let list: any[] = []
// 	for (let i = 0; i < 10; i += 1) {
// 		list.push({
// 			id: i,
// 			name: '小明',
// 			age: 18,
// 			address: '北京市海淀区农业科学院',
// 			phone: '13313366789',
// 		})
// 	}
// 	/*
// 	 * 生成表头，\ufeff 是防止乱码
// 	 * csv中以 `,` 换列，`\n`换行
// 	 */
// 	let title = Object.keys(list[1])
// 	let csvContent = '\ufeff' + title.join(',') + '\n'

// 	// 添加表体
// 	list.forEach((item, index) => {
// 		let c = Object.values(item).join(',') + '\n'
// 		csvContent += c
// 	})
// 	// 生成文件夹存储生成的文件
// 	await mkdir('./test/download')

// 	// 生成csv文件
// 	await writeFile('./test/download/data.csv', csvContent)

// 	// 生成JOSN
// 	await writeFile('./test/download/data.json', JSON.stringify(list))
// 	console.log('File generated successfully，open download to check')
// })()
