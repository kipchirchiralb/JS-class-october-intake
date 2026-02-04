// a callback function- is a function that is passed to another function as an argument.

function doGood(x, y) {
  console.log(x);
  //    connect networks --- jkgjksjvmscjmvsj
  //   console.log(y.map((color) => color.charAt(0))); // 3 ,
  y();
}

// doGood(24, "hello");

// doGood(12, ["red", "green", "yellow"]);
// doGood(12,13)
doGood("hello", function sendEmail() {
  console.log("Sending an email : SMTP Server!");
});

// geeting started with asyn programming --
console.log("hjdlkhsj");

document
  .querySelector("button")
  .addEventListener("click", function changeBGColor() {
    console.log(
      "hello , we want to change the bg of the page ater a button was clicked",
    );
    document.body.style.backgroundColor = "pink";
  });

// array methods - forEach, map, reduce, find

const users = ["albert", "mercy", "gilphine"];

console.log(users.includes("lucky"));
console.log(users.includes("mercy"));

users.forEach(function countCharaters(user) {
  console.log(user.length);
});

// databases --- backend using js
