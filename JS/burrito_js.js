
//BURRITO
/*take burrito user input and write over speech bubble */


var speech_output = document.getElementById("speech_output");
var burrito_btn = document.getElementById("burrito_btn");
var speech_input_enter_key = document.getElementById("speech_input");

function submitOnClickOrEnter(e){
    if(e.type === "click" || e.keyCode === 13){
        var speech_input_value = document.getElementById("speech_input").value;
        speech_output.innerHTML =  speech_input_value;
    }
};

burrito_btn.addEventListener("click", submitOnClickOrEnter);
speech_input_enter_key.addEventListener("keyup", submitOnClickOrEnter);

while (screen.minWidth) > 425px {
    document.getElementById("home_in_navbar").innerHTML = `<br>Home<br>`;
}