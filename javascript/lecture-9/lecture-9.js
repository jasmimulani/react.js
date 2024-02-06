/***** Javascript String Method ******/

// The String object is used to represent and manipulate a sequence of characters.

/* primitive string */

// let string1="hello world"
// let strin2='hello world'
// let string3=`hello world`

// console.log(string1);
// console.log(strin2);
// console.log(string3);

/* string as object */

// let string4 = new String("hello world")
// console.log(string4);

// let string5 = string1.split("");
// console.log(string5);

/******  javascript string method ******/


// String length
// String charAt()
// String slice()
// String substring()
// String replace()
// String replaceAll()
// String toUpperCase()
// String toLowerCase()
// String concat()
// String trim()
// String trimStart()
// String trimEnd()
// String padStart()
// String padEnd()
// String charCodeAt()
// String split()
// String includes()

/* Follow String :- WHAT ARE MOST SIMPLE FOO. */

// 1. string-length

// let string6 = "what are most simple foo."
// console.log(string6.length);

// 2. string CharAt()

// let string7 = "what are most simple foo."
// let string8 = string7.charAt(3)
// console.log(string8);

/****** String slice() return New String ******/
// The slice() method of String values extracts a section of this string and returns it as a new string, without modifying the original string.
// slice(indexStart)
// slice(indexStart, indexEnd)


// let String9  = "WHAT ARE MOST SIMPLE FOO."
// let String10  = String9.slice(6)
// let String11  = String9.slice(-6)
// let String12  = String9.slice(-6  , -12)
// let String13  = String9.slice(6 , 6)
// let String14  = String9.slice(-6 , 6)
// let String15  = String9.slice(6 , -6)
// console.log(String15);

/******  String substring() return New String ******/
// The substring() method of String values returns the part of this string from the start index up to and excluding the end index, or to the end of the string if no end index is supplied.
// substring(indexStart)
// substring(indexStart, indexEnd)

// let String16 = "WHAT ARE MOST SIMPLE FOO."
// let String17 = String16.substring(10)
// let String18 = String16.slice(10)
// let String19 =  String16.substring(-10)
// let String20 =  String16.slice(-10)
// let String21 =  String16.substring(10 , 20)
// let String22 =  String16.substring(10 , -20)
// let String23 =  String16.substring( -10 , 7)

// console.log(String17);
// console.log(String18);
// console.log(String19);
// console.log(String20);
// console.log(String21);
// console.log(String23);

/****** String replace() ******/

// let String24 = "WHAT ARE MOST SIMPLE FOO."
// let String25 = String24.replace("Most" , "index")
// let String26 = String24.replace("MOST" , "index")
// console.log(String25);




