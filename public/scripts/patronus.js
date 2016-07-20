angular.module('harryApp', []);
angular.module('harryApp').controller('PatronusController', function($http){

  var sendData = {};
  sendData.patronus = vm.tempPatronus;  
  var vm = this;

  vm.savePatronus = function() {
    $http.get('/patronus')
    .then(function(response){
      console.log(response);
    });
    $http.post('/patronus', sendData)
    .then(handleSuccess, handleFailure);
  };


  function handleSuccess(response){
    console.log('Success', response);
  }

  function handleFailure(response){
    console.log('Failure', response);
  }

});
