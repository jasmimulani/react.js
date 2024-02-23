// JavaScript Regex

// In JavaScript, a Regular Expression (RegEx) is an object that describes a sequence of characters used for defining a search pattern. 

{
    // /^a...s$/
}

// The above code defines a RegEx pattern. The pattern is: any five letter string starting with a and ending with s.

// A pattern defined using RegEx can be used to match against a string.


// Create a RegEx

// There are two ways you can create a regular expression in JavaScript.

// Using a regular expression literal:
// The regular expression consists of a pattern enclosed between slashes /.
{
    // const regularexp = /abc/;
    // here, /abc/ is ragular expression.
    
}

// using the reguarexp() contructor function:
// you can also create a regular expression by calling the regexp() constructor function.

{

    // const regularexp = new RegExp('abc');
}

{
    // const regex = new RegExp(/^a....s$/);
    // console.log(regex.test('aliais'));
}

// In the above example, the string alias matches with the RegEx pattern /^a...s$/. Here, the test() method is used to check if the string matches the pattern.

// There are several other methods available to use with JavaScript RegEx. Before we explore them, let's learn about regular expressions themselves.

// Specify Pattern Using RegEx

// To specify regular expressions, metacharacters are used. In the above example (/^a...s$/), ^ and $ are metacharacters.

// MetaCharacters

// Metacharacters are characters that are interpreted in a special way by a RegEx engine. Here's a list of metacharacters:

{
    // [] . ^ $ * + ? {} () \ |
}



/* [] - Square brackets */
/*

Here, [abc] will match if the string you are trying to match contains any of the a, b or c.

You can also specify a range of characters using - inside square brackets.
[a-e] is the same as [abcde]

[1-4] is the sam as [1234]

[0-39] is the same as [01239]

You can complement (invert) the character set by using caret ^ symbol at the start of a square-bracket.

[^abc] means any character except a or b or c.

[^0-9] means any non-digit character.
*/

{
    // const RegEx = /[123]/
    // console.log(RegEx.test('21332'));     
}

/* - period */
{
    // const RegEx =/.../
    // console.log(RegEx.test('abcd'));
}

/* ^ - creat */
{

    // const RegEx=/[^v..+x(C)+h$]/
    // console.log(RegEx.test('vbvxchh'));
}

/* $ - dollar */
{

    // const RegEx=/s$/
    // console.log(RegEx.test('pass'));
}

/* * star */
{

    // const RegEx = /ma*n/
    // console.log(RegEx.test('mn'));
}

/* + plus */
{
    // const RegEx = /ma+n/
    // console.log(RegEx.test('woman'));
}

/*{} braces */
{
    // const RegEx=/[0-1]{2,4}/
    // console.log(RegEx.test('0134'));

}
/* () group */
{
    // const RegEx = /(x|y|z)cb/
    // console.log(RegEx.test('xcb mnmnm'));

    // const RegEx1 = /(x|y|z)cb$/
    // console.log(RegEx1.test('xcb'));

    // const regex2 =/(x|y|z)cb+d$/
    // console.log(regex2.test('sasxcbd'));
}

{
    // const RegEx = /^mu*l[a-a]+ni$/
    // console.log(RegEx.test('mulani'));

    // const RegEx1 =/^j*a+smi$/
    // console.log(RegEx1.test('jasmi'));

    // const RegEx2 =/2*5+0*320+06$/
    // console.log(RegEx2.test('25032006'));


}


{
    // const Regex = /^mul+ani_ja*smi_(25)+(-03)*-2006$/
    // console.log(Regex.test('mulani_jasmi_25-03-2006'));
}


/* ? question mark */
{
    // let neighbor = /neig?hbou?r/
    // console.log(neighbor.test("neighbor"));
    // console.log(neighbor.test("neihbor"));
}

// | alternation

{
    // const Regex = /fg|er/
    // console.log(Regex.test("fgma"));
}

// \ backslash
/*
Backslash \ is used to escape various characters including all metacharacters. For example,

\$a match if a string contains $ followed by a. Here, $ is not interpreted by a RegEx engine in a special way.

If you are unsure if a character has special meaning or not, you can put \ in front of it. This makes sure the character is not treated in a special way.
*/

// JavaScript Regular Expression Methods

// you can either use RegExp() or regular expression literal to create a RegEx in JavaScript.

/*

exec()	Executes a search for a match in a string and returns an array of information. It returns null on a mismatch.*/


// test()	Tests for a match in a string and returns true or false.

// match()	Returns an array containing all the matches. It returns null on a mismatch.

// matchAll()	Returns an iterator containing all of the matches.

