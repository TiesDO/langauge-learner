import fs from 'fs';

export const loadQueries = (queryDir) => {
	try {
		console.log(`loading queries from: ${queryDir}`);

		files = fs.readdirSync(queryDir);

		const output = {};

		for (let i = 0; i < files.length; i++) {
			try {
				console.log(fs.readFileSync(files[i]));
			} catch (e) {
				console.log(e);
				continue;
			}
		}
	} catch (e) {
		return 'nope';
	}
};

export const DevDb = {};
