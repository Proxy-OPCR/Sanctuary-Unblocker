const express = require('express');
const request = require('request');

const router = express.Router();

// Rammerhead proxy endpoint
router.use('/rammerhead', (req, res) => {
    const url = `https://example.com${req.url}`; // Replace with the actual target URL

    const options = {
        method: req.method,
        url: url,
        headers: req.headers,
        body: req.body,
        json: true
    };

    request(options, (error, response, body) => {
        if (error) {
            return res.status(500).send(error);
        }
        res.status(response.statusCode).send(body);
    });
});

module.exports = router;