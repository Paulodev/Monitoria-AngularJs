 angular.module('chatApp', ['firebase'])
 	.factory('Banco', function($firebaseArray) {
 		var ref = new Firebase("https://popping-heat-6782.firebaseio.com/chat");
 		return $firebaseArray(ref);
 	})
	.controller('chatCtrl', function($scope, Banco) {
		$scope.messages = Banco;
		$scope.messages.$loaded();
		$scope.message = '';

		$scope.addMessage = function(message) {
			$scope.messages.$add({
				"message": message
			});
			$scope.message = '';
		};
	});