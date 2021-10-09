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

export async function getCharacterSheet(req, res) {
  try {
    const user = await User.findById(req.user);
    if (!user) {
      return res.status(400).json({ msg: 'No user found' });
    }

    let characterSheet = await CharacterSheet.findById(req.params.id);

    if (!characterSheet) {
      return res.status(400).json({ msg: 'Character sheet not found' });
    }

    res.status(200).json(characterSheet);
  } catch (error) {
    console.error(error);
    res.status(500).json('Server Error');
  }
}

export async function updateCharacterSheet(req, res) {
  try {
    const user = await User.findById(req.user);

    if (!user) {
      return res.status(400).json({ msg: 'No user found' });
    }

    const updatedCharacterSheet = await CharacterSheet.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(201).json({ msg: 'Character Updated', updatedCharacterSheet });
  } catch (error) {
    console.error(error);
    res.status(500).json('Server Error');
  }
}

export async function deleteCharacterSheet(req, res) {
  try {
    const user = await User.findById(req.user);

    if (!user) {
      return res.status(400).json({ msg: 'No user found' });
    }

    await CharacterSheet.findByIdAndDelete(req.params.id);

    res.status(201).json({ msg: 'Character deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json('Server Error');
  }
}
