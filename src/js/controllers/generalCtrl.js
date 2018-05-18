export let generalCtrl = (function (angular) {
    window.app = angular.module('app',['ngMaterial', 'ngMessages', 'ngAnimate', 'ngSanitize']);

    window.app.controller('generalCtrl', ['$scope', '$http', '$compile', function ($scope, $http, $compile) {
       
        $scope.test = 'test';
    }])

})(window.angular);