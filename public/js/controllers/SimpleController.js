
(function(){
  angular.module('ngBlog')
        .controller('SimpleController', SimpleController);

  SimpleController.$inject = ['$scope', 'UserService'];

  function SimpleController($scope, UserService){
    $scope.message = 'Hey! Angular Works!';

    UserService.getAllUsers()
              .then(function(response){
                console.log(response);
              });
    var userObj = {
      firstName: 'Lil',
      lastName: 'Jon',
      age: 41,
      email: 'lil@jon434335edasd65.com'
    };
    UserService.createUser(userObj)
              .then(function(response){
                console.log(response);
              });
    var newUser = {
      firstName: "jane",
      lastName: 'fonda',
      age: 29,
    };
    var userId = '57aa6b57be3744110070206d';
    UserService.updateUser(userId, newUser)
          .then(function(response){
            console.log(response);
          });
    var userId = '57aa6b57be3744110070206d';
    UserService.deleteUser(userId)
          .then(function(response){
            console.log(response);
          });

  }
})();
