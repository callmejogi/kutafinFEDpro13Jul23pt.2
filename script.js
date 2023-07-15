//Task 1 
// let i = 20;
// let result = " ";

// do {
//     i = i + 0.5;
//     result = result + i + "  ";
//   } while (i < 30);
  
//   console.log(result);


// Task 2 
//   let result = '';
//   let i = 27;
//   let num = 0;
// do {
//   num = num + 10;
//   result =  i * num;
//   console.log(num + "$");
//   console.log("USD exchange rate:  " +  result + "гривень")
// } while ( num < 100 );

// Task 3
// let N = 100;
// for (let i = 1; i <= 100; i++) {
//   if (i ** 2 <= N) {
//     console.log(i);
//   }
// }

// Task 4
// let number = prompt("Введіть ціле число:")

// function isPrime(number) {
//   if (number <= 1) {
//     return false;
//   }

//   for (let i = 2; i <= Math.sqrt(number); i++) {
//     if (number % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
 
// if (isPrime(number)) {
//   alert(number + " є простим числом.");
// } else {
//   alert(number + " не є простим числом.");
// }


// Task 5 

let number = prompt("Введіть число");

function canObtainByPowerOfThree(number) {
  while (number > 1) {
    if (number % 3 !== 0) {
      return false;
    }
    number /= 3;
  }
  return number === 1;
}



if (canObtainByPowerOfThree(number)) {
  alert(number + " можна отримати за допомогою зведення числа 3 у деякий ступінь.");
} else {
  alert(number + " не можна отримати за допомогою зведення числа 3 у деякий ступінь.");
}








