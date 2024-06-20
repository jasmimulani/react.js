let obj1=[
  {"name" : "Ashiti" ,"Id":"1", "Marks":"30"},
  {"name" : "jasmi" ,"Id":"2", "Marks":"34"},
  {"name" : "srushti" ,"Id":"3", "Marks":"38"},
  {"name" : "vishva" ,"Id":"4", "Marks":"39"},
  {"name" : "ram" ,"Id":"5", "Marks":"40"},
  {"name" : "shyam" ,"Id":"6", "Marks":"32"},
  {"name" : "kartik" ,"Id":"7", "Marks":"35"},
  {"name" : "het" ,"Id":"8", "Marks":"50"},
  {"name" : "vansh" ,"Id":"9", "Marks":"56"},
  {"name" : "prince" ,"Id":"10", "Marks":"40"},
  {"name" : "kiran" ,"Id":"11", "Marks":"48"},
  {"name" : "khanak" ,"Id":"12", "Marks":"50"},

]
// console.log(obj1);

// let object1 =JSON.parse(obj1)
// console.log(object1);
// console.log(typeof(obj1));
// console.log(typeof(object1));
// =========================================================\
//   ajex data print to inner html page using referance file..
function loadData(){

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
   if(this.readyState == 4 && this.status == 200){
     document.getElementById('json').innerHTML = this.responseText;
  // console.log(this.responseText);
   }
  };
  
  xhttp.open("GET","json.js",true);
  xhttp.send();
  }

   

// let obj=
// {
//     "name":"jasmi",
//     "age":20,
//     "friend":"srushti"
// }
// console.log(obj);

/*  new lacture */


/* JavaScript JSON data */

/* Mutable Data */

// let Data ={name : "jhon" ,age:50, hobby:"cricket"}
// console.log(Data);

// let JsonData = {"name" : "john","age":50 , "hobby":"cricket"}
// console.log(JsonData);


// let User  = [
//     {
//       "Name" :  "John"
//     },
//     {
//       "Age" : 45
//     },
//     {
//       "Hobby" : {
//         "hobby1" : "Baseball",
//         "hobby2" : "Superball",
//         "hobby3" :"Cricket",
//         "hobby4" : "Travelling"
//       }
//     },
//     {
//       "Topic" : ["Javascript" , "SQL" , "ReactJs" , "Html" , "Css"]
//     }
// ]


// console.log(User);
// console.log(User[0].Name);
// console.log(User[1].Age);
// console.log(User[2].Hobby);
// console.log(User[2].Hobby.hobby1);
// console.log(User[2].Hobby.hobby2);
// console.log(User[2].Hobby.hobby3);
// console.log(User[2].Hobby.hobby4);
// console.log(User[3].Topic);
// console.log(User[3].Topic[0]);
// console.log(User[3].Topic[1]);
// console.log(User[3].Topic[2]);
// console.log(User[3].Topic[3]);



// json.purse method

// let object = [ {"name":"jhon" ,"age":50 , "hobby":"cricket"}]
// let jsonobject =JSON.stringify(object)
// console.log(jsonobject);
// console.log(typeof(jsonobject));



// let JsonObject ='{"name":"Jhon" , "age" : 45 , "hobby" : "Cricket"}';
// console.log(object);

// let object1 = JSON.parse(jsonobject)
// console.log(object1);
// console.log(typeof(jsonobject));
// console.log(typeof(object1));

// fetch('http://localhost:3000/posts')
// .then(response => response.json())
// .then(json =>console.log(json));
