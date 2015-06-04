var app = angular.module('salaryApp', []);



app.controller('converter', function($scope) {
  $scope.yearly = 80000;
  $scope.monthly = $scope.yearly /12.00;
  


});

function reCalculate(yearly) {	      
	$scope.monthly = yearly /12.00;
}

