// constant declarations
const dollarBill = document.getElementById("input-bill");
const percBtns = document.querySelectorAll(".perc");
const numPpl = document.getElementById("input-ppl");
const tipCustom = document.getElementById("custom-percentage");
const tipResult = document.getElementById("tip-pperson");
const totalResult = document.getElementById("total-pperson");
const resetBtn = document.getElementById("reset");

// console.log(percBtns);

dollarBill.addEventListener("input", setBillValue);
numPpl.addEventListener("input", setPplValue);
numPpl.addEventListener("input", errorMsg);
tipCustom.addEventListener("input", setTipCustomValue);
resetBtn.addEventListener("click", reset);

// prevent input of non-numerical in bill except ,.
document.getElementById("input-bill").addEventListener("keypress", function (evt) {
   if (evt.which < 44 || evt.which === 45 || evt.which > 57)
    {
        evt.preventDefault();
    }
});

// prevent input of non numerical in people
document.getElementById("input-ppl").addEventListener("keypress", function (evt) {
    if (evt.which < 48 || evt.which > 57)
     {
         evt.preventDefault();
     }
 });


let billValue = 10.00 //default value
let tipValue = 0.15 //default
let peopleValue = 2; // default


function validateInt(s) {
    var rgx = /^[0-9]*$/;
    return s.match(rgx);
}


function setBillValue() {
    if (dollarBill.value.includes(",")) {
        dollarBill.value = dollarBill.value.replace(",", ".")        
    }
    billValue = parseFloat(dollarBill.value)

    calculateTip();
}

// number of people
function setPplValue() {
    if (!validateInt(numPpl.value)) {
        numPpl.value = numPpl.value.substring(0, numPpl.value.length-1)
    }

    peopleValue = parseFloat(numPpl.value);

    calculateTip();
};

// if 0 people: show error
function errorMsg() {
    if (peopleValue <= 0) {
        document.getElementById("error-msg").innerHTML = "Can't be zero";
        document.getElementById("input-ppl").style.border = "2px solid indianred";
    } else {
        document.getElementById("error-msg").innerHTML = "";
        document.getElementById("input-ppl").style.border = "2px solid transparent";
    }
};


// click active tip-percentages
function handleClick(event) {
    percBtns.forEach(btn => {
        btn.classList.remove("perc-active");
        
        if(event.target.innerHTML == btn.innerHTML) {
            btn.classList.add("perc-active")
            tipValue = parseFloat(btn.innerHTML)/100;
        }
        calculateTip();
    })

    tipCustom.value = "";

    calculateTip();
};

// set custom tip
function setTipCustomValue() {
    if (!validateInt(tipCustom.value)) {
        tipCustom.value = tipCustom.value.substring(0, tipCustom.value.length-1)
    }
    tipValue = parseFloat(tipCustom.value/100);
    
    calculateTip();
    // console.log(tipValue);
}


// calculate tip amount
function calculateTip() {
    if (peopleValue >= 1) {
        let tipAmount = billValue * tipValue / peopleValue
        let total = billValue * (tipValue + 1) / peopleValue
        tipResult.innerHTML =  "€" + tipAmount.toFixed(2);
        totalResult.innerHTML = "€" + total.toFixed(2);
    }
}

// reset
function reset() {
    dollarBill.value = "10.00"
    setBillValue();

    percBtns[2].click;
    console.log(percBtns[2]);

    numPpl.value = "2";
    setPplValue();

    calculateTip();
}