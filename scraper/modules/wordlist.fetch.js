import got from 'got';
import { parseEnglishVerbTable } from './wordlist.parse.js';

export const getEnglishVerbList = () => {
	return new Promise(async (res, rej) => {
		// got
		// 	.get('https://www.linguasorb.com/english/verbs/most-common-verbs/')
		// 	.then((result) => {
		// 		try {
		// 			const parsed = parseEnglishVerbTable(result.body);
		// 			res(parsed);
		// 		} catch (err) {
		// 			rej(err);
		// 		}
		// 	})
		// 	.catch((reason) => {
		// 		rej(reason);
		// 	});

		try {
			// get all 4 pages
			const p1 = got(
				'https://www.linguasorb.com/english/verbs/most-common-verbs/1'
			);
			const p2 = got(
				'https://www.linguasorb.com/english/verbs/most-common-verbs/2'
			);
			const p3 = got(
				'https://www.linguasorb.com/english/verbs/most-common-verbs/3'
			);
			const p4 = got(
				'https://www.linguasorb.com/english/verbs/most-common-verbs/4'
			);

			// wait for the pages and then parse them
			const parsed = parseEnglishVerbTable([
				await p1,
				await p2,
				await p3,
				await p4,
			]);

			res(parsed);
		} catch (e) {
			rej(e);
		}
	});
};
