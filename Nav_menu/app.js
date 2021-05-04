let app = angular.module('myApp', []);
app.controller('navCtrl', function($scope) {
    $scope.chColor = function(a) {
        $scope.index = a;
        $scope.tab = a;
    }
});