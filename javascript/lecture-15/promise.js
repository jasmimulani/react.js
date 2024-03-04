// -------------------------------------------------------------------------------
//  javascript promise and promise chaining

// in javascritpt, a promise is a good way to handle asynchronous operations . it is useed to find out if the aysnchonous operattion is successfuly completed or not.

// create a promise

// {
//     let promise = new promise(function(resolve , reject){});
// }

// program with a promise
{
    // const count =true;

    // let countvlue = new Promise(function(resolve  , reject)
    // {
    //     if(count){
    //         resolve("there is a count value:");
    //     } else{
    //         reject("there is no count value:");
    //     }
    // });
    //  console.log(countvlue);
}

// javascript promise chaining

{
    // let countvalue = new promise (function(resolve , reject){
    //     resolve("promise is not resolved");
    // });

    //  countvalue
    //  .than(function successvalue(result){
    //     console.log(result);
    //  })

    //  .than(function successvalue1(){
    //      console.log("you can call multiple function this way.");
    //  });
}


// catch() method

{
    // let countvalue = new Promise(function (resolve, reject){
    //     resolve("promise is not rejectrd");
    // });

    // countvalue.than(
    //     function successvalue(){
    //         let text= 8*10
    //         console.log(text);
    //     },
    //     )
    //     .catch(
    //         function errorvalue(result){
    //             console.log(result);
    //         }
    //     );
}

// finaly method

// let constvalue = new Promise(function(resolve , reject){
//     reject();
// });

// constvalue.finally(
//     function greet(){
//         console.log("this code is executed:");
//     }
// );
// -------------------------------------------------------------------------------
{
let conutvalue = new Promise(function(resolve ,reject){
    resolve();
});

conutvalue.finally(
    function greet(){
        console.log('this code is executed.')
    }
);

let promise = new Promise(function(resolve , reject){
    setTimeout(
        function(){
            console.log('Hello Promises')
            // reject('this task is not complete!')
            resolve()
        },5000
    )
})
promise.then(function(){
    setTimeout(
        function(){
            console.log('Frist then function')
        },1000
    )
})
.then(function(){
    setTimeout(
        function(){
            console.log('second then function')
        },5000
    )
})
.then(function(){
    setTimeout(
        function(){
            console.log('Third then function')
        },4000
    )
})
.then(function(){
    setTimeout(
        function(){
            console.log('Fourth then function')
        },5000
    )
})
.then(function(){
    setTimeout(
        function(){
            console.log('Fifth then function')
        },1000
    )
})
.catch(function(reslut){
    console.log(reslut)
})
.finally(function(){
    console.log('the Asyncronous task complete!...')
})
}