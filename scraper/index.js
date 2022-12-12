import express, { json } from 'express';
import { fetchEnglishVerbList } from './modules/wordlist.fetch.js';

const app = express();
const port = 4000;

app.use(json());

app.get('/list', (req, res) => {
	fetchEnglishVerbList()
		.then((list) => res.json(list))
		.catch((err) => res.status(500).json({ message: err }));
});

app.listen(port, () => {
	console.log(`server started; running on: http://localhost:${port}`);
});
