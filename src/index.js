import game from "./data.js";

// 1. Create one player array for each team
const [players1, players2] = game.players;

// 2. For team 1, create a variable with the goal keeper and and array with the rest
const [gk, ...fieldPlayers] = players1;

// 3. Array with all players from both teams
const allPlayers = [...players1, ...players2];

// 4. Create the players1Final array
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

// 5. Create one variable for each odd
const {
  odds: { team1, x: draw, team2 },
} = game;

// 6. Write a function
const printGoals = (...names) => {
  let totalGoals = 0;
  for (const name of names) {
    totalGoals++;
    console.log(name);
  }
  console.log(`${totalGoals} goals were scored.`);
};

printGoals("Davies", "Muller", "Lewandowski", "Kimmich");

printGoals(...game.scored);

// 7. Print the team that is more likely to win
console.log(`${(team1 > team2 && "team2") || "team1"} is more likely to win`);
