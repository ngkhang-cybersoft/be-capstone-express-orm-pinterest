import bcrypt from 'bcrypt';

/**
* Compare a plaintext password with an encrypted hash.
*
* @param {string} data - The plaintext password to compare.
* @param {string} encrypted - The hashed password to compare against.
* @return {boolean} True if the plaintext password matches the hash, false otherwise.
*/
export const comparePass = (data, encrypted) => {
  return bcrypt.compareSync(data, encrypted);
}

/**
* Hash a plaintext password with a salt.
*
* @param {string} data - The plaintext password to hash.
* @param {number} salt - The salt rounds to use for hashing (default is 10).
* @returns {string} The hashed password.
*/
export const hashPass = (data, salt = 10) => {
  return bcrypt.hashSync(data, salt);
}
