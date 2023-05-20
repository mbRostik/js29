var app = angular.module('myApp', []);

app.controller('myCtrl', function ($scope) {
    $scope.cities = ['Київ', 'Львів', 'Одеса', 'Харків'];
});
