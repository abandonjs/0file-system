import { mergeJSON } from '../src'

mergeJSON('./test/json', './test/mergeFile.ts', { tree: true, toDefaultExport: true })
// mergeJSON('./test/json', './test/mergeFile.json', { tree: true })
// mergeJSON('./test/json/ts.json','./test/mergeFile.json')