const display=document.getElementById('display');

function ToDisplay(input){
    display.value += input;
}

function ClearDisplay(){
    display.value="";
}

function Calculate(){
    try {
        let result = eval(display.value);
        if (typeof result === "number" && !Number.isInteger(result)) {
            let decimalPart = result.toString().split('.')[1];
            if (decimalPart && decimalPart.length > 9) {
                result = result.toFixed(9);
            }
        }
        display.value = result;
    } catch (error) {
        display.value = "error";
    }
}


function Delete(){
    display.value=display.value.slice(0,-1)
}
