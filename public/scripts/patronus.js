angular.module('harryApp', []);
angular.module('harryApp').controller('PatronusController', function($http){
  var vm = this
  vm.savePatronus = function() {
    var sendData = {};
    sendData.task = vm.tempPatronus;

    $http.get('/patronus', sendData)
    .then(function(response){
      console.log(response);
    });
    $http.post('/patronus', sendData)
    .then(function(response){
        console.log(response);
    });
  };

});
