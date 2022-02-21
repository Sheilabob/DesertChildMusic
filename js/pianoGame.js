let cCard = document.getElementById("cCard");
let dCard = document.getElementById("dCard");
let eCard = document.getElementById("eCard");
let fCard = document.getElementById("fCard");
let gCard = document.getElementById("gCard");
let aCard = document.getElementById("aCard");
let bCard = document.getElementById("bCard");
let hooray = document.getElementById("hooray");
let tryAgain = document.getElementById("tryAgain");
let gameOver = document.getElementById("gameOver");

let cardArray = [cCard, dCard, eCard, fCard, gCard, aCard, bCard];
let deletedCard;

$(function() {

    $("#btnShowCard").click(function(){
       $(deletedCard).collapse("hide");
       $(hooray).collapse("hide");
       $(tryAgain).collapse("hide");
       if (!cardArray[0]) {
        $(gameOver).collapse("show");
    }
        let randomInteger = Math.floor(Math.random() * (cardArray.length-1));
        $(cardArray[randomInteger]).collapse("show");
        deletedCard = cardArray[randomInteger];
        cardArray.splice(randomInteger, 1);
        console.log(cardArray);
        console.log(deletedCard);
    })

    $("#cNote").click(function(){
        if (deletedCard === cCard) {
            $(hooray).collapse("show");
            $(tryAgain).collapse("hide");
        } else {
            $(tryAgain).collapse("show");
            $(hooray).collapse("hide");
        }
    })

    $("#dNote").click(function(){
        if (deletedCard === dCard) {
            $(hooray).collapse("show");
            $(tryAgain).collapse("hide");
        } else {
            $(tryAgain).collapse("show");
            $(hooray).collapse("hide");
        }
    })

    $("#eNote").click(function(){
        if (deletedCard === eCard) {
            $(hooray).collapse("show");
            $(tryAgain).collapse("hide");
        } else {
            $(tryAgain).collapse("show");
            $(hooray).collapse("hide");
        }
    })

    $("#fNote").click(function(){
        if (deletedCard === fCard) {
            $(hooray).collapse("show");
            $(tryAgain).collapse("hide");
        } else {
            $(tryAgain).collapse("show");
            $(hooray).collapse("hide");
        }
    })

    $("#gNote").click(function(){
        if (deletedCard === gCard) {
            $(hooray).collapse("show");
            $(tryAgain).collapse("hide");
        } else {
            $(tryAgain).collapse("show");
            $(hooray).collapse("hide");
        }
    })

    $("#aNote").click(function(){
        if (deletedCard === aCard) {
            $(hooray).collapse("show");
            $(tryAgain).collapse("hide");
        } else {
            $(tryAgain).collapse("show");
            $(hooray).collapse("hide");
        }
    })

    $("#bNote").click(function(){
        if (deletedCard === bCard) {
            $(hooray).collapse("show");
            $(tryAgain).collapse("hide");
        } else {
            $(tryAgain).collapse("show");
            $(hooray).collapse("hide");
        }
    })


});


const c = document.getElementById("cNote"); //locates the C Key on the piano and stores in variable, note that an ID is needed in the HTML
c.addEventListener('click', playCNote);//adds event listener to C Key to call function to play
function playCNote() {
var cNote = new Audio()//attaches the audio to the DOM
cNote.src="/sound/C.mp3";//denotes the source of the newly attached audio
cNote.play();//plays the audio
}

const cSharp = document.getElementById("cSharpNote");
cSharp.addEventListener('click', playCSharp);
function playCSharp() {
var cSharpNote = new Audio()
cSharpNote.src="/sound/Csharp.mp3";
cSharpNote.play();
}

const d = document.getElementById("dNote");
d.addEventListener('click', playDNote);
function playDNote() {
var dNote = new Audio()
dNote.src="/sound/D.mp3";
dNote.play();
}

const dSharp = document.getElementById("dSharpNote");
dSharp.addEventListener('click', playDSharp);
function playDSharp() {
var dSharpNote = new Audio()
dSharpNote.src="/sound/Dsharp.mp3";
dSharpNote.play();
}

const e = document.getElementById("eNote");
e.addEventListener('click', playENote);
function playENote() {
var eNote = new Audio()
eNote.src="/sound/E.mp3";
eNote.play();
}

const f = document.getElementById("fNote");
f.addEventListener('click', playFNote);
function playFNote() {
var fNote = new Audio()
fNote.src="/sound/F.mp3";
fNote.play();
}

const fSharp = document.getElementById("fSharpNote");
fSharp.addEventListener('click', playFSharp);
function playFSharp() {
var fSharpNote = new Audio()
fSharpNote.src="/sound/Fsharp.mp3";
fSharpNote.play();
}

const g = document.getElementById("gNote");
g.addEventListener('click', playGNote);
function playGNote() {
var gNote = new Audio()
gNote.src="/sound/G.mp3";
gNote.play();
}

const gSharp = document.getElementById("gSharpNote");
gSharp.addEventListener('click', playGSharp);
function playGSharp() {
var gSharpNote = new Audio()
gSharpNote.src="/sound/Gsharp.mp3";
gSharpNote.play();
}

const a = document.getElementById("aNote");
a.addEventListener('click', playANote);
function playANote() {
var aNote = new Audio()
aNote.src="/sound/A.mp3";
aNote.play();
}

const aSharp = document.getElementById("aSharpNote");
aSharp.addEventListener('click', playASharp);
function playASharp() {
var aSharpNote = new Audio()
aSharpNote.src="/sound/Asharp.mp3";
aSharpNote.play();
}

const b = document.getElementById("bNote");
b.addEventListener('click', playBNote);
function playBNote() {
var bNote = new Audio()
bNote.src="/sound/B.mp3";
bNote.play();
}
