import { test, expect } from 'rh-test'
import { ignoreMatch } from "./index.test";

test('ignoreMatch',
	expect(ignoreMatch).setParams('a.txt', '*.txt').tobe(true),
	expect(ignoreMatch).setParams('a.txt', ['*.txt']).tobeTruthy(),
	expect(ignoreMatch).setParams('a.txt', ['*.txt']).tobeTruthy(),
)