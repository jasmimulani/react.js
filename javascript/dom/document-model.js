// document object model in javascript

// what is document object model(dom)
// the document object model(dom) is application programing interface (apl) for manipulating html documents.

// the do represent an html document as a tree of nodes. the dom provides functions that allow you to add,  remove, and modify parts of the document  effectively.

// note that dom is cross-plateform and languagre-indepentent  way of manipilating html and xml document.

// a documrnt as a hirearchy of nodes.

// the dom represent an html documnets as a hierarchy of nodes. consider the following html documnet:

{
    
    /* <Html>
    <head>
        <title> javascript dom</title>
    </head>
    <body>
        <p> hello dom!</p>
    </body>
</Html> */

}

// in this dom TreeWalker, the documnet is the root node. the root node has one child node which is the <html> element. the<html> element is called the documnet element.

// each documnet can have only one documnet elemnet. in an html documnet the documnet element is the <html> elemnet. each markup can be represented by a node in hte tree.

//  slecting elemnets

//  getelementbyid()- select an elemnet by id.
// getelementsbytagename()- select element by a tag name.
//  getelementsby classname()-select elemnet by one or more calss name.
// qweryselector()-select element by css selector.

{
    // document.getElementById('pera1').innerHTML="hello dom!"
    // document.getElementById('box-1').innerHTML="this is div tag"
    // const model=document.getElementsByClassName('box')
    // console.log(model);
    // const element = document.getElementsByTagName('h1');
    // function addtext(){
    //     for(let i=0; i< element.length; i++){
    //         element[i].innerHTML="hello world!"
    //         element[i].style.color="orange"
    //         element[i].style.background="green"
    //     }
    // }
    // addtext();
}

{
    // const NewElement = document.createElement("marquee");
    // NewElement.textContent="this is marquee tag"
    // document.body.appendChild(NewElement)
}

// qery selector
{
    // document.querySelector('.box').style.color="green";

    // document.querySelectorAll('.box').style.color="green";

}

//queryselectorall

{
    // const elements = document.querySelectorAll("#sun p");
    // console.log(elements);

    // function changeColorss(){
    //     for (let i=0; i< elements.length; i++){
    //         elements[i].style.color="red";
    //     }
    // }
}

// new elemnet creat and class creat
// const NewElement = document.createElement("div");
// NewElement.textContent="hello javascript"
// NewElement.classList="jasmi"
// NewElement.classList.add("jasmin")  //<- add , remove kri shakay
// document.body.appendChild(NewElement)


// --------------------------------------------------------------------------

// has attribute

{
    // const element = document.querySelector("p");
    // function check(){
    //     if(element.hasAttribute("id")){
    //         alert("yessss");
    //     }else{
    //         alert("Noooo")
    //     }
    // }
    //  check()

}

    // ===============================get===========

    // const NewElement =document.querySelector('input')
    // function check(){
    //     const attriname =NewElement.getAttribute('value')
    //     console.log(attriname);
    // }check()

    // ========================set attribute
    {
        // const elemenet =document.getElementById("demo")
    
        // function checkattr(){
        //     alert(elemenet.hasAttribute("name"))
        // }
        // function addattr()
        // {
        //     elemenet.setAttribute("type" ,"text")
        // }
    }
    
    // ****************Javascript remove attributes*********************

{
    // const elemenet =document.getElementById('demo')
    // function checkattr()
    // {
    //     alert(elemenet.hasAttribute('class'))
    // }
    // function remove()
    // {
    //     elemenet.removeAttribute("class")
    //     elemenet.removeAttribute("name")
    //     elemenet.removeAttribute("id")
    // }
    // function addattr(){
    //     console.log(elemenet.setAttribute("class","jasmi"))
    // }
}


/* Html Object Accessible */

/*

document.body
document.documentElement
document.forms
document.images
document.links
document.scripts
document.title

*/

{
    // doument.onload

    // function Function1(){
    //     const NewElement = document.createElement('marquee')
    //     NewElement.textContent="this is marquee tag"
    //     document.body.appendChild(NewElement)
    //     document.querySelector('body').style.background="pink"
    // }

}

// banne same work kare
// 1.document.body
{
    // document.getElementById("demo").innerHTML = document.body.innerHTML;
    //demo name na class ma aakhi body ne sav kare fari thi
}

//2.document.documentElement
{
    
    // document.getElementById("demo").innerHTML = document.documentElement.innerHTML;
    //demo name na class ma aakhi body ne sav kare fari thi
}

{
    // document.getElementById('demo').innerHTML = document.anchors.length
    //     Description
    // The anchors property is deprecated. Do NOT use it.

    // The anchors property only returns those <a> elements with a name attribute.
     // The name attribute of the <a> element is not supported in HTML5.
}

//3.document.forms
{

    // document.getElementById("demo").innerHTML = document.forms.length;

}

//head tag
{
    // document.getElementById("demo").innerHTML= document.head;
}

//4.document.images
{
    // document.getElementById("demo").innerHTML =  document.images.length;
}

//5.link tag
{
    // document.getElementById("demo").innerHTML =document.links.length;
}
//6.document.scripts
{
    //   document.getElementById("demo").innerHTML =document.scripts.length;
}
//7.document.title
{
    // document.getElementById("title").innerHTML =  document.title;
}



 


    




