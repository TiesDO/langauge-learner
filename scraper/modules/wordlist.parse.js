import $ from 'cheerio';

export const parseEnglishVerbTable = (pages) => {
	const list = [];

	for (let i = 0; i < pages.length; i++) {
		// get the table from the body
		const tableRows = $('#verbTable > tbody tr', pages[i].body);

		for (let r = 0; r < tableRows.length; r++) {
			let targetRow = $('td', tableRows[r]);
			let targetCol = $('a', targetRow[1]).text();

			list.push(targetCol);
		}
	}

	return list;
};
