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
    // const Regex = /^mul+ani_ja+smi_(25)+(_03)+_2006$/
    // console.log(Regex.test('mulani_jasmi_25_03_2006'));
}

