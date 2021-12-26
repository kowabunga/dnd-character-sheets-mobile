import User from '../../models/User.js';
import CharacterSheet from '../../models/CharacterSheet.js';
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
    const { firstName, lastName, email, password, confirmPassword } = req.body;

    //Check if user already exists
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({
        msg: `Already registered. Please sign in instead.`,
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ msg: 'Passwords do not match.' });
    }

    user = await User.create({ firstName, lastName, email, password });

    const token = signJwt({ userId: user._id });

    res.status(201).json({
      createdUser: {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      },
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
}

//Catch all function for any user update
export async function updateUser(req, res) {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      oldPassword,
    } = req.body;

    const user = await User.findById(req.user);

    if (!user)
      return res
        .status(400)
        .json({ msg: 'User cannot be found. Please try again' });

    //Check if value is updated (will be undefined if not), then perform update
    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (email) user.email = email;

    //Check if password is to be changed. If so, compare new password to old password. If it matches, update password
    if (oldPassword) {
      const passwordMatch = user.checkPassword(oldPassword);
      if (passwordMatch && password === confirmPassword)
        user.password = password;
    }

    //Save updates to db
    user.save();
    res.status(201).json({ msg: 'Profile updated' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
}

export async function deleteUser(req, res) {
  try {
    const user = await User.findById(req.user);

    if (!user)
      return res.status(400).json({ msg: 'User does not exist. Sign up' });

    await user.delete();
    res.status(200).json({ msg: 'Account deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
}

export async function fetchAllCharacterSheets(req, res) {
  try {
    const user = await User.findById(req.user);

    if (!user) {
      return res.status(400).json({ msg: 'User not found' });
    }

    const characterSheets = await CharacterSheet.find().select(
      '_id characterName characterClass characterLevel'
    );

    if (characterSheets.length === 0) {
      return res.status(404).json({ msg: 'No character sheets found' });
    }

    res.status(200).json(characterSheets);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
}

export async function fetchCharacterSheetbyId(req, res) {
  try {
    const user = await User.findById(req.user);

    if (!user) {
      return res.status(400).json({ msg: 'User not found' });
    }

    const characterSheet = await CharacterSheet.findById(req.params.id);

    if (!characterSheet) {
      return res
        .status(400)
        .json({ msg: 'Cannot find charactersheet by provided id' });
    }
    res.status(200).json(characterSheet);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
}

//For testing!
export async function devDeleteTestUser(req, res) {
  console.log(req.params.userToDelete);
  try {
    await User.findOneAndDelete({ email: req.params.userToDelete });
  } catch (error) {
    console.error(error);
  }
  res.status(200).send('Done');
}
