let app = angular.module('myApp', []);

app.controller('filterCtrl', function($scope, $http) {
    $scope.records = [];
    $http.get('records.json').success(function (data){
		$scope.records = data;
	});
    
});