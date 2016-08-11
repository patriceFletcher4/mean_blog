
(function(){
  angular.module('ngBlog')
        .controller('SimpleController', SimpleController);

  SimpleController.$inject = ['$scope', 'UserService', 'PostService', 'CommentService'];

  function SimpleController($scope, UserService, PostService, CommentService){
    $scope.message = 'Hey! Angular Works!';

    UserService.getAllUsers()
              .then(function(response){
                console.log(response);
              });
    var userObj = {
      firstName: 'Lil',
      lastName: 'Jon',
      age: 41,
      email: 'lil@jon434335edafsd65.com'
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

      PostService.getAllPosts()
        .then(function(response){
          console.log(response);
      });
    var postObj = {
      title: "Please work",
      body: "You will work",
    }

    PostService.createPost(postObj)
        .then(function(response){
          console.log(response);
        });

      PostService.updatePost(postId, 'help why you no work')
          .then(function(response){
            console.log(response);
          });
      }

    PostService.deletePost(postId)
        .then(function(response){
          console.log(response);
        });

    CommentService.createComment(commentObj)
        .then(function(response){
          console.log(response);
        });
        var commentObj = {
          body: "I want something to work",
        }

    CommentService.updateComment(commentId, updateInfo)
        .then(function(response){
          console.log(response);
        });


  CommentService.deleteComment(commentId)
      .then(function(response){
        console.log(response);
      });


})();
