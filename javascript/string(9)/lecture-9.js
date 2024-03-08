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

/*  string replaceall() */

// let string27 = "WHAT ARE MOST HARD MOST FOO."
// let string28 = string27.replaceAll(/MOST/g,"jasmi")
// let string29 = string27 .replaceAll(/MOST/i, "jasmi") //eroor
// console.log(string28);

/* string touppercase() */

// let string30 = "This is most common language"
// let string31 = string30.toLocaleUpperCase();
// console.log(string31);

/* string tolowercase() */

// let string32 = "THIS IS MOST COMMON LANGUAGE"
// let string33 = string32.toLowerCase();
// console.log(string33);

/* string concat() */

// let string34 = "hello"
// let string35 = "wolrd"
// let string36 = "how are tou !"
// let string37 = string34.concat( ""+ string36+ " "+ string35)
// console.log(string37);

/* string trim() */

// let string38 = "    This is most common lecture!    "
// console.log(string38);
// console.log(string38.length);
// let string39 = string38.trim()
// console.log(string39);
// console.log(string39.length);

/* string srimstart */

// let string40 = "    this is most common lecture!    "
// console.log(string40);
//  console.log(string40.length);
// let string41 = string40.trimStart();
// console.log(string41);
// console.log(string41.length);


/* string trimend */

// let string42 = "    this is most common lecture!     "
// console.log(string42);
// console.log(string42.length);
// let string43 = string42.trimEnd();
// console.log(string43);
// console.log(string43.length);

/* string padstrat */

// let string44 = "this is common lanuguage!"
// console.log(string44);
// console.log(string44.length);
// let string45 = string44.padStart(30 , "1");
// console.log(string45);

// let number1 = "500"
// let number2 = number1.padStart(2,0)
// console.log(number2);


// string padend

// let number1 = "500"
// let number2 = number1.padEnd(4,0)
// console.log(number2);
// console.log(typeof(number2));
// let number3 = parseFloat(number2)
// console.log(number3);
// console.log(typeof(number3));


/** string charcodeat() */

// let string46 = "this is most common!"
// let string47 = string46.charCodeAt(3);
// console.log(string47);

/* sring split() */

// let string48 = "wow! what a place."
// console.log(string48);
// let string49= string48.split("");
// console.log(string49);


/* strig inlude()  ture and false*/


//  let string50 = "wow! what a place."
//  console.log(string50);
//  let string51 = string50.includes(".")
//  console.log(string51);

/* JAVASCRIPT STRING METHOD */

// String indexOf()
// String lastIndexOf()
// String search()
// String includes()
// String startsWith()
// String endsWith()
// String match()
// String matchAll()

/* sting indexof() */

// let string52 = "wow! what a place."
// console.log(string52);
// let string53 = string52.indexOf("a", 8)
// console.log(string53);

/* string serch() */

// let string56 = "why need from validation in web devlopment"
// console.log(string56);
// let string57 = string56.search("w")
// console.log(string57);


/* string startwith() */

// let string56 = "why need from validation in web devlopment  "
// console.log(string56);
// let strig57 = string56.startsWith("h");
// console.log(strig57);

/* string endwith()*/
// let string58 = "why need from validatio in web devlopment  "
// console.log(string58);
// let string59 = string58.endsWith(" ");
// console.log(string59);


/******  String match() ******/

/* After Regx */

/******  String matchall()/ remider with array ******/

// ------------------------------------------------------
// prectice

// length()

// let string1 = "hello,java"
// console.log(string1.length);
// ----------------------------------------------------

// chartat()

// let string2 = "hello javascript";
// let string3 = string2.charAt(1)
// console.log(string3);

// ------------------------------------------------

//   slice()

// let string4 = "hello javascript";
// let string5= string4.slice(2,2);
// console.log(string5);

// -----------------------------

// substring()

// let string6="javascript"
// let string7=string6.substring(3,-6)
// console.log(string7);

// ----------------------------------------
 
// replace

// let string8 ="java script"
// let string9 = string8.replace("script","point")
// console.log(string9);

// ----------------------------------

// replaceall

// let string10 = "java script"
// let string11 = string10.replaceAll(/script/g, "point")
// console.log(string11);

// -------------------------------------

// touppercase

// let string12 = "java script"
// let string13 = string12.toLocaleUpperCase();
// console.log(string13);

// -----------------------------------

// tolower

// let string14 = "JAVA SCRIPT"
// let string15 = string14.toLocaleLowerCase()
// console.log(string15);

// ------------------------------------

// concat

// let string16 = "java"
// let strig17 = "script"
// let string18 ="is best"
// let string19 = string16.concat(" " + strig17 + " " + string18)
// console.log(string19);

// ----------------------------------

// trim

// let strig20 =" java script "
// let string21 = strig20.trim();
// console.log(string21);
// console.log(string21.length);