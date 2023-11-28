import { replace } from '..'
import { rmdir } from '../../remove'

rmdir('./lib2')
replace({
	from: './lib',
	to: './lib2',
	include: ['*.d.ts'],
	keepSourceFile: true,
	ignore: ['*.map'],
	// clearEmptyDir: true,
	clearEmptyDir: false,
})