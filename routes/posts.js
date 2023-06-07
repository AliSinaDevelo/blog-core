const express = require('express');
const router = express.Router();

// define endpoints amd their handlers
router.get('/', (req, res) => {
	// Handler function for GET /posts
	// retrieve and send all blog posts
});

router.post('/', (req, res) => {
	// Handler function for POST /posts
	// create a new blog post
});

