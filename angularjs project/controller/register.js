
function harika ($scope){

	$scope.FirstName="harika phani";
	$scope.LastName="kodali";

}

app.controller('register',harika);

/*

1st way ------
angular.module('firstmoduleApp', []);
        .controller('register',harika);


        2nd way-----

        app.controller('register',harika);

*/