angular.module('harryApp', []);
angular.module('harryApp').controller('PatronusController', function($http){

  var vm = this;

  vm.savePatronus = function() {
    var sendData = {};
    sendData.patronus = vm.tempPatronus;
    $http.post('/patronus', sendData)
    .then(handleSuccess, handleFailure);

  };


  function handleSuccess(response){
    console.log('Success', response);
    $http.get('/patronus')
    .then(function(response){
      vm.patronuses = response.data;
      console.log(response.data);

    });
  }

  function handleFailure(response){
    console.log('Failure', response);
  }

});
