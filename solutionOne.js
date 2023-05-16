// Create a function that takes an array of numbers and returns an array of objects.
// Each object should have a key called `number` with the original number,
// a key called `isEven` with a boolean value indicating whether the number is even,
// and a key called `double` with double the value of the number.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArr = [];

function EvenOdd(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      newArr.push({ number: numbers[i], isEven: true, double: numbers[i] * 2 });
    } else {
      newArr.push({
        number: numbers[i],
        isEven: false,
        double: numbers[i] * 2,
      });
    }
  }
  console.log(newArr);
}

EvenOdd(numbers);
