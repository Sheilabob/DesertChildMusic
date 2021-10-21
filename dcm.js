
    var cNote = new Audio()
    cNote.src="/sound/C.mp3";

    var dNote = new Audio()
    dNote.src="/sound/D.mp3";

    var eNote = new Audio()
    eNote.src="/sound/E.mp3";

    var cSharpNote = new Audio()
    cSharpNote.src="/sound/Csharp.mp3";

    var dSharpNote = new Audio()
    dSharpNote.src="/sound/Dsharp.mp3";

    var fNote = new Audio()
    fNote.src="/sound/F.mp3";

    var fSharpNote = new Audio()
    fSharpNote.src="/sound/Fsharp.mp3";

    var gNote = new Audio()
    gNote.src="/sound/G.mp3";

    var gSharpNote = new Audio()
    gSharpNote.src="/sound/Gsharp.mp3";

    var aNote = new Audio()
    aNote.src="/sound/A.mp3";

    var aSharpNote = new Audio()
    aSharpNote.src="/sound/Asharp.mp3";

    var bNote = new Audio()
    bNote.src="/sound/B.mp3";

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

        $("#signUpButton").click(function(){
            $("#signUpModal").modal("show");
        });

        $("#paymentButton").click(function(){
            $("#paymentModal").modal("show");
        });


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
