let app = angular.module('myApp', []);

app.controller('orderCtrl', function($scope, $http) {
    $scope.list = [];
    $http.get('list.json').success(function (data){
		$scope.list = data;
	});
    $scope.someFunc= function(item, event) {
        event.stopPropagation();
        item.active = !item.active;
    }

    $scope.total = function() {
        let total = 0;
        for(let i = 0; i < $scope.list.length; i++) {
            if($scope.list[i].active) {
             total += $scope.list[i].price;
            }            
        }
        return total;
    }

});