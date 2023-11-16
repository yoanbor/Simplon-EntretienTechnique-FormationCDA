function isEven(n) {
  // Cas de base
  if (n === 0) {
    return true;
  } else if (n === 1) {
    return false;
  } else if (n < 0) {
    // Gérer les nombres négatifs en les convertissant en positifs
    return isEven(-n);
  } else {
    // Cas récursif
    return isEven(n - 2);
  }
}

console.log(isEven(50)); // → true
console.log(isEven(75)); // → false
console.log(isEven(-1)); // → false (après la gestion des nombres négatifs)

// ---------------------------------
// inclure -1 comme exception
