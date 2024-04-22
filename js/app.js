let maximum = parseInt(prompt("Inputkan nilai maksimal!"));
while (!maximum) {
  maximum = parseInt(prompt("Try again, inputkan nilai maksimak"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt("Inputkan dugaan kamu"));
let attemps = 1;

while (parseInt(guess) !== targetNum) {
  attemps++;
  if (parseInt(guess) > targetNum) {
    guess = parseInt(prompt("Bisa jadi tapi terlalu tinggi"));
  } else {
    guess = parseInt(prompt("Bisa jadi tapi terlalu rendah"));
  }
}
alert(`Selamat kamu benar dalam percobaan ke ${attemps}`);
