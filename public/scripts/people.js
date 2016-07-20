angular.module('harryApp', []);
angular.module('harryApp').controller('PeopleController', function($scope,$http){

  $scope.handleClick = function() {
    $http.get('/people')
    .then(function(response){
      console.log(response);
    });
  };

  $scope.handleClick2 = function() {
    $http.post('/people')
    .then(function(response){
        console.log(response);
    });
  };
});




})
