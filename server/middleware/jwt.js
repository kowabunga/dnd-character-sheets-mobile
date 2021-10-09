import jwt from 'jsonwebtoken';

export function checkJwt(req, res, next) {
  //Grab token from header
  //User must be logged in for this to work
  const token = req.header('x-auth-token');

  if (!token) {
    return res.status(401).json({ msg: 'No token, unauthorized' });
  }

  //Verify token
  //If valid token, add extracted userId to req and continue
  try {
    const verifiedToken = jwt.verify(token, process.env.SECRET);

    req.user = verifiedToken.userId;
    next();
  } catch (error) {
    return res.status(401).json({ msg: 'Invalid token, unauthorized' });
  }
}
