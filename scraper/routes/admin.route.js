import { Router } from 'express';

const router = Router();

router.get('/login', (req, res) => {
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

export default router;
