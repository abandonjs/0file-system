import { isString } from "asura-eye"

export type MatchLike = string | string[]
/**
 * @title match
 * @description 匹配是否符合matchs规则
 * @param str string
 * @param matchs string | string[]
 * @returns boolean
 */
export function match(str: string, matchs: MatchLike): boolean {
	if (!Array.isArray(matchs)) {
		matchs = [matchs]
	}
	for (let i = 0; i < matchs.length; i++) {
		if (isString(matchs[i]))
			if (new RegExp(`^${matchs[i].replaceAll('*', '.*')}$`).test(str)) {
				return true
			}
	}
	return false
}