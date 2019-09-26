var tip = 0;
var bill = 0;
var finalAmount = 0;

function tipCalculator(bill) {
    if(bill < 50){
        tip = 0.2 * bill;
    }
    else if(bill > 50 && bill < 200 ) {
        tip = 0.15 * bill;
    }
    else {
        tip = 0.1 * bill;
    }
    return tip;
}

function totalBill(bill, tip) {
    finalAmount = bill + tip;
    return finalAmount;
}

var firstTip = tipCalculator(124);
var secondTip = tipCalculator(48);
var thirdTip = tipCalculator(268);

var finalFirstAmount = totalBill(124, firstTip);
var finalSecondAmount = totalBill(48, secondTip);
var finalThirdAmount = totalBill(268, thirdTip);

var tipArray = {firstTip, secondTip, thirdTip};
var finalAmountArray = {finalFirstAmount, finalSecondAmount, finalThirdAmount};

console.log(tipArray);
console.log(finalAmountArray);