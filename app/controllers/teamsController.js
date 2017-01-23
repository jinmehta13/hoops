var myApp = angular.module('myApp',[]);

myApp.controller('hoopsController', ['$scope', function($scope) {
  $scope.test = 'Hello world, AngularJS is working as expected';
  $scope.items = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32];
}]);

