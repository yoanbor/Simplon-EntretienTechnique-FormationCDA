for (let i = 1; i <= 100; i++) {
  // Vérifie si le nombre est divisible par 3 ET 5
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  }
  // Vérifie si le nombre est divisible par 3
  else if (i % 3 === 0) {
    console.log("Fizz");
  }
  // Vérifie si le nombre est divisible par 5
  else if (i % 5 === 0) {
    console.log("Buzz");
  }
  // Si ce n'est pas les cas au dessus alors on le log
  else {
    console.log(i);
  }
}
