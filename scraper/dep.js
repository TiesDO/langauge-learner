import { DevDb, loadQueries } from './services/database.js';

export const DB = DevDb;

export const Queries = loadQueries(new URL('queries', import.meta.url));
