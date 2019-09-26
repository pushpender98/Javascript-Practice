var now     = new Date(); 
var hour    = now.getHours();
var minute  = now.getMinutes();
var second  = now.getSeconds(); 

var getCurrentAmPm = hour >= 12 ? 'PM' : 'AM';

var dayString = {
    0 : 'Sunday',
    1 : 'Monday',
    2 : 'Tuesday',
    3 : 'Wednesday',
    4 : 'Thrusday',
    5 : 'Friday',
    6 : 'Saturday'
}
var day = now.getDay();

console.log('Today is : ' + dayString[day]);

console.log('Current Time is : '+ hour + ' ' + getCurrentAmPm + ' : ' + minute + ' : ' + second );
