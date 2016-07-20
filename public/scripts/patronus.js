angular.module('harryApp', []);
angular.module('harryApp').controller('PatronusController', function($http){

  var vm = this;
 
  vm.savePatronus = function() {
    var sendData = {};
    sendData.patronus = vm.tempPatronus;
    $http.post('/patronus', sendData)
    .then(handleSuccess, handleFailure);
    $http.get('/patronus')
    .then(function(response){
      console.log(response);
    });
  };


  function handleSuccess(response){
    console.log('Success', response);
  }

  function handleFailure(response){
    console.log('Failure', response);
  }

});
