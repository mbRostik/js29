var app = angular.module('myApp', []);

app.controller('myCtrl', function ($scope) {
    $scope.countries = [
        {
            name: 'Україна',
            cities: [
                { name: 'Київ' },
                { name: 'Харків' },
                { name: 'Львів' }
            ]
        },
        {
            name: 'Польща',
            cities: [
                { name: 'Варшава' },
                { name: 'Краків' },
                { name: 'Гданськ' }
            ]
        },
        {
            name: 'Німеччина',
            cities: [
                { name: 'Берлін' },
                { name: 'Мюнхен' },
                { name: 'Гамбург' }
            ]
        }
    ];

    $scope.updateCities = function () {
        $scope.selectedCity = null; // знімаємо вибір попереднього міста, якщо він був
    }
});
