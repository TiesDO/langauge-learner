import * as wordlistScraper from '../modules/wordlist.fetch.js';

export default {
	fetchWordlist: () => {
		return wordlistScraper.fetchEnglishVerbList();
	},
};
