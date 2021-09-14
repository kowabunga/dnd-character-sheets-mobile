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
  description: {
    type: String,
    required: [
      true,
      'Please enter something that helps you remember the spell. E.g., "5ft cone, 3d8 damage"',
    ],
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
    type: Number,
    required: true,
    default: 1,
    max: 20,
    min: 1,
  },
  experiencePoints: {
    type: Number,
    default: 0,
  },
  skills: {
    acrobatics: { type: Number, required: true, default: 0, max: 8, min: 0 },
    animalHandling: {
      type: Number,
      required: true,
      default: 0,
      max: 8,
      min: 0,
    },
    arcana: { type: Number, required: true, default: 0, max: 8, min: 0 },
    athletics: { type: Number, required: true, default: 0, max: 8, min: 0 },
    deception: { type: Number, required: true, default: 0, max: 8, min: 0 },
    history: { type: Number, required: true, default: 0, max: 8, min: 0 },
    insight: { type: Number, required: true, default: 0, max: 8, min: 0 },
    intimidation: { type: Number, required: true, default: 0, max: 8, min: 0 },
    investigation: { type: Number, required: true, default: 0, max: 8, min: 0 },
    medicine: { type: Number, required: true, default: 0, max: 8, min: 0 },
    nature: { type: Number, required: true, default: 0, max: 8, min: 0 },
    perception: { type: Number, required: true, default: 0, max: 8, min: 0 },
    performance: { type: Number, required: true, default: 0, max: 8, min: 0 },
    persuasion: { type: Number, required: true, default: 0, max: 8, min: 0 },
    religion: { type: Number, required: true, default: 0, max: 8, min: 0 },
    slightOfHand: { type: Number, required: true, default: 0, max: 8, min: 0 },
    stealth: { type: Number, required: true, default: 0, max: 8, min: 0 },
    survival: { type: Number, required: true, default: 0, max: 8, min: 0 },
  },
  mainStats: {
    strength: { type: Number, required: true, default: 0, max: 20, min: 0 },
    dexterity: { type: Number, required: true, default: 0, max: 20, min: 0 },
    constitution: { type: Number, required: true, default: 0, max: 20, min: 0 },
    intelligence: { type: Number, required: true, default: 0, max: 20, min: 0 },
    wisdom: { type: Number, required: true, default: 0, max: 20, min: 0 },
    charisma: { type: Number, required: true, default: 0, max: 20, min: 0 },
    armor: { type: Number, required: true, default: 0, min: 0 },
    initiative: { type: Number, required: true, default: 0, min: 0 },
    speed: { type: Number, required: true, default: 0, min: 0 },
    maxHealth: { type: Number, required: true, default: 0, min: 0 },
    currentHealth: {
      type: Number,
      required: true,
      default: 0,

      min: 0,
    },
    tempHealth: { type: Number, required: true, default: 0, min: 0 },
    passiveWisdom: {
      type: Number,
      required: true,
      default: 0,
      min: 0,
    },
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
  otherProficienciesAndLanguages: {
    languages: [String],
    otherProficiencies: [String],
  },
  featuresAndTraits: [String],
  spells: {
    cantrips: [SpellSchema],
    level1: {
      totalSlots: {
        type: Number,
        default: 0,
      },
      expendedSlots: {
        type: Number,
      },
      spells: [SpellSchema],
    },
    level2: {
      totalSlots: {
        type: Number,
        default: 0,
      },
      expendedSlots: {
        type: Number,
      },
      spells: [SpellSchema],
    },
    level3: {
      totalSlots: {
        type: Number,
        default: 0,
      },
      expendedSlots: {
        type: Number,
      },
      spells: [SpellSchema],
    },
    level4: {
      totalSlots: {
        type: Number,
        default: 0,
      },
      expendedSlots: {
        type: Number,
      },
      spells: [SpellSchema],
    },
    level5: {
      totalSlots: {
        type: Number,
        default: 0,
      },
      expendedSlots: {
        type: Number,
      },
      spells: [SpellSchema],
    },
    level6: {
      totalSlots: {
        type: Number,
        default: 0,
      },
      expendedSlots: {
        type: Number,
      },
      spells: [SpellSchema],
    },
    level7: {
      totalSlots: {
        type: Number,
        default: 0,
      },
      expendedSlots: {
        type: Number,
      },
      spells: [SpellSchema],
    },
    level8: {
      totalSlots: {
        type: Number,
        default: 0,
      },
      expendedSlots: {
        type: Number,
      },
      spells: [SpellSchema],
    },
    level9: {
      totalSlots: {
        type: Number,
        default: 0,
      },
      expendedSlots: {
        type: Number,
      },
      spells: [SpellSchema],
    },
  },
});

const CharacterSheet = mongoose.model('charactersheet', CharacterSheetSchema);

export default CharacterSheet;
