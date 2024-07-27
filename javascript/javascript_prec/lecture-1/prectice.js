console.log("welcome to the lecture");

// define the variable Name
var myAge = 20;
console.log(myAge);

var my_firstName = "John";     //valid
console.log(my_firstName);

var _myfirstName = "John";     //valid
console.log(_myfirstName);

// var 123myAge = 25;          //invalid

var $cityNAme = "new york";    //valid

// var my@Email = "jas@gmail.com" //invalid


// -------------------- section-2 => Data type ---------------------------
// => Data types define the type of values that a variable can hold.
// => data types:- 1.)primitive data type =  string , number , boolean , null, undefine , bigint , symbol
//                 2.)object data types   =  An Object , An Array , A date, class


// number
var myFavNum = 5
console.log(myFavNum);

// string
var myName = 'jasmi'
console.log(myName);

//Boolean
var isRaining = false;
var areYouAwesome = true;
console.log(isRaining);

//undefine
var srushti;
console.log(srushti);

//Null
var badMemories = null
console.log(badMemories);

//Bigint
const bigNumber = 85623456230845189562n;
console.log(bigNumber);

//symbol

//Datattype interviw\ew Questions

//1. what is the difference between null and undefine in javascript? ->null = Imagine an Empty Box , undefine = gift box

//2. What is the purpose of typeof operator in javascript? => typeof

//3. What is the result of 'typeof null' in javascript? // null typeof object

// 4. what are primitive data types in javascript?

// 5.convert a string to a number?
var myFavNum = 5
console.log(typeof +myFavNum); //add + sign
console.log(typeof Number(myFavNum));

// 6.convert a number to a string?
let str = 5;
console.log(typeof String(str));
console.log(typeof (str + "")); // add back + "" in () brecket

// 7.Explain the concept of truthy and falsy values in Javascript, Provude examples? => true , any non-empty string("hello") , any non-zero number(42) , Arrays and objects, even if they're not empty
//        => false , 0 ,null,undefined ,NaN

// 8. To check if a non-empty string is truthy or falsy in javascript , we can directly use if statement.
var name = "jasmi";
if (name) {
    console.log("truthy value");
}
else {
    console.log("falsy value");
}




//--------------------------parseInt & parseFloat section --------------------
// => coverting string to numbers , but they have different use cases.

// 1. ParseInt : ParseInt is used to parse a string and convert it to an interger
const mystring = "42";
const myNumber = parseInt(mystring)
console.log(myNumber);
console.log(typeof myNumber);  //42

const mystring1 = "42.5";
const myNumber1 = parseInt(mystring1)
console.log(myNumber1);
console.log(typeof myNumber1)  //42

// 2.ParseFloat:ParseFloat is used to Parse a string and covert it to a floating-point number.
const mystring2 = "42.5";
const myNumber2 = parseFloat(mystring2)
console.log(myNumber2);
console.log(typeof myNumber2)  //42.5

// example
console.log(parseInt("123"));//123

console.log(parseInt("123", 10));//123

console.log(parseInt("   123  "));//123

console.log(parseInt("077"));//77
console.log(parseFloat("077"));//77

console.log(parseInt("1.9"));//1
console.log(parseFloat("1.9"));//1.9

console.log(parseInt("&123"));  //NaN
console.log(parseInt("-123"));  //-123
console.log(parseInt("XYZ"));   //NaN

// 1.What is the purpose of the NaN value in javscript?
console.log(isNaN("sru"));

//2.NaN === NaN, why is it flase?
if (NaN === NaN) {
    console.log("same value");
}
else {
    console.log("not equal")
}//not equal



// -------------------- cConcatenation in javascript ---------------------------

const string = "hello " + "wotld"
console.log(string);

let sum = "sru" - 5;
console.log(sum);  //NaN
let sum1 = "5" - 5;
console.log(sum1);  //0
let sum3 = "5" + 10;
console.log(sum3);  //510


console.log(10 + "20"); //1020
console.log(9 - "5");   //4
console.log("java" + "script");  //Javascript
console.log(" " + " ");
console.log(" " + 0); // 0
console.log("jasmi" - "mulani  "); //NaN
console.log(true + true); //2
console.log(true + false); //1
console.log(false + true);//1
console.log(false - true);//-1





// -------------------- Expressions & operators ---------------------------

// 1.assignment operators

// 1.Addition(+)
// 2.Subtraction(-)
// 3.multipltion(*)
// 4.division(/)
// 5.modulus(%)

var result = "hello" / 2
console.log(result); //NaN

// interview Question
var result = 0.1 + 0.2
console.log(result.toFixed(2)); // 0.30

var result = 55 * "hello"
console.log(result); //NaN

// 2. string operators

// 3. Comparison operators => == , === , != , > , >= ,< , <=
// interview Question
// what is difference between == and === operators in javascript?

// 4.Logical operators => && , || , !

// 5.Ternary operator


// -------------------- Loops ---------------------------

// 1.if..else
var temp = 25;
if (temp >= 30) {
    console.log("Lets go to beach");
}
else if (temp >= 20 && temp < 30) {
    console.log("TV dekhte hai yaar");
}
else {
    console.log("Kambhal oodo ,so jawo");
}


let userAge = 12;
let isCitizen = true;
let isRegistered = false
if (userAge >= 18) {
    if (isCitizen) {
        if (isRegistered){
            console.log('You are eligible to vote');
        }
        else{  
            console.log('You are not eligible due to resgistration status');
        }
    }
    else {
        console.log("You are not eligible due to citizenship status");
    }
}
else {
    console.log('You are not  eligible gto vote(younger)');
}

// ---------------------------- array-----------------------------------------------

