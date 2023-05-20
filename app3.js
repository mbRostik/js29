angular.module('myApp', [])
    .controller('myController', function ($scope) {
        $scope.isParagraphVisible = false;
        $scope.toggleParagraph = function () {
            $scope.isParagraphVisible = !$scope.isParagraphVisible;
        };
    });
