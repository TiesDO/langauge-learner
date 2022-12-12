import { Router } from 'express';
import { DB } from '../dep.js';
import { allowAnonymous } from '../modules/middleware/authentication.middleware.js';

const router = Router();

router.get('/', allowAnonymous, (req, res) => {
	DB.queries;

	return res.send('z');
});

export default router;
