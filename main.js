const card = document.getElementById("card");
const nextBtn = document.getElementById("next");

let words = {
    "word 1": "ans 1",
    "word 2": "ans 2",
    "word 4": "ans 4",
    "word 5": "ans 5",
    "word 6": "ans 6",
    "word 7": "ans 7"
}

let wordsLength = Object.keys(words).length;

document.getElementById('main-word').innerHTML = Object.keys(words)[Math.floor(Math.random() * wordsLength)];

Object.prototype.getKeyByValue = function( value ) {
    for( var prop in this ) {
        if( this.hasOwnProperty( prop ) ) {
             if( this[ prop ] === value )
                 return prop;
        }
    }
}

card.addEventListener('click', () => {
    const cur = document.getElementById("main-word").innerHTML;
    if (cur in words) {
        document.getElementById("main-word").innerHTML = words[cur];
    } else {
        document.getElementById("main-word").innerHTML = words.getKeyByValue(cur);
    }
})

nextBtn.addEventListener('click', () => {
    const cur = document.getElementById("main-word").innerHTML;
    if (cur in words) {
        delete words[cur];
    } else {
        delete words[words.getKeyByValue(cur)];
    }
    wordsLength = Object.keys(words).length;
    if (wordsLength !== 0) {document.getElementById('main-word').innerHTML = Object.keys(words)[Math.floor(Math.random() * wordsLength)];} else {document.getElementById("main-word").innerHTML = "you are done!"}
    
    console.log(words);
})



// function getKeyByValue(object, value) {
//     return Object.keys(object).find(key => object[key] === value);
//   }
