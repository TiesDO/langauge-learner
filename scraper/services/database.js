import fs from 'fs';
import path from 'path';

export const loadQueries = (queryDir) => {
	try {
		console.log(`loading queries from: ${queryDir}`);

		const output = {};
		const fileNames = fs.readdirSync(queryDir, 'utf-8').map((f) => {
			const split = f.split('.');
			return { name: split[0], extension: split[1], fullname: f };
		});

		for (let i = 0; i < fileNames.length; i++) {
			try {
				const file = fs.readFileSync(
					path.join(
						queryDir.toString().replace('file:///', ''),
						fileNames[i].fullname
					),
					'utf-8'
				);

				output[fileNames[i].name] = file;
			} catch (e) {
				console.log(e);
				continue;
			}
		}

		return output;
	} catch (e) {
		return 'nope';
	}
};

export const DevDb = {};
