angular.module('harryApp', []);
angular.module('harryApp').controller('PeopleController', function($http){

  var sendData = {first_name : first_name, last_name : last_name };
  var vm = this;

  vm.handleClick = function() {
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

})
