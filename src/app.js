const characters = [
  { name: 'swordsman', health: 10 },
  { name: 'wizard', health: 100 },
  { name: 'wizard', health: 0 },
  { name: 'archer', health: 0 },
];

// eslint-disable-next-line no-unused-vars
const alive = characters.filter((item) => item.health > 0);
