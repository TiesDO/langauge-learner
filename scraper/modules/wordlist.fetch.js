import got from 'got';

export const GetEnglishVerbList = () => {
	return new Promise((res, rej) => {
		got
			.get('https://www.linguasorb.com/english/verbs/most-common-verbs/')
			.then((result) => {
				res(result);
			})
			.catch((reason) => {
				rej(reason);
			});
	});
};
