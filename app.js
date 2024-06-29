const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const shopRoutes = require('./routes/shopRoutes');
const adminData = require('./routes/adminRoutes');
const notFoundRoutes = require('./routes/notFoundRoutes');

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Handle public assets
app.use(express.static(path.join(__dirname, 'public')));

// Set  template  engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Handle Shop Routes
app.use(shopRoutes);

// Handle admin routes
app.use(adminData.router);

// Not Found Routes
app.use(notFoundRoutes);

app.listen(3001);
