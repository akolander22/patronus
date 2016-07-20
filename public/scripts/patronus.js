angular.module('harryApp', []);
angular.module('harryApp').controller('PatronusController', function($http){

  var sendData = {};
  var vm = this;

  vm.handleClick = function() {
    $http.get('/patronus')
    .then(function(response){
      console.log(response);
    });
    $http.post('/patronus', sendData).
    .then(handleSuccess, handleFailure);
  };





  function handleSuccess(response){
    console.log('Success', response);
  }

  function handleFailure(response){
    console.log('Failure', response);
  }

});
