

function* powerSeries(num, pow, limit) {
  let result = 0;

  
  while (result < limit) {
    result = num ** pow;
    yield result;
    num++;
  }
}


function displayData() 
  let [num, pow] = prompt("Enter starting num and power spearated with space")
    .split(" ")
    .map((el) => +el);

  
  let limit = Number(prompt("Enter the limit"));

  
  let series = powerSeries(num, pow, limit);

  let result = series.next();

  
  while (!result.done) {
    console.log(result.value);
    result = series.next();
  }

displayData();
