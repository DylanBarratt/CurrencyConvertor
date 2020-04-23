var userInput, converted;
function usd() {
    userInput = document.getElementById("pounds").value;

    inputNum = parseFloat(userInput);
    if (isNaN(inputNum)) {
        alert("Please Enter a Number");
        return;
    }

    converted = inputNum * 1.611;
    var n = converted.toFixed(2);
    document.getElementById("output").value = "$" + n;
}

function eur() {
    userInput = document.getElementById("pounds").value;

    inputNum = parseFloat(userInput);
    if (isNaN(inputNum)) {
        alert("Please Enter a Number");
        return;
    }

    converted = inputNum * 1.461;
    var n = converted.toFixed(2);
    document.getElementById("output").value = "€" + n;
}

function asd() {
    userInput = document.getElementById("pounds").value;

    inputNum = parseFloat(userInput);
    if (isNaN(inputNum)) {
        alert("Please Enter a Number");
        return;
    }

    converted = inputNum * 2.711;
    var n = converted.toFixed(2);
    document.getElementById("output").value = "$" + n;
}
