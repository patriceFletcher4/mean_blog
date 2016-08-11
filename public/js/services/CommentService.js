
(function(){
  angular.module('ngBlog')
        .factory('CommentService', CommentService);

  CommentService.$inject = ['$http'];
  function CommentService($http){
    var baseUrl = 'https://calm-atoll-49293.herokuapp.com/users/';
    var service = {
      getAllComments: getAllComments,
      createComment:  createComment,
      getCommentsForAPosts: getCommentsForAPosts,
      updateComment:  updateComment,
      deleteComment:  deleteComment
    };
    return service;

    function getAllComments(){
      return $http.get(baseUrl);
    }
    function createComment(commentObj){
      return $http.post(baseUrl, commentObj)
    }
    function getCommentsForAPosts(commentId){
      return $http.get(baseUrl + commentId)
    }
    function updateComment(commentId){
      return $http.put(baseUrl + commentId)
    }
    function deleteComment(commentId){
      return $http.delete(baseUrl + commentId)
    }

    }

})();
