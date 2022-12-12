import { GetEnglishVerbList } from './modules/wordlist.fetch.js';

GetEnglishVerbList()
	.then((result) => {
		console.log(result.body);
	})
	.catch((reason) => {
		console.error(reason);
	});
