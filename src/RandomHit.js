let random = {};

function randomly(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

let you = randomly(10, 20);
let enemy_1 = randomly(15, 25);
let enemy_2 = randomly(15, 25);
let enemy_3 = randomly(15, 25);

random = {
  you: you,
  enemy_1: enemy_1,
  enemy_2: enemy_2,
  enemy_3: enemy_3,
};

export { random };
