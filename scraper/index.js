import express, { json } from 'express';
import { dummyAuth } from './services/authentication.js';
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

app.get('/user/login', (req, res) => {
	try {
		if (!req.body.username || !req.body.password) {
			return res.send(400);
		}

		const { username, password } = req.body;

		const token = dummyAuth.tryGetToken(username, password);

		return res.json(token);
	} catch (e) {
		if (e.code === 'AUTH_FAIL') {
			return res.status(403).json(e);
		}

		console.log(e);
		return res.status(500).send('something went wrong');
	}
});

app.get('/user/verify', (req, res) => {
	const token = req.headers?.authorization;

	if (!token) {
		return res.status(403);
	}

	const split = token.split(' ');

	if (split[0] !== 'Bearer') {
		return res.status(403);
	}

	return res.json(
		dummyAuth.verifyToken(split[1]) ? 'valid token!' : 'invalid token'
	);
});

app.listen(port, () => {
	console.log(`server started; running on: http://localhost:${port}`);
});
