
    var cNote = new Audio()
    cNote.src="/sound/C.mp3";

    var dNote = new Audio()
    dNote.src="/sound/D.mp3";

    var eNote = new Audio()
    eNote.src="/sound/E.mp3";

    var cSharpNote = new Audio()
    cSharpNote.src="/sound/Csharp.mp3";

    var dSharpNote = new Audio()
    dSharpNote.src="/sound/dsharp.mp3";

    let cCard = document.getElementById("cCard")
    let dCard = document.getElementById("dCard")
    let eCard = document.getElementById("eCard")
    let fCard = document.getElementById("fCard")
    let gCard = document.getElementById("gCard")
    let aCard = document.getElementById("aCard")
    let hooray = document.getElementById("hooray")

    let cardArray = [cCard, dCard, eCard, fCard, gCard, aCard];
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
            let randomInteger = Math.floor(Math.random() * (cardArray.length-1));
            $(cardArray[randomInteger]).collapse("show");
            deletedCard = cardArray[randomInteger];
            cardArray.splice(randomInteger, 1);
            console.log(cardArray);
            console.log(deletedCard);
        })

        $("#cNote").click(function(){
            $(hooray).collapse("hide");
            $(tryAgain).collapse("hide");
            if (deletedCard === cCard) {
                $(hooray).collapse("show");
            } else {
                $(tryAgain).collapse("show");
            }
        })

        $("#dNote").click(function(){
            $(hooray).collapse("hide");
            $(tryAgain).collapse("hide");
            if (deletedCard === dCard) {
                $(hooray).collapse("show");
            } else {
                $(tryAgain).collapse("show");
            }
        })

        $("#eNote").click(function(){
            $(hooray).collapse("hide");
            $(tryAgain).collapse("hide");
            if (deletedCard === eCard) {
                $(hooray).collapse("show");
            } else {
                $(tryAgain).collapse("show");
            }
        })

        $("#fNote").click(function(){
            $(hooray).collapse("hide");
            $(tryAgain).collapse("hide");
            if (deletedCard === fCard) {
                $(hooray).collapse("show");
            } else {
                $(tryAgain).collapse("show");
            }
        })

        $("#gNote").click(function(){
            $(hooray).collapse("hide");
            $(tryAgain).collapse("hide");
            if (deletedCard === gCard) {
                $(hooray).collapse("show");
            } else {
                $(tryAgain).collapse("show");
            }
        })

        $("#aNote").click(function(){
            $(hooray).collapse("hide");
            $(tryAgain).collapse("hide");
            if (deletedCard === aCard) {
                $(hooray).collapse("show");
            } else {
                $(tryAgain).collapse("show");
            }
        })

        $("#bNote").click(function(){
            $(hooray).collapse("hide");
            $(tryAgain).collapse("hide");
            if (deletedCard === bCard) {
                $(hooray).collapse("show");
            } else {
                $(tryAgain).collapse("show");
            }
        })


    });
