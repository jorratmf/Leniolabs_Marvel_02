// #1
// X-Men and Avengers characters
let marvelCharacters = [
    { name: "Wolverine", team: "X-Men" },
    { name: "Magneto", team: "X-men" },
    { name: "Cyclops", team: "X-Men" },
    { name: "Beast", team: "X-Men" },
    { name: "Angel", team: "X-Men" },
    { name: "Havok", team: "X-Men" },
    { name: "Jean Gray", team: "X-Men" },
    { name: "Iceman", team: "X-Men" },
    { name: "Thor", team: "Avengers" },
    { name: "Wasp", team: "Avengers" },
    { name: "Ant-Man", team: "Avengers" },
    { name: "Hawkeye", team: "Avengers" },
    { name: "Quicksilver", team: "Avengers" },
    { name: "Scarlet Witch", team: "Avengers" },
    { name: "Iron Man", team: "Avengers" },
    { name: "Captain America", team: "Avengers" },
    { name: "Spiderman", team: "Avengers" },
    { name: "Hulk", team: "Avengers" },
    { name: "Deadpool", team: "X-Force" },
];
// X-Men characters
let xMenCharacters = marvelCharacters.filter(character => character.team === "X-Men");
console.log(xMenCharacters);


// #2
// Avengers characters
let avengers = [
    { name: "Iron Man" },
    { name: "Captain America" },
    { name: "Beast" },
    { name: "Spiderman" },
    { name: "Hulk" },
    { name: 'Thor' },
    { name: 'Wasp' },
    { name: 'Ant-Man' },
    { name: 'Hawkeye' },
    { name: 'Quicksilver' },
    { name: 'Scarlet Witch' },
    { name: "Namor" },
    { name: "Spider-Man" },
    { name: "Wolverine" },
    { name: "Storm" },
    { name: "Havok" },
];
// X-Men characters
let xMen = [
    { name: 'Wolverine'},
    { name: 'Cyclops'},
    { name: 'Beast'},
    { name: 'Angel'},
    { name: 'Havok'},
    { name: 'Jean Gray'},
    { name: 'Namor'},
    { name: 'Spider-Man'},
    { name: 'Storm'},
];
// Both teams characters
let inBothTeams = avengers.filter(avenger => xMen.some(xMan => xMan.name === avenger.name));
console.log(inBothTeams);


// #3
// sort by name
let sortedByName = marvelCharacters.sort((a, b) => a.name.localeCompare(b.name));
console.log(sortedByName);