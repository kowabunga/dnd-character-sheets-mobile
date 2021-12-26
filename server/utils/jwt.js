import jwt from 'jsonwebtoken';

//Create jwt with expiration date of now seven days
export function signJwt(userId) {
  return jwt.sign(userId, process.env.SECRET, {
    expiresIn: 60 * 60 * 24 * 7,
  });
}

export function verifyJwt(token) {
  return jwt.verify(token, process.env.SECRET);
}
