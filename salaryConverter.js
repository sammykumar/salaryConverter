var app = angular.module('salaryApp', []);



app.controller('converter', function($scope) {
  $scope.yearly = 80000;
  $scope.monthly = $scope.yearly /12.00;

});

scope.$watch('$scope.yearly', function() {
       alert('hey, myVar has changed!');
   });

function reCalculate() {	      
	 alert('hey, myVar has changed!');
	// $scope.monthly = $scope.yearly /12.00;
}