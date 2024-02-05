/*
// Challenge 1
const markHeight = 1.69;
const johnHeight = 1.95;
const markMass = 78;
const johnMass = 92;

const markBmi = markMass / markHeight ** 2;
const johnBmi = johnMass / johnHeight ** 2;

console.log(markBmi);
console.log(johnBmi);

const markHigherBMI = markBmi > johnBmi;

console.log(markHigherBMI);

// Challenge 2
if (markHigherBMI) {
  console.log(`Mark's BMI (${markBmi}) is higher than John's BMI (${johnBmi})`);
} else {
  console.log(`John's BMI (${johnBmi}) is higher than Mark's BMI (${markBmi})`);
}

// Challenge 3
const firstAverageDolphins = (96 + 108 + 89) / 3;
const firstAverageKoalas = (88 + 91 + 110) / 3;
const thirdAverageDolphins = (97 + 112 + 101) / 3;
const thirdAverageKoalas = (109 + 95 + 106) / 2;

console.log(firstAverageDolphins, firstAverageKoalas);

if (firstAverageDolphins > firstAverageKoalas) {
  console.log(`Go Dolphins Go!!!, you win with ${firstAverageDolphins}`);
} else if (firstAverageDolphins === firstAverageKoalas) {
  console.log("Sorry guys you scored the same thing");
} else {
  console.log(`GO Koala Go!!!, you win with ${firstAverageKoalas}`);
}

// Bonus 1
const secondAverageDolphins = (97 + 112 + 101) / 3;
const secondAverageKoalas = (109 + 95 + 106) / 3;

console.log(secondAverageDolphins, secondAverageKoalas);

if (
  secondAverageDolphins > secondAverageKoalas &&
  secondAverageDolphins >= 100
) {
  console.log(`Go Dolphins Go!!!, you win with ${secondAverageDolphins}`);
} else if (
  secondAverageKoalas >= 100 &&
  secondAverageKoalas > secondAverageDolphins
) {
  console.log(`Go Koala Go!!!, you win with ${secondAverageKoalas}`);
} else if (
  secondAverageDolphins === secondAverageKoalas &&
  secondAverageDolphins >= 100 &&
  secondAverageKoalas >= 100
) {
  console.log("Sorry guys it's a draw");
} else {
  console.log("Sorry there's no winner");
}

const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill is ${bill}, the tip is ${tip}, and the total value is ${bill + tip}`
);
*/
