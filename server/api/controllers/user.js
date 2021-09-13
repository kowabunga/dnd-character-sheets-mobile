import User from '../../models/User.js';
import { signJwt } from '../../utils/jwt.js';

export async function fetchUser(req, res) {
  try {
    //User must be logged in for this to work!
    //Get user by id extracted from jwt
    const user = await User.findById(req.user)
      .select('_id name email')
      .populate('characters');

    if (!user) {
      return res.status(400).json({ msg: 'Email not registered. Sign up' });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
}

export async function createUser(req, res) {
  try {
    const { name, email, password, confirmPassword } = req.body;

    //Check if user already exists
    let user = await User.findOne({ email });

    if (user) {
      return res
        .status(400)
        .json({ msg: 'Already registered. Log in instead' });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ msg: 'Passwords do not match.' });
    }

    //Create user
    user = new User({ name, email, password });

    user.save();

    const token = signJwt({ userId: user._id });

    res.status(200).json({ user, token });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
}
