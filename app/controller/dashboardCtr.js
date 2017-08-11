(function () {
	myApp.controller('dashboardCtr', ['$scope', function($scope){
		$scope.message = 'test';
		$scope.showhang = false;
		$scope.arr = [{name:'sa'},{name:'haha'},{name:'haha'},{name:'sa'},{name:'haha'},{name:'haha'},{name:'sa'},{name:'haha'},{name:'haha'},{name:'sa'},{name:'haha'},{name:'haha'},{name:'haha'}];
		$scope.add = function(){
			$scope.arr.push({name:'fuck'});
		}
		$scope.show = function(){
			$scope.showhang = ! $scope.showhang;
		}
	}]);
})();