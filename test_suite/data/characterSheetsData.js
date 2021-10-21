const characterData1 = {
  characterName: 'Test Character',
  characterClass: 'Artificer/Artillerist',
  characterLevel: 10,
  experiencePoints: 0,
  skills: {
    acrobatics: 0,
    animalHandling: 0,
    arcana: 8,
    athletics: 0,
    deception: 0,
    history: 0,
    insight: 5,
    intimidation: 0,
    investigation: 8,
    medicine: 0,
    nature: 0,
    perception: 7,
    performance: 0,
    persuasion: 0,
    religion: 0,
    slightOfHand: 0,
    stealth: 0,
    survival: 0,
  },
  mainStats: {
    strength: 8,
    dexterity: 14,
    constitution: 12,
    intelligence: 20,
    wisdom: 16,
    charisma: 12,
    armor: 16,
    initiative: 2,
    speed: 30,
    maxHealth: 57,
    currentHealth: 54,
    tempHealth: 25,
  },
  attackStats: {
    spellAttack: 9,
    spellSave: 17,
  },
  equipment: {
    money: {
      cp: 0,
      sp: 0,
      ep: 0,
      gp: 294,
      pp: 0,
    },
    items: [
      {
        name: 'mighty umbrellance',
        description: 'does a really cool thing',
      },
    ],
  },
  otherProficienciesAndLanguages: {
    languages: ['common', 'draconic', 'elven'],
  },
  featuresAndTraits: [],
  spells: {
    cantrips: [
      {
        name: 'Ray of Frost',
        description: 'a',
      },
      {
        name: 'firebolt',
        description: 'a',
      },
    ],
    level1: {
      totalSlots: 3,
      expendedSlots: 2,
      spells: [
        {
          name: 'grease',
          description: 'a',
        },
        {
          name: 'faerie fire',
          description: 'a',
        },
        {
          name: "tasha's caustic brew",
          description: 'a',
        },
        {
          name: 'cure wounds',
          description: 'a',
        },
      ],
    },
    level2: {
      totalSlots: 1,
      expendedSlots: 1,
      spells: [
        {
          name: 'alter self',
          description: 'a',
        },
        {
          name: 'see invisibility',
          description: 'a',
        },
        {
          name: 'arcane lock',
          description: 'a',
        },
        {
          name: 'enlarge self',
          description: 'a',
        },
      ],
    },
    level3: {
      totalSlots: 1,
      expendedSlots: 0,
      spells: [
        {
          name: 'revivify',
          description: 'a',
        },
      ],
    },
    level4: {},
    level5: {},
    level6: {},
    level7: {},
    level8: {},
    level9: {},
  },
};

const characterData2 = {
  characterName: 'FAFAFAFA Character',
  characterClass: 'Artificer/Artillerist',
  characterLevel: 10,
  experiencePoints: 0,
  skills: {
    acrobatics: 0,
    animalHandling: 0,
    arcana: 8,
    athletics: 0,
    deception: 0,
    history: 0,
    insight: 5,
    intimidation: 0,
    investigation: 8,
    medicine: 0,
    nature: 0,
    perception: 7,
    performance: 0,
    persuasion: 0,
    religion: 0,
    slightOfHand: 0,
    stealth: 0,
    survival: 0,
  },
  mainStats: {
    strength: 8,
    dexterity: 14,
    constitution: 12,
    intelligence: 20,
    wisdom: 16,
    charisma: 12,
    armor: 16,
    initiative: 2,
    speed: 30,
    maxHealth: 57,
    currentHealth: 54,
    tempHealth: 25,
  },
  attackStats: {
    spellAttack: 9,
    spellSave: 17,
  },
  equipment: {
    money: {
      cp: 0,
      sp: 0,
      ep: 0,
      gp: 294,
      pp: 0,
    },
    items: [
      {
        name: 'mighty umbrellance',
        description: 'does a really cool thing',
      },
    ],
  },
  otherProficienciesAndLanguages: {
    languages: ['common', 'draconic', 'elven'],
  },
  featuresAndTraits: [],
  spells: {
    cantrips: [
      {
        name: 'Ray of Frost',
        description: 'a',
      },
      {
        name: 'firebolt',
        description: 'a',
      },
    ],
    level1: {
      totalSlots: 3,
      expendedSlots: 2,
      spells: [
        {
          name: 'grease',
          description: 'a',
        },
        {
          name: 'faerie fire',
          description: 'a',
        },
        {
          name: "tasha's caustic brew",
          description: 'a',
        },
        {
          name: 'cure wounds',
          description: 'a',
        },
      ],
    },
    level2: {
      totalSlots: 1,
      expendedSlots: 1,
      spells: [
        {
          name: 'alter self',
          description: 'a',
        },
        {
          name: 'see invisibility',
          description: 'a',
        },
        {
          name: 'arcane lock',
          description: 'a',
        },
        {
          name: 'enlarge self',
          description: 'a',
        },
      ],
    },
    level3: {
      totalSlots: 1,
      expendedSlots: 0,
      spells: [
        {
          name: 'revivify',
          description: 'a',
        },
      ],
    },
    level4: {},
    level5: {},
    level6: {},
    level7: {},
    level8: {},
    level9: {},
  },
};

