import { DevDb, loadQueries } from './services/database.js';

export const DB = DevDb;

console.log(import.meta.url);
let qPath = import.meta.url.replace('file:///', '').split('/');
qPath[qPath.length - 1] = 'Queries';
qPath = qPath.join('/');

export const Queries = loadQueries(qPath);