// search()	Tests for a match in a string and returns the index of 
// the match. It returns -1 if the search fails.

// replace()	Searches for a match in a string and replaces the matched substring with a replacement substring.

// split()	Break a string into an array of substrings.


{
        //   const regex1 =/^a.../;
        //   const regex2 = ('abbd')
        //   console.log(regex1.test(regex2));
          
}

{
    // const regex1=/[0-2]{0,1}/;
    // const regex = regex1.test('989808')
    // console.log(regex);
}

// In JavaScript, you can use regular expressions with RegExp() methods: test() and exec().

// There are also some string methods that allow you to pass RegEx as its parameter. They are: match(), replace(), search(), and split().

// regular exprssion.

{
    // const string = 'find me';
    // const pattern =/me/;
    //  // search if the pattern is in string variable
    // const result1=string.search(pattern);
    // console.log(result1);
    // // replace the character with another characte
    // const string1 ='find me';
    // const text= string1.replace(pattern,'found you');
    // console.log(text);
}

 // splitting strings into array elements
 {

    //  const regex1= /[\s,]+/;
    //  const result2 = 'hello world!'.split(regex1);
    //  const text= 'hello world!'
    //  const text2 = text.split('')
    //  console.log(text2);
    //  console.log(result2);
 }

     // searching the phone number pattern
     {

         //  const regex2=/(\d{4})\D(\d{4})\D(\d{2})/g;
         //  const result3 = regex2.exec('my phone number is: 2222 2222 34');
         //  console.log(result3);
     }

    // Regular Expression Flags

// Flags are used with regular expressions that allow various options such as global search, case-insensitive search, etc. They can be used separately or together.

// Regular Expression Modifier  

{
    // const string ='Hello hello hello';
//   //  performing a replacement
//   const result1 = string.replace(/hello/,'world');
//   console.log(result1);

// performing global replacement
// const result2 = string.replace(/hello/g,'world');
// console.log(result2);

//  performing case-insensitive replacement
// const result3 = string.replace(/hello/i,'world');
// console.log(result3);

}


//task
{

    // const regex =/...........+@.....*.com$/
    // console.log(regex.test('jasmimulani@gmail.com'));
}
{

    //  const regex1=/(\d{3})\D(\d{3})\D(\d{2})\D(\d{2})/g;
    //  const result1 = regex1.test('123 456 76 98')
    //  console.log(result1);
}
{
    //  const regex2=/(\d{2})\D(\d{2})\D(\d{2})\D(\d{2})\D(\d{2})/g;
    //  const result2 = regex2.test('12 34 56 76 98')
    //  console.log(result2);

}
{
    //   const regex3=/(\d{4})\D(\d{4})\D(\d{2})/g;
    //  const result3 = regex3.test('1234 5676 98')
    //  console.log(result3);
}
{
//    const regex4=/(\d{2})-(\d{2})-(\d{2})-(\d{2})-(\d{2})/g;
//      const result4 = regex4.test('12-34-56-76-98')
//      console.log(result4); 
}
{
    //   const regex5=/(\d{3})-(\d{3})-(\d{2})-(\d{2})/g;
    //  const result5 = regex5.test('123-456-76-98')
    //  console.log(result5);
}
{
    //   const regex6=/(\d{4})-(\d{4})-(\d{2})/g;
    //  const result6 = regex6.test('1234-5676-98')
    //  console.log(result6);
}


// searching the phone number pattern
// const regex1 = /(\d{3})(\d{3})_(\d{2})_(\d{2})/g;
// const result2 = regex1.exec('123123_12_12.');
// console.log(result2);

// const regex2 = /(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/g;
// const result3 = regex2.exec('1212121212.');
// console.log(result3);

// const regex3 = /(\d{4})(\d{4})(\d{2})/g;
// const result4 = regex3.exec('1234123412.');
// console.log(result4);

// const regex4 = /(\d{2})-(\d{2})-(\d{2})-(\d{2})-(\d{2})/g;
// const result5 = regex4.exec('12-12-12-12-12.');
// console.log(result5);

// const regex5 = /(\d{3})-(\d{3})-(\d{2})-(\d{2})/g;
// const result6 = regex5.exec('123-123-12-12.');
// console.log(result6);

// const regex6 = /(\d{4})-(\d{4})-(\d{2})/g;
// const result7 = regex6.exec('1234-1234-12.');
// console.log(result7);

// const regex = /[a-zA-Z0-9_\-\.]+[@][a-z]+[\.][a-z]{2,3}/g;
// console.log(regex.test('jasmi@gmail.com'));


