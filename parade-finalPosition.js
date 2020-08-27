const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north'];

const finalPosition = function (moves) {
  let pos = { x: 0, y: 0 };
  for (const move of moves) {
    switch (move) {
    case "north":
      pos.y++;
      break;
    case "south":
      pos.y--;
      break;
    case "east":
      pos.x++;
      break;
    case "west":
      pos.x--;
      break;
    }
  }
  return [pos.x, pos.y];
};

console.log(finalPosition(moves));