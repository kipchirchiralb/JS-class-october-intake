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

function checKEvenOrOdd(value) {
  if (value % 2 === 0) {
    console.log(`${value} is an even number`);
  } else {
    console.log(`${value} is an odd number`);
  }
}

checKEvenOrOdd(4);
checKEvenOrOdd(41);
checKEvenOrOdd(4678923);
checKEvenOrOdd(0);
checKEvenOrOdd(-8);

// write a function that takes in age and returns whether a person is eligible to vote or not -- 18yrs

function eligibleToVote(age) {
  if (age < 1 || age > 110) {
    console.log("Invalid age input");
  } else if (age > 18) {
    console.log("Eligible to vote");
  } else {
    console.log("Not eligible to vote");
  }
}

eligibleToVote(20);
eligibleToVote(15);
eligibleToVote(17.9999999);
eligibleToVote(-7);
// functions are like variables -- 
