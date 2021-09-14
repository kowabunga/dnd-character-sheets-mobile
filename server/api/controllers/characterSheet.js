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
    const {
      characterName,
      characterClass,
      characterLevel,
      experiencePoints,
      skills,
      mainStats,
      attackStats,
      equipment,
      otherProficienciesAndLanguages,
      featuresAndTraits,
      spells,
    } = req.body;
    let characterSheet = new CharacterSheet({
      characterName,
      characterClass,
      characterLevel,
      experiencePoints,
      skills,
      mainStats,
      attackStats,
      equipment,
      otherProficienciesAndLanguages,
      featuresAndTraits,
      spells,
    });

    characterSheet.save();

    res.status(201).json(characterSheet);
  } catch (error) {
    console.error(error);
    res.status(500).json('Server Error');
  }
}
