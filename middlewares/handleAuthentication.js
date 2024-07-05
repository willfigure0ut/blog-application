const jwt = require("jsonwebtoken")
const secretKey = "ABCabc123@ojha"

const authMiddleware = (req, res, next) => {
    const token = req.cookies.token;
    
    if (!token) {
      return res.redirect('/login');
    }
  
    try {
      const decoded = jwt.verify(token, secretKey);
      req.user = decoded;
      next();
    } catch (error) {
      console.log(error)
      res.clearCookie('token');
      return res.redirect('/login');
    }
  };

module.exports = authMiddleware