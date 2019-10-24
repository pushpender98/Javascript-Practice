/*
Data encaplucation allows us to hide implementation details of a specific module from the outside scope so that we only expose
 a public interface which is something called a API.
*/

var budgetController = (function(){
    // Only Budget Part
    

})();

var UIController = (function() {
    // Only UI Data Works
});

var controller = (function(budgetCtrl, UICtrl){



})(budgetController, UIController);