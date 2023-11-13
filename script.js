// Functions and Conditionals assignment
// Read the assignment text CAREFULLY

/*
1.
Write a function that takes in a number as a parameter and returns
"Odd" if the number received is an odd number and "Even" if the number
received is even. Use arrow function syntax. Console log the function call 
a few times with both even and odd numbers to show that it's working.
*/
  
let OddOrEven = (x) => {
    if(x & 1==1) {
    return "Odd";
    }
    return "Even";
}

console.log(OddOrEven(12));
console.log(OddOrEven(121));

/*
2.
Make a variable called userTitle and set the content equal to "Mr." if userMale is true,
or to "Mrs." if userMale is false. Use the TERNARY conditional to do this:
const variable = statement ? "this if true" : "this if not true"
Try changing userMale to both true and false and console.log your new variable,
to see that your conditional is working.
*/

const userMale = "Mrs";
const userTitle = userMale === "Mr" ? "this if true" : "this if not true";
console.log(userTitle);

/*
3.

Write a function that takes in 2 parameters:
 - A name (string)
 - An hour of the day (number)
The function should return:
"Good night (name received)" if the hour received is 0-6
"Good morning (name received)" if the hour received is 6-12
"Good day (name received)" if the hour received is 12-18
"Good evening (name received)" if the hour received is 18-24
"Invalid time" if the hour received is greater than 24
Use whichever function syntax you want.
Use template literal in your return: `This is a template literal ${variable}`
Example console.log(yourFunction("Gunnar", 19)) should console log Good evening Gunnar
Console log the function a few times to show that it's working.
*/


let userName ="gunnar";
let timeNow = new Date().getHours();
console.log(timeNow);

let greeting = timeNow >= 0 && timeNow <6 ? `Good night ${userName}`: 
timeNow >= 6 && timeNow <12 ? `Good morning ${userName}`: 
timeNow >= 12 && timeNow <18 ? `Good day ${userName}`:
timeNow >=18 && timeNow <24 ? `Good evening ${userName}`: 
timeNow >=24 `Invalid time"`;

console.log(greeting);


/*
4.
Write a function that takes in 2 numbers as parameters.
In your function, check which of the numbers received is the largest,
then return the sum of the largest number divided by the smaller.
Use arrow function syntax.
Example: your function receives 13 and 24, it should return the sum of 24/13
*/


let num1 = 24;
let num2 = 13;

const func = () => {
    if (num1 > num2){
    console.log(num1 / num2);
}else (num1 < num2);{
        console.log(num2 /num1);
}}

func();


/*
5.
Write an IF/ELSE conditional statement that checks whether username is empty,
that the user age is 18+, and that userIsBlocked is false. 
(HINT: Use the && (logical AND) to check several things in one IF statement)

If all of these conditions are true, change the userIsLoggedIn variable to true and
and the goToPage variable to "/home" then console.log a welcome message.
If any of the conditions for logging in are not met, console.log an error message.
Try changing the values of the variables to make sure your IF/ELSE conditional
can handle all cases correctly
*/

const usName = "Thomas";
const usAge = 18;
const userIsLoggedIn = true;
const userIsBlocked = false;

if (usAge >=18 && usName === "Thomas"){
    console.log(userIsLoggedIn)
}
else (usAge <18 || usName !== "()");{
    console.log(userIsBlocked)
}

/*
6.
EXTRA CHALLENGE
This is not mandatory, only for those who want an extra challenge.
Make a function called coolMaker that takes in 1 parameter.
If the parameter received is a string:
Return the string with "😎" added to the beginning and end
If the parameter received is a number:
Double it, convert it to a string and return it with "😎" added to the beginning and end.

If the parameter received is a boolean:
If the parameter received is true, return "😎Yeah😎". If the parameter received is false,
return "😎Chill😎" 

If the parameter received is any other datatype:
Return "😎Primitive values only😎"
Use arrow function syntax.
Console log the function call with a few different datatypes to show that it's working*/

const useName = "Lisa"
const coolMaker = (name) => {
    return "😎Velkommen " + name + ", ha en fin dag😎"
}
const greetings = coolMaker(useName)
console.log(greetings)

//----

let coolMakerNumber = (Math.random() * 5) + 1
let roundedNumber = Math.round(coolMakerNumber)

if (roundedNumber > 3) {
console.log("😎" + roundedNumber + "😎")
} else {
    console.log("😎" + roundedNumber + "😎")
}

//----

const cool = false;
const coolM = true;

if (cool){
    console.log("😎Yeah😎")
}else{
    console.log("😎Chill😎" )
}

//----Den siste ble jeg litt usikker på.




