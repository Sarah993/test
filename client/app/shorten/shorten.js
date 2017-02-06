// angular.module('shortly.shorten', [])

// .controller('ShortenController', function ($scope, $location, Links) {
//   // Your code here

//   $scope.link = {};
//   $scope.addLink = function () {
//     $scope.loading = true;
//     Links.addOne($scope.link)
//       .then(function () {
//         $scope.loading = false;
//        // $location.path('/');
//        initializeLinks()
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   };



//   $scope.data = {};

//   var initializeLinks = function () {
//     Links.getAll()
//       .then(function (links) {
//         $scope.data.links = links;
//       })
//       .catch(function (error) {
//         console.error(error);
//       });
//   };

//   initializeLinks();
//   });
