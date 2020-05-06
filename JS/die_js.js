
//HOW YOU DIED
/*randomizes selection of Cause of Death and Reaction Gif after button click & writes it to HTML*/


let COD = [
    /*0*/ "You bet your friend you could  knock down a tree with a karate kick. You disrupted a bee hive and got stung to your death.",
    /*1*/ "You fought an old granny for the last package of toilet paper at the supermarket and caught your foot on the display. As you tried to yank it out, a porcelain toilet seat fell from the top shelf and knocked you out.",
    /*2*/ "You were walking with your mom and got angry at her, so you stepped on a crack in the sidewalk. Her back broke and she fell onto you, toppling you to the ground, where your head landed on a sharp rock.",
    /*3*/ "You thought the coronavirus pandemic was a hoax, so you organized a coronavirus party, livestreamed the whole thing, caught the disease, and perished.",
    /*4*/ "You pushed a kid off of a swing because all of the swings were full. At the highest point of your swing, the chain broke. You yelled, \"I can't be tamed!!!\" as you fell to your demise.",
    /*5*/ "You tried to run up the down escalator, tripped, and toppled to your death.",
    /*6*/ "You jumped into a tiger exhibit at the zoo to pet it and became a tiger meal.",
    /*7*/ "You tried the cinnamon challenge and choked on the cinnamon. At least you went viral.",
    /*8*/ "You used a ouiji board to summon the dark spirits. When you hadn't left your room before dinner the next day, your roommate checked up on you and found you breathless lying on the floor, one hand on the board and the other on your heart.",
    /*9*/ "A blind man dropped a $100 bill. You picked it up and stuck it in your wallet. When you pulled it out at home, you got a paper cut and bled to death."
    ];

let gif = [
    /*0*/ '<img src="img/RIPgifs/giphy(0).gif" alt="Gif reaction">',
    /*1*/ '<img src="img/RIPgifs/giphy(1).gif" alt="Gif reaction">',
    /*2*/ '<img src="img/RIPgifs/giphy(2).gif" alt="Gif reaction">',
    /*3*/ '<img src="img/RIPgifs/giphy(3).gif" alt="Gif reaction">',
    /*4*/ '<img src="img/RIPgifs/giphy(4).gif" alt="Gif reaction">',
    /*5*/ '<img src="img/RIPgifs/giphy(5).gif" alt="Gif reaction">',
    /*6*/ '<img src="img/RIPgifs/giphy(6).gif" alt="Gif reaction">',
    /*7*/ '<img src="img/RIPgifs/giphy(7).gif" alt="Gif reaction">',
    /*8*/ '<img src="img/RIPgifs/giphy(8).gif" alt="Gif reaction">',
    /*9*/ '<img src="img/RIPgifs/giphy(9).gif" alt="Gif reaction">',
    /*10*/'<img src="img/RIPgifs/giphy(10).gif" alt="Gif reaction">',
    /*11*/'<img src="img/RIPgifs/giphy(11).gif" alt="Gif reaction">',
    /*12*/'<img src="img/RIPgifs/giphy(12).gif" alt="Gif reaction">',
    /*13*/'<img src="img/RIPgifs/giphy(13).gif" alt="Gif reaction">'
    ];

var death_button = document.getElementById("death_btn_1");
var new_die_button= document.getElementById('new_die_button');

[death_button, new_die_button].forEach(function(element){
    element.addEventListener("click", ()=>{
        let death_index = Math.floor(Math.random()*COD.length);
        let gif_index = Math.floor(Math.random()*gif.length);
        document.getElementById('die_html_output').innerHTML = `<p> ${COD[death_index]} </p> ${gif[gif_index]}`;
        document.getElementById('death_btn_1').style.display = 'none';
        new_die_button.innerHTML = `<button type="button" class="death_btns id="death_btn_2">&nbsp Reincarnate <br> and <br> try again </button>`;
    });
});


