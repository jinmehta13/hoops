var myApp = angular.module('myApp',[]);

myApp.controller('hoopsController', ['$scope', function($scope) {
  $scope.test = 'Hello world, AngularJS is working as expected';
}]);

