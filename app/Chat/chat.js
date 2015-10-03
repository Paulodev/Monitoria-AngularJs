 angular.module('chatApp', ['firebase'])
 	.factory('Banco', function($firebaseArray) {
 		var ref = new Firebase("https://popping-heat-6782.firebaseio.com/chat");
 		return $firebaseArray(ref);
 	})
	.controller('chatCtrl', function($scope, Banco) {
		$scope.messages = Banco;
		$scope.messages.$loaded();
		$scope.message = '';
		$scope.name = '';

		$scope.addMessage = function(message, name) {
			$scope.messages.$add({
				"message": message,
				"name": name
			});
			$scope.message = '';
		};

	});