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
        this.percentage = -1;
    };

    Expense.prototype.calcPercentage = function(totalIncome){
        if(totalIncome > 0){
            this.percentage = Math.round ((this.value / totalIncome) * 100);
        }
        else {
            this.percentage = -1;
        }
    };

    Expense.prototype.getPercentage = function() {
        return this.percentage;
    }
    
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
        },
        budget : 0,
        percentage: -1
    };

    var calcuateTotal = function(type){
        var sum = 0;

        data.allItems[type].forEach(function(cur){
            sum += cur.value;
        });

        data.totals[type] = sum;
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

        deleteIem : function(type, id) {
            var ids, index;
            ids =  data.allItems[type].map(function(current){
                return current.id;
            });

            index = ids.indexOf(id);

            if(index !== -1){
                data.allItems[type].splice(index, 1);   // Splice will only remove the element of index and no of element return after it in an array
            }
        },

        calcuateBudget: function(){

            // Calcuate the Total Income and expenses
            calcuateTotal('exp');
            calcuateTotal('inc');

            // Calcuate the budget: income - expenses
            data.budget = data.totals.inc - data.totals.exp;

            // Calcuate the percentag of income that we spent
            if(data.totals.inc > 0){
                data.percentage = Math.round((data.totals.exp / data.totals.inc) *100);
            }
            else{
                data.percentage = -1;
            }

        },

        calcuatePercentages: function(){
            data.allItems.exp.forEach(function(cur){
                cur.calcPercentage(data.totals.inc);
            });
        },

        getPercentages: function(){
            var allPer = data.allItems.exp.map(function(cur){
                return cur.getPercentage();
            });
            return allPer;
        },

        getBudget: function(){
            return{
                budget: data.budget, 
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            }
        }
    };

})();

// UI Controller
var UIController = (function() {
    
    var DOMstrings = {
        inputType : '.add__type',
        inputDescription : '.add__description',
        inputValue : '.add__value',
        inputBtn : '.add__btn',
        incomeContainer: '.income__list',
        expenseContainer: '.expenses__list',
        budgetlabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container',
        expensesPerclabel:'.item__percentage',
        dateLabel: '.budget__title--month'
    }

    var formatNumber = function(num, type){
        /*
        +, - before or after the number
        exactly 2 decemial points
        comma separating the thousands
        */
        var numSplit, int, dec;

        num = Math.abs(num);
        num = num.toFixed(2);
        
        numSplit= num.split('.');
        int = numSplit[0];
        
        if(int.length > 3){
            int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3);
        }
        dec = numSplit[1];

        return (type === 'exp' ? sign = '-' : sign = '+')+ int + '.' + dec;
    };

    var nodeListForEach = function(list, callback){
        for(var i = 0; i < list.length; i++){
            callback(list[i], i);
        }
    };

    return{
        getInput : function(){
            return {
                type : document.querySelector(DOMstrings.inputType).value,
                description : document.querySelector(DOMstrings.inputDescription).value,
                value : parseFloat(document.querySelector(DOMstrings.inputValue).value)
            };
        },

        addListItems: function(obj, type){
            var html, newHtml, element;
            // Create html string with placeholder text

            if(type == 'inc'){
                element = DOMstrings.incomeContainer;

                html =  '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div>';

            }
            else if (type == 'exp'){
                element = DOMstrings.expenseContainer;
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';  
                
            }

            // Replace the placeholder text with some actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', formatNumber(obj.value, type));

            // Insert the HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml)

        },

        deleteListItem: function(selectorID){
            var el;

            el = document.getElementById(selectorID);
            el.parentNode.removeChild(el);
        },

        clearFields: function(){
            var fields, fieldsArr;
            fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);

            fieldsArr = Array.prototype.slice.call(fields);

            fieldsArr.forEach(function(current, index, array) {
                current.value = "";
            });
            fieldsArr[0].focus();
        },

        displayBudget: function(obj){
            var type;

            obj.budget > 0 ? type= 'inc' : type = 'exp';

            document.querySelector(DOMstrings.budgetlabel).textContent = formatNumber(obj.budget, type);
            document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber(obj.totalInc, 'inc');
            document.querySelector(DOMstrings.expensesLabel).textContent = formatNumber(obj.totalExp, 'exp');
            
            if(obj.percentage >= 0){
                document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%';
            }
            else{
                document.querySelector(DOMstrings.percentageLabel).textContent = '---';
            }
        },

        displayPercentages : function(percentage){
            var fields;

            fields = document.querySelectorAll(DOMstrings.expensesPerclabel);

            nodeListForEach(fields, function(current, index){
                if(percentage[index] > 0)
                    current.textContent = percentage[index] + '%';
                else 
                    current.textContent = '---';
            });
        },

        displayMonth: function(){
            var now, year, month, months;
            months = ['januarary', 'Feb', 'mar', 'april', 'may', 'june', 'july', 'aug', 'sept', 'oct', 'nov', 'dec' ]
            now = new Date();
            year = now.getFullYear();
            month = months[now.getMonth()];
            document.querySelector(DOMstrings.dateLabel).textContent = month + ' ' + year;
        },

        chnageType: function(){
            var fields = document.querySelectorAll(
                DOMstrings.inputType + ',' + 
                DOMstrings.inputDescription + ',' +
                DOMstrings.inputValue
            );

            nodeListForEach(fields, function(cur){
                cur.classList.toggle('red-focus');
            });

            document.querySelector(DOMstrings.inputBtn).classList.toggle('red');
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

        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);
   
        document.querySelector(DOM.inputType).addEventListener('change', UICtrl.chnageType);
    };

    var updateBudget = function(){
       
        // 1. Calcuate the budget
        budgetController.calcuateBudget();

        // 2. Return the Budget
        var budget = budgetController.getBudget();

        // 3. Display the budget on the UI
        UICtrl.displayBudget(budget);
        
    };

    var updatePercentages = function(){
        // 1. Calcuate the percentages
        budgetCtrl.calcuatePercentages();

        // 2. Read from the budget Controller
        var percentages = budgetCtrl.getPercentages();

        // 3. Update the UI with the new percentages
        UICtrl.displayPercentages(percentages);

    };

    var ctrlAddItem = function(){  
        var input, newItem; 
        // 1. Get the field Input data
        input = UICtrl.getInput();

        if(input.description != "" && !isNaN(input.value) && input.value > 0){
            
            // 2. Add the item to the budget Controller
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);
            
            // 3. Add the item to the UI
            UICtrl.addListItems(newItem, input.type);
    
            // 4. Clear the fields
            UICtrl.clearFields();
    
            // 5. Calcuate and update budget
            updateBudget();

            // 6. Calcuate and update the percentages
            updatePercentages();
        }
    };

    var ctrlDeleteItem = function(event){
        var itemID, splitID, type, ID;
        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;

        if(itemID) {
            splitID = itemID.split('-');
            type = splitID[0];
            ID = parseInt(splitID[1]);

            // 1. Delete the item from the data structure
            budgetCtrl.deleteIem(type, ID);

            // 2. Delete the item from the UI
            UICtrl.deleteListItem(itemID);

            // 3. Update and show the new Budget
            updateBudget();

            // 4. Calcuate and update the percentages
            updatePercentages();

        }
    };

    return {
        init : function(){
            setupEventListener();
          
            // To display the Month and year
            UICtrl.displayMonth();

            UICtrl.displayBudget({
                budget: 0, 
                totalInc: 0,
                totalExp: 0,
                percentage: -1,
            });
        }
    };

})(budgetController, UIController);

controller.init();