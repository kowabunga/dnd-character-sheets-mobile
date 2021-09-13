import mongoose from 'mongoose';

const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required for this item'],
  },
  description: {
    type: String,
  },
});

const SpellSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required for this spell'],
  },
  damage: {
    type: String,
    required: [true, 'Please enter a value similar to the following: "3d5"'],
  },
});

const CharacterSheetSchema = new mongoose.Schema({
  characterName: {
    type: String,
    required: true,
  },
  characterClass: {
    type: String,
    required: true,
  },
  characterLevel: {
    required: true,
    default: 1,
    max: 20,
    min: 1,
  },
  experiencePoints: {
    default: 0,
  },
  skills: {
    acrobatics: { required: true, default: 0, max: 8, min: 0 },
    animalHandling: { required: true, default: 0, max: 8, min: 0 },
    arcana: { required: true, default: 0, max: 8, min: 0 },
    athletics: { required: true, default: 0, max: 8, min: 0 },
    deception: { required: true, default: 0, max: 8, min: 0 },
    history: { required: true, default: 0, max: 8, min: 0 },
    insight: { required: true, default: 0, max: 8, min: 0 },
    intimidation: { required: true, default: 0, max: 8, min: 0 },
    investigation: { required: true, default: 0, max: 8, min: 0 },
    medicine: { required: true, default: 0, max: 8, min: 0 },
    nature: { required: true, default: 0, max: 8, min: 0 },
    perception: { required: true, default: 0, max: 8, min: 0 },
    performance: { required: true, default: 0, max: 8, min: 0 },
    persuasion: { required: true, default: 0, max: 8, min: 0 },
    religion: { required: true, default: 0, max: 8, min: 0 },
    slightOfHand: { required: true, default: 0, max: 8, min: 0 },
    stealth: { required: true, default: 0, max: 8, min: 0 },
    survival: { required: true, default: 0, max: 8, min: 0 },
  },
  mainStats: {
    strength: { required: true, default: 0, max: 20, min: 0 },
    dexterity: { required: true, default: 0, max: 20, min: 0 },
    constitution: { required: true, default: 0, max: 20, min: 0 },
    intelligence: { required: true, default: 0, max: 20, min: 0 },
    wisdom: { required: true, default: 0, max: 20, min: 0 },
    charisma: { required: true, default: 0, max: 20, min: 0 },
    armor: { required: true, default: 0, min: 0 },
    initiative: { required: true, default: 0, min: 0 },
    speed: { required: true, default: 0, min: 0 },
    maxHealth: { required: true, default: 0, min: 0 },
    currentHealth: { required: true, default: 0, min: 0 },
    tempHealth: { required: true, default: 0, min: 0 },
    passiveWisdom: { required: true, default: 0, min: 0 },
  },
  attackStats: {
    spellAttack: Number,
    spellSave: Number,
  },
  equipment: {
    money: {
      cp: Number,
      sp: Number,
      ep: Number,
      gp: Number,
      pp: Number,
    },
    items: [ItemSchema],
  },
  otherProficinciesAndLanguages: [String],
  featuresAndTraits: [String],
  spells: {
    cantrips: [SpellSchema],
    level1: [SpellSchema],
    level2: [SpellSchema],
    level3: [SpellSchema],
    level4: [SpellSchema],
    level5: [SpellSchema],
    level6: [SpellSchema],
    level7: [SpellSchema],
    level8: [SpellSchema],
    level9: [SpellSchema],
  },
});

const CharacterSheet = mongoose.model('charactersheet', CharacterSheetSchema);

export default CharacterSheet;
