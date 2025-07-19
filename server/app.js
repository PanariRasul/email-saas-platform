// server/app.js

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const campaignRoutes = require('./routes/campaignRoutes');
const formRoutes = require('./routes/formRoutes');
const analyticsRoutes = require('./routes/analyticsRoutes');
const testRoutes = require('./routes/testRoute');
const statsRoutes = require('./routes/statsRoutes');

require('dotenv').config();

// Initialize app
const app = express();

// Connect to DB
connectDB();

// Middleware
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/campaigns', campaignRoutes);
app.use('/api/forms', formRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/auth/stats', statsRoutes); // ✅ mount stats
// app.use('/api/campaigns', require('./routes/campaignRoutes'));


app.use('/api/test', testRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.status(200).json({ message: 'Server is healthy!' });
});

module.exports = app;
