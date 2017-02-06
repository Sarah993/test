angular.module('shortly.services', [])

// .factory('Links', function ($http) {
//   // Your code here

//   var getAll = function () {
//     return $http({
//       method: 'GET',
//       url: '/api/links'
//     })
//     .then(function (resp) {
//       return resp.data;
//     });
//   };

//   var addOne = function (link) {
//     return $http({
//       method: 'POST',
//       url: '/api/links',
//       data: link
//     });
//   };

//   return {
//     getAll: getAll,
//     addOne: addOne
//   };
//   })
// .factory('Auth', function ($http, $location, $window) {
//   // Don't touch this Auth service!!!
//   // it is responsible for authenticating our user
//   // by exchanging the user's username and password
//   // for a JWT from the server
//   // that JWT is then stored in localStorage as 'com.shortly'
//   // after you signin/signup open devtools, click resources,
//   // then localStorage and you'll see your token from the server
//   var signin = function (user) {
//     return $http({
//       method: 'POST',
//       url: '/api/users/signin',
//       data: user
//     })
//     .then(function (resp) {
//       return resp.data.token;
//     });
//   };

//   var signup = function (user) {
//     return $http({
//       method: 'POST',
//       url: '/api/users/signup',
//       data: user
//     })
//     .then(function (resp) {
//       return resp.data.token;
//     });
//   };

//   var isAuth = function () {
//     return !!$window.localStorage.getItem('com.shortly');
//   };

//   var signout = function () {
//     $window.localStorage.removeItem('com.shortly');
//     $location.path('/signin');
//   };


//   return {
//     signin: signin,
//     signup: signup,
//     isAuth: isAuth,
//     signout: signout
//   };
// });

.factory('Blogs', function ($http) {

  // function to get all blogs
  var getAll = function () {
    return $http({
      method: 'GET',
      url: '/api/blogs'
    })
    .then(function (resp) {
      return resp.data;
    });
  };

  // function to add a single blog
  var addOne = function (blog) {
    console.log(blog)
    return $http({
      method: 'POST',
      url: '/api/blogs',
      data: blog
    })
    .then(function(resp){
      return resp.data
    })
  
  };

  return {
    getAll: getAll,
    addOne: addOne
  };
})
// .factory('Dialogs', function ($http) {
//   // function to show the dialogs
//   var showDialog = function($scope,$mdDialog,$mdMedia,controller,htmlTemplate,event,paramsObj,successCB,failureCB){

//     // variable to make the pop-up get the max size always
//     // in a way to look good for the user
//     var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
    
//     // calling $mdDialog.show to show a pop-up
//     $mdDialog.show({
//       controller: controller, // we pass here the handling of the pop-up to a specific controller
//       templateUrl: htmlTemplate, // we pass here the html template that's gonna be displayed in the pop-up
//       parent: angular.element(document.body), // we pass here the parent window so when we close the pop-up we get redirected back to the parent
//       targetEvent: event,
//       locals: paramsObj, // we pass here parameters if any to the controller
//       clickOutsideToClose:true,
//       fullscreen: useFullScreen
//     })
//     .then(function(answer) {
//       // callback to be executed when we close the pop-up
//       successCB(answer);

//     }, function() {
//       // callback to be executed in case of an error
//       failureCB();
//     });

//     // keep watching the browser's size to make the pop-up responsive
//     $scope.$watch(function() {
//       return $mdMedia('xs') || $mdMedia('sm');
//     }, function(wantsFullScreen) {
//       $scope.customFullscreen = (wantsFullScreen === true);
//     });

//   };

//   return {
//     showDialog:showDialog
//   };

// })
