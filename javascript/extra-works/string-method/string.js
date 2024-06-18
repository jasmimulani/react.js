// out date syntex

const name = "jasmi"
const lastname = "mulani"
console.log(name + lastname);


// morden syntex

// morden syntex -> variable mai easy to add another method like name.uppercase , lastname.lowercase ect...

  console.log(`hello i am ${name} and my last name is ${lastname}`);

   //second way to string delacatarion

   // second method -> output key and value pair 

     const  iam = new String("jasmi-mulani")
     console.log(iam[0]);
     console.log(iam.__proto__);
     console.log(iam .length);
     console.log(iam .toLocaleUpperCase());
     console.log(iam .charAt(0));
     console.log(iam .indexOf('m'));

      const newString = iam.substring(0,3)
      console.log(newString);

        const anotherstring = iam.slice(0,-3)
        console.log(anotherstring);

        const newStringone = "           jasmi       "
        console.log(newStringone);
        console.log(newStringone.trim());

        const url = 'hrrps://jasmi.com/jasmi%20mulani'
        console.log(url.replace("%20" , '-'))
        console.log (url.includes("mulaniii"))

          console.log(iam.split(' ='));


 /////////////////////////////////////////////////////////////////////////////////////////

// string method

// charat() 
// character ni position mate space is counted
const sentence = 'hello i ma jasmi'
const index = 3;
console.log(`the character at inddex ${index} is ${sentence.charAt(index)}`);

  // ******************* second method  ****************

 const sentence1 = 'hello i am jasmi'
 console.log(`the character at index ${sentence1.charAt(3)}`);

// ********************************************************
//charcodeat
// character ni askii value represent 

const sentence2 = 'this is sentance2';
const index2 = 3
console.log(`character code ${index2} is equal to ${sentence2.charCodeAt(index2)}`);

// *****************************************************************
// concate
// string combine

 const str1 = 'hello';
 const str2 = 'world';
 console.log(str1.concat('', str2));
 console.log(str2.concat('', str1));

//  ************************************************************************
//endswith
//latter no last wolrd start to thhis lettre so answer is true and lettre was another that time answer is false

const  str3 = 'hello i am jasmi'
console.log(str3.endsWith("jasmi"));
console.log(str3.endsWith("hello"));

// *****************************************************************************
// include
// world is include or not wolrd is include that time ans is true or not include that time ans is false
const sentence4 = 'the quick brown fox jumps over the lay dog'
// const wolrd4 ='jasmi';
const wolrd4 ='fox';
console.log(`the world"${wolrd4}" ${sentence4.includes(wolrd4) ?'is' :'is not'} in the sentence`);

// ***************************************************************
// indexof
// findout the index

const paragraph = 'i think run dog is cuter than your dog!';
const searchteam = 'dog';
const indexoffirst = paragraph.indexOf(searchteam);
// console.log(`the index of the first '${searchteam}' is ${indexoffirst}`);

// second method
// any world repet two time that time this method use andn this method is display to second world
console.log(`the index of the first '${searchteam}' is ${paragraph.indexOf(searchteam,
  indexoffirst +1,
)}`,
);

// ************************************************************
//match
// match to string and show to match character A and a is diffrent
const paragraph5 = 'tHe quicl brown ox jumps over the lazy dog'
const regex =/[A-Z]/g;
const found = paragraph5.match(regex);
console.log(found);

// ************************************************************
// matchall
// comper to all string to another string
const regex6 = /t(e)(st(\d?))/g;
const str6 = 'test1test2';
const array = [...str6.matchAll(regex6)];
console.log(array[1]);

// **************************************************************

// padend
// refrence to note book
const num1 ='500'
// const num2 = num1.padEnd(4,0)
// console.log(num2);
console.log(num1.padEnd(10 ,'.'));


// **************************************************************
// padstart
// add space in starting to string
const num2 ='20'
console.log(num2.padStart(20 , ':'));

// ************************************************************
// repat
// repating to string
const mood ="jasmi!";
console.log(` hello${mood.repeat(5)}`);

// **************************************************************
//  replace
// chang to wold to another wolds

 const str9 ="hello my name is jasmi";
 console.log(str9.replace('my name is' ,"i am"));

//  ******************************************************************
// replaceAll
// chagne to all wold to same name
const str10 = "hello i am jasmi mulani hello";
console.log(str10.replaceAll('hello' , 'hy'));

// *********************************************************
// slice
// give to worl to specific number that position to sskeep and next position will be come as answer

// (-) positon is count to back side
// syntex1 : slice(indexStart)
const str7 = 'The quick brown fix jumps over the lazy dog';
console.log(str7.slice(10));

// syntex2 : slice(indexStart , indexEnd)

const str8 = 'hello i am str8'
console.log(str8.slice(0 , 8));

// *************************************************************
//  split
//  convert string into array
 const str11 = 'hello i am a string of 11';
 console.log(str11.split(''));

//  ********************************************************************
// startwith

const str12 = 'hello i am a astring of 12';
console.log(str12.startsWith('hello'));
// console.log(str12.startsWith('2'));

       