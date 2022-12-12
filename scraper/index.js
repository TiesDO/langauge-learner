import express, { json } from 'express';
import scraper from './services/scraper.js';

const app = express();
const port = 4000;

app.use(json());

app.get('/list', (req, res) => {
	scraper
		.fetchWordlist()
		.then((list) => res.json(list))
		.catch((err) => res.status(500).json({ message: err }));
});

app.listen(port, () => {
	console.log(`server started; running on: http://localhost:${port}`);
});
