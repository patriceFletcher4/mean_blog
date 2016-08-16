
(function() {
  angular.module('ngBlog')
        .config(RouterConfig);

  RouterConfig.$inject = ['$routeProvider'];

  function RouterConfig($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'html/views/home.html',
        controller: 'HomeController'
      })
      .when('/signin', {
        templateUrl: 'html/views/signin.html',
        controller: 'SigninController'
      })
      .when('/signup', {
        templateUrl: 'html/views/signup.html',
        controller: 'SignupController'
      })
      .when('/profile', {
        templateUrl: 'html/views/profile.html',
        controller: 'ProfileController'
      })
        .when('/post/:postId', {
        templateUrl: 'html/views/post.html',
        controller: 'PostController'
      })
        .when('/create', {
        templateUrl: 'html/views/post-create.html',
        controller: 'PostController'
      })
        .when('/edit/:postId', {
        templateUrl: 'html/views/post-edit.html',
        controller: 'PostController'
      })
       .otherwise({
       redirectTo: '/'
      });
    }
  })();
