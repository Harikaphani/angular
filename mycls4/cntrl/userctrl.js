/**
 * Created by harikaphani on 2/26/2016.
 */

function userctrl($scope){
    $scope.users = [
        {firstname:"kodali",
        lastname:"harika",
        d0b:"03/14/92",
        location:"india"
        },
        {firstname:"satish",
            lastname:"kodali",
            d0b:"12/22/75",
            location:"india"
        },
        {firstname:"lakshmi",
            lastname:"kodali",
            d0b:"03/10/80",
            location:"india"
        }
    ];
}




angular.module('twitterApp')
    .controller('userctrl',['$scope',userctrl]);