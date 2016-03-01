function myCtrl ($scope){
	$scope.aka = {

LastName: "kodali"

};

$scope.registeruser= function(){

	console.log($scope.aka);
}
}

angular.module('moduleApp')
.controller('myCtrl',
['$scope',myCtrl]);


/* 
var app = angular.module("moduleApp", []);
app.controller("myCtrl", function($scope) {
    $scope.aka = {

LastName: "Bodapally"

};

$scope.registeruser= function(){

	console.log($scope.aka);
}
}

);

*/











