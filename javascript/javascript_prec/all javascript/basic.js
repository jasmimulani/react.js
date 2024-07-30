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

//------------------functions---------------------------------------------------

//  function is a block of reusable code

//  function function_name(perameters){ 
//  code execued
//  return result;
// }

  function sum4 (a,b){
     return a + b
  }
  console.log(sum4(5,7));
  //--------------Fat arrow function ------------------
// const  name = (perameter) => { } name()

// reverse name
const isReverse = (str) => {
    let reverse = "";
    for (let char = str.length - 1; char >= 0; char--) {
        reverse = reverse + (str[char]);
    }
    return reverse
}
console.log(isReverse("jasmi mulani"))

// palidrome
const isPalidrone = (str) => {
    let reverse = "";
    for (let char = str.length - 1; char >= 0; char--) {
        reverse = reverse + (str[char]);
    }
    if (str === reverse) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isPalidrone("level"))

  //  prectice
  
    function greet (name){
         return(`hello welcome ${name}`);
    }
    console.log(greet('jasmi'));
    console.log(greet('srushti'));

    //   stoer function into a other variable
 var result = function sum(a,b){
    console.log( a + b);
 };
 result(10,15)


//   --------------------------------------------- anonymous function--------------------------------------------

//  anonymous means function is without the name but without name we can not a call tahat function that time we can store a function into a avriable ane call the variable this is a anonymous function

var result1 = function (a,b){
    console.log( a + b);
 };
 result1(10,10)


//  ------------------------------------- immediately invoked function expression------------------------------------
//  autometically calll

//   (function ( a, b){
//     console.log( a +b);
//     return a + b;
//    })(50,10);


// ------------------------------------------ orrrrrrrrrrrrrrrr
// we can chenge or modyfy this type of function

var result2 = (function ( a, b){
    console.log( a + b);
    return a + b;
   })(50,10);
   console.log(result2);


//    ------------------------2015 es6 include let
//   const value not chenged
// let is new aaded  variable in ecma script
// let and const is a block scop variable we can not use this variable oyt of the scop
// ------------------------
// 2015 added templet string
//  templet string `{}` this is a new type of write a code in new javascript







// -------------------------------------array---------------------------------------------------------------------------------------------------------
//  what is aaray -> array is store the value of same data type

//  ecmascript 2022 also include new (.at()) method in aarays this method is allow to(-)index 

let arr = [];
console.log(typeof arr); //object

// ------------------------------------- array constructor--------------------

let fruits = new Array("apple", "banana" ,"mengo");
console.log(fruits);

// ------------- array litras-------
let fruits1 =['chery' , 'strobary' , 'kiwi']
console.log(fruits1);

// ------access element---------
console.log(fruits1[0]);


// --------------------------------------iterating over array------------------------------------------------------------
// ---------------------for of loop
//  for of loop get output to value of array
// easy way to loop compare to for lop

for(let item of fruits1){
    console.log(item);
}       
// =--------------------forloop
// ----------onlu understanding

for(let item=0; item < fruits.length; item++){
    console.log(fruits[item]);
}

// for in method---------------------------------
//  for in method we can get output of indexnumber
//  in means index

for(let item in fruits1){
    console.log(item);
}

// --------------------for each
//  we can get value in array with index 

fruits.forEach((curuntelement , index , array) =>{
    console.log(`${curuntelement} ${index}`);
    console.log(array);
});

//------------------------------ map

  fruits1.map((curuntelement , index , array) =>{
    console.log(`${curuntelement} ${index}`);
    console.log(array);

  });

// --------------------------- -------main diffrence for each and map
// difference between forEach and map method?

// return value
// =>ForEach :- It doesn't  return a value. The forEach Method is used for iterating over the elements of an array and performing a side effect, such as modifying the array or perfoeming a task for each elements.
// =>Map  :- It returns a new array containing the results of applying a function to each elements in the original array. The original array remains unchanged.

// Chaining:
// =>forEach: It doesn't return a value, so it cannot be directly chained with other array methods.
// =>Map  :-since it returns a new array , you can chain other array methods after using map.

// Use Case:
// =>forEach:- used when you want to iterate over the array elements and perform an action on each elemnets, but you don't need a new array.
// =>Map  :-Used when you want to create a new array based on the tranformation of each element in the original array.


// -------------------- for each loop store to any varible
//  we can change our roriginal array we can modify that time for each is use the best
 const myfruits = fruits.forEach((curuntelement , index , array) =>{
    return(`${curuntelement} ${index}`);
    // console.log(array);
});
console.log(myfruits);  // undefine -> beacuse console.log is print out the scop


// -------------------------------------- map loop store to any varible
//  need the new array that time use map method
//  we can  create a  same new array using map bus our original array is not change that is a best type
const myfruits1 = fruits.map((curuntelement , index , array) =>{
    return(`${curuntelement} ${index}`);
    // console.log(array);
});
console.log(myfruits1);  // ['apple 0', 'banana 1', 'mengo 2']


