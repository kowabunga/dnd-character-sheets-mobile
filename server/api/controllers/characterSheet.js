import CharacterSheet from '../../models/CharacterSheet.js';
import User from '../../models/User.js';

export async function getAllCharacterSheets(req, res) {
  try {
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
}

export async function createCharacterSheet(req, res) {
  try {
    const user = await User.findById(req.user);

    if (!user) {
      return res.status(400).json({ msg: 'No user found' });
    }

    let characterSheet = await CharacterSheet.create(req.body);

    //@TODO add reference to new character to user character list
    // User.
    res.status(201).json(characterSheet);
  } catch (error) {
    console.error(error);
    res.status(500).json('Server Error');
  }
}
