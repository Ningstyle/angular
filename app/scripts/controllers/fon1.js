angular.module("weekworkApp").controller("fon1",function($scope,$http){
	$http({
		url:"http://www.somenote.cn:1510/aut",
		method:"GET"
	}).success(function(e){
		$scope.data = e
	})
})