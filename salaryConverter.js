var app = angular.module('salaryApp', []);



app.controller('converter', function($scope) {
  $scope.yearly = 80000;
  $scope.monthly = reCalculate($scope.yearly);
  
  function reCalculate(yearly) {	      
	return yearly /12.00;
}

});



