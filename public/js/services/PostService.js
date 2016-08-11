
(function(){
  angular.module('ngBlog')
    .factory('PostService', PostService);

  PostService.$inject = ['$http'];

  function PostService($http){
    var baseUrl = 'https://calm-atoll-49293.herokuapp.com/users/';
    var service = {
      getAllPosts: getAllPosts,
      getPostById: getPostById,
      createPost: createPost,
      updatePost: updatePost,
      deletePost: deletePost
    };
    return service;

    function getAllPosts(){
      return $http.get(baseUrl);
    }
    function createPost(postObj){
      return $http.post(baseUrl, postObj);
    }
    function updatePost(postId, updateInfo){
      return $http.put(baseUrl + postId, updateInfo);
    }
    function deletePost(postId){
      return $http.delete(baseUrl + postId);
    }
    function getPostById(postId){
      return $http.get(baseUrl + postId)
    }

  }

})();
