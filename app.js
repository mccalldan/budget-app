var budgetController = (function () {

  var x = 23;

  var add = function(a) {
    return x + a;
  }

  return {
      publicTest: function(b) {
        return add(b);
      }
  }

})();


var uIController = (function() {



})();


var controller = (function(budgetCtrl, UICtrl) {

var z = budgetCtrl.publicTest(5);

  return {
      budgetTest: function() {
        console.log(z);
      }
  }

})(budgetController, uIController);
