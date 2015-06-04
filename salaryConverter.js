var app = angular.module('salaryApp', []);



app.controller('converter', function($scope) {
  $scope.yearly = 80000;
  //console.log("log1");
  $scope.monthly = $scope.yearly / 12;
  $scope.biweekly = $scope.monthly / 2;
  $scope.weekly = $scope.monthly / 4;
 //console.log("log2");
  
  $scope.reCalculate = function(){
		console.log("function was run");
		$scope.monthly = $scope.yearly /12.00;
		$scope.biweekly = $scope.monthly / 2;
		$scope.weekly = $scope.monthly / 4;
  }

});



