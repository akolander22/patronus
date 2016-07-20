angular.module('harryApp', []);
angular.module('harryApp').controller('PatronusController', function($http){

  var vm = this;

  vm.savePatronus = function() {
    var sendData = {};
    sendData.patronus = vm.tempPatronus;
    $http.post('/patronus', sendData)
    .then(handleSuccess, handleFailure);
<<<<<<< HEAD
=======

>>>>>>> e0c1ac91536eb937021d89cd3e9121e2afacde8c
  };


  function handleSuccess(response){
<<<<<<< HEAD
    $http.get('/patronus')
    .then(function(response){
      vm.patronuses = response.data;
=======
    console.log('Success', response);
    $http.get('/patronus')
    .then(function(response){
      vm.patronuses = response.data;
      console.log(response.data);

>>>>>>> e0c1ac91536eb937021d89cd3e9121e2afacde8c
    });
  }

  function handleFailure(response){
    console.log('Failure', response);
  }

});
