import { readFile } from './file'
import { readDir } from './dir'
import { isDirectory } from '../util'
import { readTree } from './tree'
import type { ReadTreeOptions, TreeDataUnit } from './type'
import { isEffectArray, isString } from 'asura-eye'

export interface ReadOptions extends ReadTreeOptions {
  /**
   * @description 树状数据
   * @default: false
   */
  tree?: boolean
  /**
   * @description 数据合并成一个字符串, 没有路径等其他信息
   * @type {boolean|string}
   * @default false
   * @version 0.0.7
   */
  dataMerge?: boolean | string
}

/**
 * @title read<T>
 * @description 读取文件(夹)
 * @param {string} path
 * @param {ReadOptions} [options]
 * @returns {T|string|string[]}
 */
export function read<T = string>(
  path: string,
  options: ReadOptions = {}
): T | string | string[] | TreeDataUnit[] {
  const {
    tree = false,
    encoding = 'utf8',
    flag = 'r',
    dataMerge = false,
    withFileTypes
  } = options

  if (isDirectory(path)) {
    if (dataMerge) {
      const data = readTree(path, options)
      if (dataMerge) {
        const gap = isString(options.dataMerge) ? options.dataMerge : ''
        const list: string[] = []
        const loop = (array: any[]) => {
          if (!isEffectArray(array)) return
          array.forEach((item: any) => {
            const { children, data } = item
            if (isString(data) && data.length > 0) list.push(data)
            if (isEffectArray(children)) loop(children)
          })
        }
        loop(data)
        return list.join(gap)
      }
      return data
    }
    if (tree) return readTree(path, options)
    if (dataMerge) return ''
    return readDir(path, { encoding, withFileTypes })
  }

  return readFile<T>(path, { encoding, flag })
}
