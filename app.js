angular.module('myApp', [])
    .controller('myController', function ($scope) {
        $scope.isChecked = false;
        $scope.hideOrShowParagraph = function () {
            // якщо чекбокс відзначений, то показуємо абзац, інакше - ховаємо
            $scope.isParagraphHidden = !$scope.isChecked;
        }
    });