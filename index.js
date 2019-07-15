const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

/**
 * @description Custom imports
 */
const app = require('./app');
const server = require('./server');

/**
 * TODO Import route endpoint handler files below
 */

/**
 * @description Initialize Configs
 */
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
};

/**
 * @description Initialize Global Middleware
 */
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true })); // Parse application/x-www-form-urlencoded
app.use(bodyParser.json());                         // Parse application/json
app.use(express.static(__dirname + '/public'));     // Load static assets

// --------------------------- [Routes - START] ---------------------------

app.get('/', (req, res) => res.status(200).json({msg: 'Express API is online'}));

/* TODO Initialize endpoints here */

// --------------------------- [Routes - END] ---------------------------