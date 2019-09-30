import stats from "./Stats";

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
    url: "malakas",
    spec: "Cleric",
    magic: true,
    stats: {
      hp: { val: 10 },
      str: { val: 5 },
      def: { val: 4 },
      mag: { val: 6 },
      spd: { val: 5 }
    }
  },
  {
    id: 2,
    name: "Tonlian",
    url: "tonlian",
    spec: "Thief",
    magic: false,
    stats: {
      hp: { val: 10 },
      str: { val: 6 },
      def: { val: 4 },
      mag: { val: 0 },
      spd: { val: 10 }
    }
  },
  {
    id: 3,
    name: "Anwol",
    url: "anwol",
    spec: "Knight",
    magic: false,
    stats: {
      hp: { val: 12 },
      str: { val: 8 },
      def: { val: 7 },
      mag: { val: 0 },
      spd: { val: 3 }
    }
  },
  {
    id: 4,
    name: "Wally",
    url: "wally",
    spec: "Wizard",
    magic: true,
    stats: {
      hp: { val: 8 },
      str: { val: 1 },
      def: { val: 2 },
      mag: { val: 10 },
      spd: { val: 7 }
    }
  },
  {
    id: 5,
    name: "Ragmin",
    url: "ragmin",
    spec: "Rogue",
    magic: false,
    stats: {
      hp: { val: 11 },
      str: { val: 8 },
      def: { val: 4 },
      mag: { val: 0 },
      spd: { val: 7 }
    }
  },
  {
    id: 6,
    name: "Lionspell",
    url: "lionspell",
    spec: "Paladin",
    magic: true,
    stats: {
      hp: { val: 9 },
      str: { val: 6 },
      def: { val: 5 },
      mag: { val: 5 },
      spd: { val: 5 }
    }
  },
  {
    id: 7,
    name: "Gimdek",
    url: "gimdek",
    spec: "Druid",
    magic: true,
    stats: {
      hp: { val: 8 },
      str: { val: 4 },
      def: { val: 6 },
      mag: { val: 7 },
      spd: { val: 5 }
    }
  },
  {
    id: 8,
    name: "Urvir",
    url: "urvir",
    spec: "Monk",
    magic: false,
    stats: {
      hp: { val: 14 },
      str: { val: 6 },
      def: { val: 6 },
      mag: { val: 0 },
      spd: { val: 4 }
    }
  },
  {
    id: 9,
    name: "Gidif Shez",
    url: "gidif-shez",
    spec: "Bard",
    magic: true,
    stats: {
      hp: { val: 9 },
      str: { val: 2 },
      def: { val: 4 },
      mag: { val: 5 },
      spd: { val: 7 }
    }
  },
  {
    id: 10,
    name: "Farhorn",
    url: "farhorn",
    spec: "Ranger",
    magic: false,
    stats: {
      hp: { val: 12 },
      str: { val: 6 },
      def: { val: 4 },
      mag: { val: 0 },
      spd: { val: 8 }
    }
  }
];
