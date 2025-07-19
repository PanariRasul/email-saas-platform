const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
    let token;

    // ✅ STEP 1: Check if the Authorization header exists and starts with Bearer
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        token = req.headers.authorization.split(' ')[1]; // Extract token
    }

    // ✅ STEP 2: If token is missing, return 401
    if (!token) {
        return res.status(401).json({ message: 'Not authorized, no token' });
    }

    try {
        // ✅ STEP 3: Verify token using JWT_SECRET
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // ✅ STEP 4: Attach user (excluding password) to the request object
        req.user = await User.findById(decoded.id).select('-password');

        // ✅ STEP 5: If user is not found in DB
        if (!req.user) {
            return res.status(401).json({ message: 'User not found' });
        }

        next(); // 🔄 Continue to the next middleware or route
    } catch (error) {
        console.error('Auth error:', error.message);
        return res.status(401).json({ message: 'Not authorized, token failed' });
    }
};

module.exports = { protect };
