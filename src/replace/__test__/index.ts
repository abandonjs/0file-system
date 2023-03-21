import { replace } from '..'
import { rmdir } from '../../remove'

rmdir('./lib2')
replace({
	from: './lib',
	to: './lib2',
	// ignore: ['*.d.ts'],
	// clearEmptyDir: true,
	clearEmptyDir: false,
})