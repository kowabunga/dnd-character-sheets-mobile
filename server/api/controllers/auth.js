import User from '../../models/User.js';
import { signJwt } from '../../utils/jwt.js';

export async function login(req, res) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ msg: 'Email not registered. Sign up' });
    }

    const passMatch = await user.checkPassword(password);

    if (!passMatch) {
      return res.status(400).json({ msg: 'Incorrect password' });
    }

    const token = signJwt({ userId: user._id });

    res.status(200).json(token);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
}
