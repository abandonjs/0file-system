import { WriteFileOptions } from 'fs'
import { read } from '../read'
import { writeFile } from '../write'
import { isArray, isObject, isString } from 'asura-eye'

type MergeJSONOptions = {
  /**
   * @description 合并成一个新的树状的数据结构
   */
  tree?: boolean
} & WriteFileOptions

/**
 * 
 * @param {string|string[]} entry
 */
export function mergeJSON(entry: string | string[], output: string, option: MergeJSONOptions = {}) {
  // eslint-disable-next-line
  // const { tree = false, ...config } = option
  
  const handleItemData = (value: any) => {
    if (isArray(value)) {
      value.forEach((item, index) => {
        value[index] = handleItemData(item)
      })
    }
    if (isObject(value) && isString(value.data)) {
      try {
        value.data = JSON.parse(value.data)
      } catch (error) {
        console.error('parse error: ', value.name)
      }
    }
    return value
  }
  const data: any = []
  if (isArray(entry)) {
    entry.forEach(item => {
      const itemData = read(item, { tree: true })
      data.push(handleItemData(itemData))
    })
  } else {
    const itemData = read(entry, { tree: true })
    data.push(handleItemData(itemData))
  }
  writeFile(output, JSON.stringify(data, null, 2))
  // console.log(data)
}