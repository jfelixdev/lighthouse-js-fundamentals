for(let i = 100; i <= 200; i++){
  let output = "";
  output += (i % 3 === 0) ? "Loopy" : "";
  output += (i % 4 === 0) ? "Lighthouse" : "";
  output = (output) ? output : i;
  console.log(output);
}