const updatedCharacterData1 = {
  characterName: 'Test Character',
  characterClass: 'Artificer/Artillerist',
  characterLevel: 10,
  experiencePoints: 0,
  skills: {
    acrobatics: 1,
    animalHandling: 2,
    arcana: 3,
    athletics: 4,
    deception: 5,
    history: 6,
    insight: 7,
    intimidation: 8,
    investigation: 8,
    medicine: 8,
    nature: 8,
    perception: 8,
    performance: 8,
    persuasion: 8,
    religion: 8,
    slightOfHand: 8,
    stealth: 8,
    survival: 8,
  },
  mainStats: {
    strength: 8,
    dexterity: 14,
    constitution: 12,
    intelligence: 20,
    wisdom: 16,
    charisma: 12,
    armor: 16,
    initiative: 2,
    speed: 30,
    maxHealth: 57,
    currentHealth: 54,
    tempHealth: 25,
  },
  attackStats: {
    spellAttack: 9,
    spellSave: 17,
  },
  equipment: {
    money: {
      cp: 0,
      sp: 0,
      ep: 0,
      gp: 294,
      pp: 0,
    },
    items: [
      {
        name: 'mighty umbrellance',
        description: 'does a really cool thing',
      },
    ],
  },
  otherProficienciesAndLanguages: {
    languages: ['fasdf', 'draconic', 'gggad'],
  },
  featuresAndTraits: [],
  spells: {
    cantrips: [
      {
        name: 'Ray fdfdfdf Frost',
        description: 'a',
      },
      {
        name: 'firebolt',
        description: 'a',
      },
    ],
    level1: {
      totalSlots: 3,
      expendedSlots: 2,
      spells: [
        {
          name: 'grease',
          description: 'a',
        },
        {
          name: 'faerie fire',
          description: 'a',
        },
        {
          name: "tasha's asdafsgargh brew",
          description: 'a',
        },
        {
          name: 'cure wounds',
          description: 'a',
        },
      ],
    },
    level2: {
      totalSlots: 1,
      expendedSlots: 1,
      spells: [
        {
          name: 'alter self',
          description: 'a',
        },
        {
          name: 'see invisibility',
          description: 'a',
        },
        {
          name: 'arcane lock',
          description: 'a',
        },
        {
          name: 'enlarge self',
          description: 'a',
        },
      ],
    },
    level3: {
      totalSlots: 1,
      expendedSlots: 0,
      spells: [
        {
          name: 'revivify',
          description: 'a',
        },
      ],
    },
    level4: {},
    level5: {},
    level6: {},
    level7: {},
    level8: {},
    level9: {},
  },
};

export { characterData1, characterData2, updatedCharacterData1 };
