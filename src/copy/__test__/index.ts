import { copy } from '..'
import { rmdir } from '../../remove'

rmdir('./lib2')
copy('./lib', './lib2', {
	ignore: ['*.d.ts'],
	clearEmptyDir: true,
	// clearEmptyDir: false,
})