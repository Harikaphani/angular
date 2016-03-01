function cntrl($scope) {

    $scope.users = [

        {
            firstname: "kodali",
            lastname: "harika",
            d0b: "03/14/92",
            location: "india",
            phone:"9676910717"
        },

        {
            firstname: "satish",
            lastname: "kodali",
            d0b: "12/22/75",
            location: "india",
            phone:"9849406290"
        },

        {
            firstname: "lakshmi",
            lastname: "kodali",
            d0b: "03/10/80",
            location: "india",
            phone:"960346379"
        }
    ]
}

app.controller('cntrl',['$scope',cntrl]);