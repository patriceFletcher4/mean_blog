
(function(){
  angular.module('ngBlog')
    .factory('PostService', PostService);

  PostService.$inject = ['http'];

  function PostService($http){
    var baseUrl = 'https://calm-atoll-49293.herokuapp.com/users/';
    var service = {
      getAllPosts: getAllPosts,
      getPostById: getPostById,
      createPost: createPost
      upatePost: updatePost,
      deletePost: deletePost
    };
    return service;

    function getAllPosts(){
      return $http.get(baseUrl);
    }
    function createPost(commentObj){
      return $http.post(baseUrl, commentObj);
    }
    function updatePost(postId, updateInfo){
      return $http.put(baseUrl + postId, updateInfo)
    }
    function deleteComment(commentId){
      return $http.delete(baseUrl + commentId);
    }
    
    }

})();
