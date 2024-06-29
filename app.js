const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const shopRoutes = require('./routes/shopRoutes');
const adminRoutes = require('./routes/adminRoutes');
const notFoundRoutes = require('./routes/notFoundRoutes');

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Handle Shop Routes
app.use(shopRoutes);

// Handle admin routes
app.use(adminRoutes);

// Not Found Routes
app.use(notFoundRoutes);

app.listen(3001);
