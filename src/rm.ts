import fs from 'fs';
// 删除目录

async function _rmdir(path: string): Promise<NodeJS.ErrnoException | null> {
	return new Promise(rs => {
		fs.rmdir(path, error => {
			rs(error)
		})
	})
}


export async function rmdir(path: string) {

	const result = await _rmdir(path)
	if (result === null) return null;

	if (result.code === 'ENOTEMPTY') {
		const paths: string[] = path.split('/') || []
		for (let i = paths.length; i-- > 0;)
			console.log({ path })
	}

	return null
}