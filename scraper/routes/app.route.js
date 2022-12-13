import { Router } from 'express';
import { DB, Queries } from '../dep.js';
import { allowAnonymous } from '../modules/middleware/authentication.middleware.js';

const router = Router();

router.get('/', allowAnonymous, (req, res) => {
	console.log(Queries);

	return res.send('z');
});

export default router;
