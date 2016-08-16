
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
      .when('/post', {
        templateUrl: 'html/views/post.html'
        controller: 'PostController'
      })
      .when('/profile', {
        templateUrl: 'html/views/profile.html',
        controller: 'ProfileController'
      })
      
