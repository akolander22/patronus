angular.module('harryApp', []);
angular.module('harryApp').controller('PeopleController', function($http){

  var vm = this
  vm.savePeople = function() {
    var sendData = {};
    sendData.task = vm.tempPeople;

    $http.get('/people', sendData)
    .then(function(response){
      console.log(response);
    });
    $http.post('/people', sendData)
    .then(function(response){
        console.log(response);
    });
  };
})
