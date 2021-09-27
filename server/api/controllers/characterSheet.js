import CharacterSheet from '../../models/CharacterSheet.js';
import User from '../../models/User.js';

export async function createCharacterSheet(req, res) {
  try {
    const user = await User.findById(req.user);

    if (!user) {
      return res.status(400).json({ msg: 'No user found' });
    }

    let characterSheet = await CharacterSheet.create(req.body);

    //Add reference to new character to user character list
    await User.findByIdAndUpdate(req.user, {
      $push: { characters: characterSheet._id },
    });

    res.status(201).json(characterSheet);
  } catch (error) {
    console.error(error);
    res.status(500).json('Server Error');
  }
}
