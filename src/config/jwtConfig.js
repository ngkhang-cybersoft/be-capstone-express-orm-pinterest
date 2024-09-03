import jwt from 'jsonwebtoken';
import responseData from './responseData.js';
import envConfig from './envConfig.js';

const { secretKey } = envConfig;

/**
 * Create a JWT token.
 * 
 * @param {object} data - The payload to be encoded in the token.
 * @returns {string} The generated JWT token.
 */
export const createToken = (data) => {
  return jwt.sign(
    data,
    secretKey,
    {
      algorithm: 'HS256',
      expiresIn: '2 days',
    }
  );
}

/**
 * Verify a JWT token.
 * 
 * @param {string} token - The JWT token to verify.
 * @returns {boolean} True if the token is valid, false otherwise.
 */
export const verifyToken = (token) => {
  return jwt.verify(
    token,
    secretKey,
    (error) => error
  );
}

/**
 * Decode a JWT token.
 * 
 * @param {string} token - The JWT token to decode.
 * @returns {object | null} The decoded payload if the token is valid, or null if invalid.
 */
export const decodeToken = (token) => {
  return jwt.decode(token);
}

/**
* Middleware to verify JWT token from request headers.
*
* @param {object} req - The Express request object.
* @param {object} res - The Express response object.
* @param {funcition} next - The next middleware function.  
*/
export const middlewareToken = (req, res, next) => {
  let { token } = req.headers;

  if (!token) return responseData('', 'Token không được cung cấp!', 401, res);

  let checkToken = verifyToken(token);

  if (!checkToken) {
    res.locals.token = token;
    next();
    return;
  }
  responseData('', 'UnAuthorized', 401, res);
}