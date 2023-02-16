import _path_ from 'path'

export const path = (...rest: string[]) => _path_.resolve(...rest)

export const pathResolve = (__dirname: string) => (...rest: string[]) => _path_.resolve(__dirname, ...rest)