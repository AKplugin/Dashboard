var myApp = angular.module("myApp", ['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider.
		when("/order", {
			"templateUrl":"order.html",
			"controller": "orderController"
		})
		.when("/dashboard", {
			"templateUrl":"dashboard.html",
			"controller": "dashBoardController"
		})
		.when("/option", {
			"templateUrl":"option.html",
			"controller": "optionController"
		})
		.otherwise({
			redirectTo:"/option"
		})
});

myApp.controller("dashBoardController", function($scope,$http){
	// $http.get("http://ec2-52-33-198-30.us-west-2.compute.amazonaws.com:3401")
 //    .then(function(response) {
 //        $scope.myWelcome = response;
 //    });
});

myApp.controller("orderController", function($scope, $filter){
	$scope.orders = [{
		"orderno":"1",
		"name":"abc",
		"address":"address1",
		"orders":[{
			"name":"Biriyani",
			"price": "120",
			"Quantity":"2"
		},{
			"name":"Mutton Biriyani",
			"price": "150",
			"Quantity":"2"
		}]
	},{
		"orderno":"2",
		"name":"abc2",
		"address":"address1",
		"orders":[{
			"name":"Biriyani",
			"price": "120",
			"Quantity":"2"
		}]
	},{
		"orderno":"3",
		"name":"abc3",
		"address":"address1",
		"orders":[{
			"name":"Biriyani",
			"price": "120",
			"Quantity":"2"
		}]
	},{
		"orderno":"4",
		"name":"abc4",
		"address":"address1",
		"orders":[{
			"name":"Biriyani",
			"price": "120",
			"Quantity":"2"
		}]
	},{
		"orderno":"5",
		"name":"abc5",
		"address":"address1",
		"orders":[{
			"name":"Biriyani",
			"price": "120",
			"Quantity":"2"
		}]
	},{
		"orderno":"6",
		"name":"abc6",
		"address":"address1",
		"orders":[{
			"name":"Biriyani",
			"price": "120",
			"Quantity":"2"
		}]
	},{
		"orderno":"7",
		"name":"abc7",
		"address":"address1",
		"orders":[{
			"name":"Biriyani",
			"price": "120",
			"Quantity":"2"
		}]
	}];
	$scope.messages = '';
	$scope.getOrderId = function(id){
		$scope.messages= $filter('filter')($scope.orders, {orderno:id})[0];
	}
});

myApp.controller("optionController", function($scope,$http){
	$http.get("http://ec2-52-33-198-30.us-west-2.compute.amazonaws.com:3401/menu")
    .then(function(response) {
        $scope.biriyani = response.data.Arabian;
    });
	$scope.codes = [{
		"limit":300,
		"promocode": "ST50",
		"discount": 50
	},{
		"limit":250,
		"promocode": "THIRD60",
		"discount": 100
	}];
});