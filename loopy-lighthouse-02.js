function loopyLighthouse(range, multiples, words) {
  // Range value error checking to prevent infinite loops
  if (range[1] - range[0] <= 0) {
    return false;
  }
  // Check that multiple is an array of 2 numbers
  if (typeof multiples[0] !== "number" || typeof multiples[1] !== "number") {
    return false;
  }
  // Check that words is an array of 2 strings
  if (typeof words[0] !== "string" || typeof words[1] !== "string") {
    return false;
  }
  for (let i = range[0]; i <= range[1]; i++) {
    let output = "";
    output += i % multiples[0] === 0 ? words[0] : "";
    output += i % multiples[1] === 0 ? words[1] : "";
    output = output ? output : i;
    console.log(output);
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
