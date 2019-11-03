/*
Data encaplucation allows us to hide implementation details of a specific module from the outside scope so that we only expose
 a public interface which is something called a API.
*/

// Budget Controller
var budgetController = (function(){
    
    var Expense = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };
    
    var Income = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    }

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };

    return {
        addItem: function(type, des, val){
            var newItem, ID;

            // create new ID
            if(data.allItems[type].length > 0)
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            else
                ID = 0;

            // Create new Items based on 'inc' or 'exp' type
            if(type === 'exp'){
                newItem = new Expense(ID, des, val);
            }
            else{
                newItem = new Income(ID, des, val);
            }

            // Push it into our data structure
            data.allItems[type].push(newItem);

            // return the new element
            return newItem;
        },

        testing : function(){
            console.log(data);
        }

    };

})();

// UI Controller
var UIController = (function() {
    
    var DOMstrings = {
        inputType : '.add__type',
        inputDescription : '.add__description',
        inputValue : '.add__value',
        inputBtn : '.add__btn'
    }

    return{
        getInput : function(){
            return {
                type : document.querySelector(DOMstrings.inputType).value,
                description : document.querySelector(DOMstrings.inputDescription).value,
                value : document.querySelector(DOMstrings.inputValue).value
            };
        },

        getDOMstrings : function(){
           return DOMstrings;
        }
    };
})();

// Global App Controller
var controller = (function(budgetCtrl, UICtrl){
    
    var DOM = UICtrl.getDOMstrings();

    // All Event Listener at one  place
    var setupEventListener = function(){
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
        document.addEventListener('keypress', function(event){
            if(event.keyCode === 13 || event.which === 13){
                ctrlAddItem();
            }    
        });
    }

    var ctrlAddItem = function(){  
        var input, newItem; 
        // 1. Get the field Input data
        input = UICtrl.getInput();

        // 2. Add the item to the budget Controller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);
        budgetCtrl.testing();
        // 3. Add the item to the UI
    
        // 4. Calcuate the budget
    
        // 5. Display the budget on the UI

    }

    return {
        init : function(){
            setupEventListener();
        }
    }

})(budgetController, UIController);

controller.init();