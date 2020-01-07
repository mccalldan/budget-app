
// BUDGET CONTROLLER
var budgetController = (function () {

  var Expense = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var Income = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var data = {
    allItems: {
      exp: [],
      inc: []
    },
    totals: {
      exp: 0,
      inc: 0
    }
  }

})();


// UI CONTROLLER
var uIController = (function() {

  var dOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn'
  }

  return {
    getInput: function() {
      return {
        type: document.querySelector(dOMstrings.inputType).value, // will be inc or exp
        description: document.querySelector(dOMstrings.inputDescription).value,
        value: document.querySelector(dOMstrings.inputValue).value
      };
    },

    getDOMstrings: function() {
      return dOMstrings;
    }
  };

})();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, uICtrl) {

  setUpEventListeners = function() {
    var dOM = uICtrl.getDOMstrings();

    document.querySelector(dOM.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {

      if(event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
      }
      });
  };



  var ctrlAddItem = function() {
    // 1. Get field input data
    var input = uICtrl.getInput();
    console.log(input);
    // 2. Add the item to the budget CONTROLLER

    // 3. Add the item to the UI

    // 4. Calculate the budget

    // 5. Display the budge

  }


  return {
    init: function() {
      console.log('App started!');
      setUpEventListeners();

    }
  };


})(budgetController, uIController);


controller.init();
