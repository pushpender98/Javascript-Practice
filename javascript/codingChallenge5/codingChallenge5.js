var tip = 0;
var bill = 0;
var finalAmount = 0;
var tipArray = [];
var finalAmountArray = [];

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

var johnArray = {
    name : 'John',
    bill : [124, 48, 268, 180],
    tipAmount : function(){
        for(var i = 0; i < this.bill.length; i++){
            tip = tipCalculator(this.bill[i]);
            tipArray.push(tip);
        }
    },
    totalAmount : function(){
        for(var j = 0; j < tipArray.length; j++ ){
            finalAmount =  totalBill(this.bill[j], tipArray[j]);
            finalAmountArray.push(finalAmount);
        }
    }
};
johnArray.tipAmount();
johnArray.totalAmount();

console.log(tipArray);
console.log(finalAmountArray);
