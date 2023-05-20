angular.module("myApp", []).controller("myController", function ($scope) {
    $scope.change = function () {
        // Обновляем классы абзаца
        $scope.class = {
            red: $scope.checkbox1,
            crossed: $scope.checkbox2
        };
    };
});