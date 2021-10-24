    $(function() {

        $("#signUpButton").click(function(){
            $("#signUpModal").modal("show");
        });

        $("#signUpButtonTwo").click(function(){
            $("#signUpModal").modal("show");
        });

        $("#contactClick").click(function(){
            $("#contactModal").modal("show");
        });

        $("#questions").click(function(){
            $("#contactModal").modal("show");
        });

        $("#paymentButton").click(function(){
            $("#paymentModal").modal("show");
        });
    });

const f = document.getElementById("fNoteBtn");
f.addEventListener('click', playFNote);
f.addEventListener('click', redirectToResources);
function playFNote() {
    var fNote = new Audio()
    fNote.src="/sound/F.mp3";
    fNote.play();
}
function redirectToResources() {
    setTimeout(function(){window.location.href = "resources.html";}, 1100) //This is the redirect with delay
}

const g = document.getElementById("gNoteBtn");
g.addEventListener('click', playGNote);
g.addEventListener('click', redirectToCalendar);
function playGNote() {
    var gNote = new Audio()
    gNote.src="/sound/G.mp3";
    gNote.play();
}
function redirectToCalendar() {
    setTimeout(function(){window.location.href = "calendar.html";}, 1100) //This is the redirect with delay
}

const a = document.getElementById("aNoteBtn");
a.addEventListener('click', playANote);
a.addEventListener('click', redirectToAbout);
function playANote() {
    var aNote = new Audio()
    aNote.src="/sound/A.mp3";
    aNote.play();
}
function redirectToAbout() {
    setTimeout(function(){window.location.href = "about.html";}, 1100) //This is the redirect with delay
}

const b = document.getElementById("bNoteBtn");
b.addEventListener('click', playBNote);
b.addEventListener('click', redirectToIndex);
function playBNote() {
    var bNote = new Audio()
    bNote.src="/sound/B.mp3";
    bNote.play();
}
function redirectToIndex() {
    setTimeout(function(){window.location.href = "index.html";}, 1100) //This is the redirect with delay
}

const c = document.getElementById("cNoteBtn"); //locates the C Key on the piano and stores in variable, note that an ID is needed in the HTML
c.addEventListener('click', playCNote);//adds event listener to C Key to call function to play
function playCNote() {
    var cNote = new Audio()//attaches the audio to the DOM
    cNote.src="/sound/C.mp3";//denotes the source of the newly attached audio
    cNote.play();//plays the audio
}
    
const cSharp = document.getElementById("cSharpNoteBtn");
cSharp.addEventListener('click', playCSharp);
function playCSharp() {
    var cSharpNote = new Audio()
    cSharpNote.src="/sound/Csharp.mp3";
    cSharpNote.play();
}

const d = document.getElementById("dNoteBtn");
d.addEventListener('click', playDNote);
function playDNote() {
    var dNote = new Audio()
    dNote.src="/sound/D.mp3";
    dNote.play();
}

const dSharp = document.getElementById("dSharpNoteBtn");
dSharp.addEventListener('click', playDSharp);
function playDSharp() {
    var dSharpNote = new Audio()
    dSharpNote.src="/sound/Dsharp.mp3";
    dSharpNote.play();
}

const e = document.getElementById("eNoteBtn");
e.addEventListener('click', playENote);
function playENote() {
    var eNote = new Audio()
    eNote.src="/sound/E.mp3";
    eNote.play();
}

const fSharp = document.getElementById("fSharpNoteBtn");
fSharp.addEventListener('click', playFSharp);
function playFSharp() {
    var fSharpNote = new Audio()
    fSharpNote.src="/sound/Fsharp.mp3";
    fSharpNote.play();
}

const gSharp = document.getElementById("gSharpNoteBtn");
gSharp.addEventListener('click', playGSharp);
function playGSharp() {
    var gSharpNote = new Audio()
    gSharpNote.src="/sound/Gsharp.mp3";
    gSharpNote.play();
}

const aSharp = document.getElementById("aSharpNoteBtn");
aSharp.addEventListener('click', playASharp);
function playASharp() {
    var aSharpNote = new Audio()
    aSharpNote.src="/sound/Asharp.mp3";
    aSharpNote.play();
}