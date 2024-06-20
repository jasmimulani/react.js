// function loadData(){
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function(){
//         if(this.readyState == 4 && this.status == 200){
//             document.getElementById("demo").innerHTML =this.responseText;
//         }
//     }

//     xhttp.open("GET","ajex.txt",true);
//     xhttp.send();
// }

/* javascript async  and await keyword */

// async function Data(parameter-1, parameter-2){

// }

// async function j(){
// console.log("async action");
// return Promise.resolve(1)
// }

/* promise in javascript */

// let promises = new Promise(function(resolve,reject){
//     resolve("promis resolv");
//     console.log(result);
// })
// .then(function(result){
//     console.log(result);
// })

/* promise with sync and awiat*/

let promises1 = new Promise(function(resolve,reject){
    setTimeout(
        function(){
            resolve("promise resolve 1")
        },3000
    );
});

let promises2 = new Promise(function(resolve,reject){
    setTimeout(
        function(){
            resolve("promise resolve 2")
        },10000
    );
});


async function asyncfun(){
    let result1 = await promises1
    let result2 = promises2;

    console.log(result1);
    console.log(result2);
    console.log("hello async");
}
// calling function 

 asyncfun()