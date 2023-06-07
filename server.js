const express = require('express');
const app = express();
app.use(express.json());

// creating the database connection pool
const pool = new Pool({
	user: 'postgres',
	host: 'localhost',
	database: 'postgres',
	password: 'postgres',
	port: 5432, // Postgres server always runs on this port
});

const postsRouter = require('./routes/posts');
app.use('/posts', postsRouter);

