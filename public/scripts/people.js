angular.module('harryApp', []);
angular.module('harryApp').controller('PeopleController', function($http){

  var sendData = {};
  sendData.first_name = vm.tempFirstName;
  sendData.last_name = vm.tempLastName;
  var vm = this;

  vm.savePeople = function() {
    $http.get('/people')
    .then(function(response){
      console.log(response);
    });
    $http.post('/people', sendData)
    .then(handleSuccess, handleFailure);
  };

  function handleSuccess(response){
    console.log('Success', response);
  }

  function handleFailure(response){
    console.log('Failure', response);
  }

});
