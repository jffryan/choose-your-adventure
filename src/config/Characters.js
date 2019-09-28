import stats from "./Stats";
// hp, str, def, mag, spd
export const formatCharacter = character => {
  return {
    ...character,
    stats: !character.stats
      ? {}
      : Object.keys(character.stats).reduce((res, statName) => {
          const statConfig = stats[statName];
          res[statName] = { ...statConfig, ...character.stats[statName] };
          return res;
        }, {})
  };
};

export const characters = [
  {
    id: 1,
    name: "Malakas",
    spec: "Cleric",
    magic: true,
    stats: {
      hp: { val: 10 },
      str: { val: 5 },
      def: { val: 3 },
      mag: { val: 8 },
      spd: { val: 4 }
    }
  },
  {
    id: 2,
    name: "Tonlian",
    spec: "Thief",
    magic: false
  },
  {
    id: 3,
    name: "Anwol",
    spec: "Knight",
    magic: false
  },
  {
    id: 4,
    name: "Wally",
    spec: "Wizard",
    magic: true
  },
  {
    id: 5,
    name: "Ragmin",
    spec: "Rogue",
    magic: false
  },
  {
    id: 6,
    name: "Lionspell",
    spec: "Paladin",
    magic: true
  },
  {
    id: 7,
    name: "Gimdek",
    spec: "Druid",
    magic: true
  },
  {
    id: 8,
    name: "Urvir",
    spec: "Monk",
    magic: false
  },
  {
    id: 9,
    name: "Gidif Shez",
    spec: "Bard",
    magic: true
  },
  {
    id: 10,
    name: "Farhorn",
    spec: "Ranger",
    magic: false
  }
];
