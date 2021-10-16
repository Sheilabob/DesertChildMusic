
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

    let cardArray = [cCard, dCard, eCard, fCard, gCard, aCard, bCard]


    $(function() {
        $("#btnShowCard").click(function(){
            for (let i=0; i<7; i++) {
                $(cardArray[i]).collapse("hide");
            };
            let randomInteger = Math.floor(Math.random() * 6);
            console.log(randomInteger);
            $(cardArray[randomInteger]).collapse("show");
        })
    });
