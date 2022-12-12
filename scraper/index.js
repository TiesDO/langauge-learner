import { getEnglishVerbList } from './modules/wordlist.fetch.js';

getEnglishVerbList()
	.then((result) => {
		console.log(result);
	})
	.catch((reason) => {
		console.error(reason);
	});