// -----------------prectice
// ------------------------- for each
const number = [1,2,3,4,5];

 number.forEach((cutele) =>{
    console.log(cutele *2);
 });

//  -------------------for map

const dubble =number.map((cutele) =>{
    return(cutele *2);
 });
console.log(dubble);

//  ---------------array method

// push() -> add element in end of array
// pop() => remove element in end of array
// unshift() => add more element the begining of array
// shift() => remove  element the begining of array
//  splice() => add element the mideel in array
//  indexof()=> return the  index number of the given value bydefualt(-1)
//  include() => value is exit or not in array return value true or false


//----------------- searching in an array -------------------------
// indexOf , lastOfIndex &includes
const numbers1 = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9]

//1. indecOf :-  return the first index   => ans na hoy to -1 return kare beacse flase value
// indexOf(searchElement) 
// indexOf(searchElement , fromIndex) 

console.log(numbers1.indexOf(4));
console.log(numbers1.indexOf(4, 5));//-1 false value


//2. LastIndexcOf :-  return last index  
console.log(numbers1.lastIndexOf(4));//3
console.log(numbers1.lastIndexOf(6, 5));//4 => index count the first and 5 pachi ni valuse egnore kare


// 3.includes:- true and false value return 
// includes(searchElement)
// includes(searchElement , fromIndex)

const results = numbers1.includes(11)
console.log(results); //false


// -------------------Filter array------------------------------------
// search + Filter

const Filter = [1, 2, 3, 4, 5, 4, 6, 7, 8, 6, 9]

//1.find method:-
const find = Filter.find((curEle) => {
    return curEle > 5
})
console.log(result); //6

// 2.findIndex method:-
const FindIndex = Filter.findIndex((curEle) => {
    return curEle > 2
})
console.log(FindIndex); //6

//  using map method
const map = Filter.map((curEle) => curEle * 5)
console.log(map);

// 3.Filter method:-
// filter(callbackFn)
// filter(callbackFn , this Arg)

const Filter1 = [1, 2, 3, 4, 5, 4, 6, 7, 8, 6, 9]
const map1 = Filter1.filter((curEle) => {
    return curEle > 5
})
console.log(map1); //[ 6, 7, 8, 6, 9 ]

// useCase:-remove addtocart 
let value = 6;
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let updatedCart = numbers.filter((curEle) => {
    return curEle !== value;
})
console.log(updatedCart)

// Filtering Products by Price
const products = [
    { name: "Leptop", price: 1200 },
    { name: "Phone", price: 800 },
    { name: "Tablet", price: 300 },
    { name: "Smartwatch", price: 150 }
]
// less than to 500
const filterProducts = products.filter((curEle) => {
    return curEle.price <= 500;
})
console.log(filterProducts);

// unique values
const unique = [1, 2, 3, 9, 4, 5, 6, 7, 8, 9];
let uniqueValues = unique.filter((curEle, index, arr) => {
    return arr.indexOf(curEle) == index;
})
console.log(uniqueValues);//[1, 2, 3, 9, 4,5, 6, 7, 8]
console.log([new Set(numbers)]);//[ Set(9) { 1, 2, 3, 4, 5, 6, 7, 8, 9 } ]
console.log([...new Set(numbers)]);//[1, 2, 3, 4,5, 6, 7, 8 ,9]



// -----------Sort and compare an array -------------
// sorting array:-

const sorTing = ['B', 'A', 'C', 'F']
console.log(sorTing.sort()); //[ 'A', 'B', 'C', 'F' ]

const numberSort = [1, 2, 3, 9, 4, 5, 6, 7, 8, 9];
console.log(numberSort.sort());  //[1, 2, 3, 4, 5,6, 7, 8, 9, 9]


// compare callback function
// const sortedNumbers = numbers.sort((a,b) => a-b)

numberSort.sort((a, b) => {
    if (a > b) return -1;
    if (b > a) return 1;
})
console.log(numberSort);

// ------------------------------------------
// map(), filter(),reduce()
// =>map creates anew array from calling a function for every array elemenet.
// =>map() does not execute the function for empty elemenets.
// =>map() does not change the original array.

const EachNumber = [1, 2, 3, 4, 5]
let mapNumber = EachNumber.map((curEle) => curEle * curEle)
console.log(mapNumber); //[ 1, 4, 9, 16, 25 ]

// 
const word = ["apple", "banana", "mango"]
console.log(word.map((curEle) => { return curEle.toUpperCase() }));



// Reduce():-
// multiple data hoy and apne value signal value joti hoy tyare reduce method use thay

// Array.reduce(function callback(accumultor , currentValue , index ,array){

// },initialValue;
const price = [500, 100, 150, 470]
const totalPrice = price.reduce((acc, curEle) => {
    return acc + curEle
}, 0)
console.log(totalPrice);