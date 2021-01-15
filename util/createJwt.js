const jwt = require('jsonwebtoken');

const createJwt = (payload, secret, expiration) => {
  const token = jwt.sign(payload, secret, {expiresIn: expiration || '7d'});
  return token
}; 

module.exports = createJwt