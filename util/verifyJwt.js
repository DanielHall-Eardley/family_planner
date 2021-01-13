const jwt = require('jsonwebtoken');

const verifyJwt = (token, secret) => {
  const decodedToken = jwt.verify(token, secret);
  return decodedToken
}; 

module.exports = verifyJwt