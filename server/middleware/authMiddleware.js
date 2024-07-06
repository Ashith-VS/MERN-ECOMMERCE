const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
    const token = req.header('Authorization');
    // console.log('tokenbvhfcfg: ', token);
    if (!token) return res.status(401).json({ error: 'Access denied' });
    try {
     const decoded = jwt.verify(token, process.env.JWT_SECRET);
    //  console.log('decoded: ', decoded);
     req.userId = decoded.id;
    //  console.log('req.userId: ', req.userId);
     next();
     } catch (error) {
     res.status(401).json({ error: 'Invalid token' });
     }
     };

     module.exports = verifyToken;