
(function(){
  angular.module('ngBlog')
        .controller('SimpleController', SimpleController);

  SimpleController.$inject = ['$scope'];

  function SimpleController($scope){
    $scope.message = 'Hey! Angular Works!';
  }
})();
