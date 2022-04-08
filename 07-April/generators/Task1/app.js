


function* iterator(start, end) {
  while (start < end) {
    yield start;
    start++;
  }
}


function displaySequence() {
  let start = Number(prompt("enter a start num"));
  let end = Number(prompt("enter a end num"));
  let seq = iterator(start, end);
  let num = seq.next();

  while (!num.done) {
    console.log(num.value);
    num = seq.next();
  }
}

displaySequence();

/*---------------------------------------------------------*/
