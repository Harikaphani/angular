function cntrl($scope,userDataFactory) {
        var users = userData.fetchUserInfo();

}

app.controller('cntrl',['$scope','userDataFactory',cntrl]);