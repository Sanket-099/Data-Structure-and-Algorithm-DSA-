//Reversing String
const reverseString = (str) => str.split("").reverse().join("");
// console.log(reverseString("Hello"));

//Palindromes
const palindrome = (str) => str.split("").reverse().join("") === str;
// console.log(palindrome("Hello"));
// console.log(palindrome("cllc"));

//Reversing int
const reverseInt = (n) => {
  const reversed = n.toString().split("").reverse().join("");
  return parseInt(reversed) * Math.sign(n);
};
console.log(reverseInt(1234));

//-----------------------------------------
const reverseNumber = (n) => {
  let reversed = 0;
  while (n > 0) {
    reversed = reversed * 10 + (n % 10);
    n = parseInt(n / 10);
  }
  return reversed;
};
console.log(reverseNumber(1234));

//capitlaze
const capitlaze = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};
console.log(capitlaze("sanket gaikwad"));
