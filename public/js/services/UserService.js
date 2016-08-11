
(function() {
  angular.module('ngBlog')
        .factory('UserService', UserService);

  UserService.$inject = ['$http'];

  function UserService($http){
    var baseUrl = 'https://calm-atoll-49293.herokuapp.com/users/';
    var service = {
      getAllUsers: getAllUsers,
      createUser: createUser,
      getOneUser: getOneUser,
      updateUser: updateUser,
      deleteUser: deleteUser
    };
    return service;

    function getAllUsers(){
      return $http.get(baseUrl);
    }
    function createUser(userObj){
      return $http.post(baseUrl, userObj);
    }
    function getOneUser(userId){
      return $http.get(baseUrl + userId)
    }
    function updateUser(userId, updateInfo){
      return $http.put(baseUrl + userId, updateInfo)
    }
    function deleteUser(userId){
      return $http.delete(baseUrl+ userId);
    }

    }

})();
