function registercntrl($scope){

    $scope.register =  {
        lastname:"",
        dob:"",
        country:"",
        city:"",
        state:"",
        zip:"",
        phonenumber:""
    };
    $scope.registerUser=function(){
        console.log($scope.register);
        console.log($scope.selectedLocation);
    };
    $scope.locations=[
        {
            state:"ap",
            city:"hyd"
        },
        {
            state:"tn",
            city:"chennai"
        },
        {
            state:"rajastan",
            city:"kochi"
        },
        {
            state:"up",
            city:"mum"
        }
]
    $scope.dropdownChange=function(){
        console.log($scope.selectedLocation);
    }
}

angular.module('twitterApp')
    .controller('myCtrl',['$scope',registercntrl]);