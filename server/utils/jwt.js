import jwt from 'jsonwebtoken';

//Create jwt with expiration date of now seven days
export function signJwt(userId) {
  return jwt.sign(userId, process.env.SECRET, {
    expiresIn: Date.now() + '7d',
  });
}

export function verifyJwt(token) {
  return jwt.verify(token, process.env.SECRET);
}
