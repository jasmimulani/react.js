const wordsTextarea = document.querySelector(".words");
const countBtn = document.querySelector(".count-btn");
const  wordCount = document.querySelector(".word-count span");


const countwords = () => {
    let words = wordsTextarea.value
    let splitwords = words.split("");

    let numberofwords = splitwords.length;

    wordCount.innerHTML = numberofwords
};

countBtn.addEventListener("click", countwords);