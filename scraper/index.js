import express, { json } from 'express';
import { dummyAuth } from './services/authentication.js';
import scraper from './services/scraper.js';

// routes
import adminRoutes from './routes/admin.route.js';
import appRoutes from './routes/app.route.js';

const app = express();
const port = 4000;

app.use(json());

app.use('/', appRoutes);
app.use('/admin', adminRoutes);

app.listen(port, () => {
	console.log(`server started; running on: http://localhost:${port}`);
});
