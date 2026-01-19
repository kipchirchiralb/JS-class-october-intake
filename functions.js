// Functions  - a block of code designed to perform a particular task
// functions are reusable - can be called multiple times
// functions can take inputs (parameters) and can return an output

// declaration of a function

function convertDollarToKsh(amountInUSD) {
  const exchangeRate = 131;
  const amountInKsh = amountInUSD * exchangeRate;
  return amountInKsh;
}

// return keyword is used to return a valuefrom the function/ end the function with a result

// calling/invoking the function -- using the function

console.log(convertDollarToKsh(1));
console.log(convertDollarToKsh(205));
console.log(convertDollarToKsh(11));
console.log(convertDollarToKsh(5));
console.log(convertDollarToKsh(90000000));



// write a function that takes a number as a parameter/input and says whether it is even or odd