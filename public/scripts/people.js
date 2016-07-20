angular.module('harryApp').controller('PeopleController', function($http){

  var vm = this;

  vm.savePeople = function() {
    var sendData = {};
    sendData.first_name = vm.tempFirstName;
    sendData.last_name = vm.tempLastName;
    $http.post('/people', sendData)
    .then(handleSuccess, handleFailure);
    $http.get('/people')
    .then(function(response){
      vm.persons = response.data;

    });
  };

  function handleSuccess(response){
    console.log('Success', response);
  }

  function handleFailure(response){
    console.log('Failure', response);
  }

});
