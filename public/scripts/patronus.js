angular.module('harryApp', []);
angular.module('harryApp').controller('PatronusController', function($scope,$http){

  $scope.handleClick = function() {
    $http.get('/patronus')
    .then(function(response){
      console.log(response);
    });
  };

  $scope.handleClick2 = function() {
    $http.post('/patronus')
    .then(function(response){
        console.log(response);
    });
  };

});
