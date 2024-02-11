/* Javascript Array */  

// let newaary = [1,false,"string"]
// console.log(newaary);
// console.log(newaary.length);

// let newarry2 = ["apple", "banana", "watermelon", , "lichi"]   // array maa koy jagiya khali hoy pn teni index value hoy tene array no void element
// console.log(newarry2);
// console.log(newarry2[4]);
// console.log(Object.keys(newarry2));


// newarry2[0] = "graps"
// console.log(newarry2);

// let newstring = newarry2.toString();
// console.log(newstring);
// console.log(typeof(newstring));


// Array length properties
// Accessing the First Array Element
// Accessing the Last Array Element
// Adding Array Elements
// Converting Arrays to Strings

//  let arry = ["jasmi","shrushti","ashiti","vishwa","urmilaa"];
//  console.log(arry);
//  console.log(arry[0]);
// console.log(arry[4]);
// arry.push("khushi");
// console.log(arry);
// arry.pop()
// arry.pop()
// console.log(arry);

// arry[0] = "janvi"
// console.log(arry);

//join() method

{
    // let arry = ["jasmi","shrushti","ashiti","vishwa","urmilaa"];
    // let arry2 = arry.join("*") 
    // console.log(arry2);
    // console.log(typeof(arry2));
}

// popping method

{
    // const option = ["option-1","option-2", "option-3","option-4", "option-5"]
    // document.getElementById("demo").innerHTML = option;

    // document.getElementById("demo-2").innerHTML= option.pop()
    // console.log(option);
    // console.log(option.length);
}

// pop method
{
    // const option = ["option-1", "option-2", "option-3", "option-4","option-5"];
    // document.getElementById("demo").innerHTML = option;

    // document.getElementById("demo").innerHTML=option.pop();
    
    // document.getElementById("demo-2").innerHTML=option.pop();

    // document.getElementById("demo-3").innerHTML=option.pop();

    // console.log(option);

}

// pushing method
{
    // const option = ["option-1", "option-2" , "option-3","option-4"];

    // document.getElementById("demo").innerHTML = option;

    // option.push("option-5")

    // document.getElementById("demo").innerHTML=option;

    // console.log(option);
}

{
    // const option = ["option-1", "option-2", "option-3","option-4"];

    // document.getElementById("demo").innerHTML= option.push("hello");
    // console.log(option);

    // document.getElementById("demo-2").innerHTML = option.length;

}

// shifting element   

// let arry = ["option-1" , "t.v", "false", 3 ,"skill","qode"];
// let arry2 = arry.shift();
// let arry3 = arry.shift();
// console.log(arry2);
// console.log(arry3);
// console.log(arry);


// shifted out method

// const option = ["option-1", "option-2", "option-3","option-4"];
// console.log(option);
// document.getElementById("demo").innerHTML = option.shift();
// document.getElementById("demo-2").innerHTML = option.shift();
// console.log(option);

// unshift method
// const option = ["option-1", "option-2", "option-3","option-4"];
// option.unshift("option-0");
// console.log(option);


//unshift method
// const option = ["option-1", "option-2", "option-3","option-4"];
// document.getElementById("demo").innerHTML = option.unshift("option-0");
// document.getElementById("demo-2").innerHTML = option
// console.log(option);

// changing method
// const option = ["option-1", "option-2", "option-3","option-4"];
// console.log(option);
// option[15]="option-15";
// console.log(option);

// add method

// const option = ["option-1", "option-2", "option-3","option-4"];
// document.getElementById("demo").innerHTML=option;
// option[option.length] = "option-5";
// document.getElementById("demo-2").innerHTML=option;


// delete method

// let arry= ["option-1", "option-2", "option-3","option-4","option-5","option-6"];
// console.log(arry);
// console.log(arry.length);
// delete arry[4]
// console.log(arry);
// console.log(arry.length);

// arry.length=20;
// console.log(arry);

// arry[16] = "skill qode"
// console.log(arry);


// merging method

    // let arry1 = ["javascript" , "c" , "c++" , "python" , "html" , "css"];
    // let arry2 = ["kotlin" , "dart" , "nodejs"  , "php" , "wordpress"];
    // let arry3 = ["boostrap" , "tailwind" , "reactjs" , "nextjs"];

    // let arry4 = arry1.concat(arry2,arry3)
    // console.log(arry4);


    // splicing method

    // splice(start)
    // splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2)
// splice(start, deleteCount, item1, item2, /* …, */ itemN)


// slice method


// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango","Watermelon"];
//  const newremove = fruits.slice(0, 4);
//  document.getElementById("demo").innerHTML = fruits + "<br><br>" + newremove;

//      console.log(fruits);

 /*  Array.isArray */
    //  let book = ["math"  , "chemistry"  , "physics" , "bio"];
    //   let books = "string";
    //   console.log(Array.isArray(books));

    //   let jasmi = ["kartik", "het","vansh"];
    //   let jasmin =["string"];
    //   console.log(Array.isArray(jasmin));


    /*  javascript Sorting Array */
 
 {
    //  let book = ["math"  , "chemistry"  , "physics" , "bio" , "amazon"];
    //  let books = book.sort();
    //  console.log(books);

    //  let jasmi=["jasmi" ,"kiran","vansh", "het","ha","zibra","jac"];
    //  let jasmin = jasmi.sort();
    //  console.log(jasmin);
 }

  /*  Reversing array */
 
  {
//      let book = ["math"  , "chemistry"  , "physics" , "bio"];
//      console.log(book);
//      let bookss = book.reverse();
//      console.log(bookss);
//      let books =book.sort();
//      console.log(books);
 }




// let jasmi=["jasmi" ,"kiran","vansh", "het","ha","zibra","jac"];
// console.log(jasmi);
// let jasmin = jasmi.reverse();
// console.log(jasmin);
// let jasminn = jasmi.sort();
// console.log(jasminn);


/*  Number Sort */
 
{
    //  const number1 = [40, 12, 15, 81 ,150 ,200];
    //  let number = number1.sort()
    //  console.log(number);
    //  const number2 = number1.sort(function(a , b){return a - b});
    //  console.log(number2);
 }


