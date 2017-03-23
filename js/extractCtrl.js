angular
  .module('appExtract')
  .controller('CtrlExtract', function($scope){

 		$scope.data = {
 			type: 'Depósito',
 			value: 0,
 			color: 'black'
 		};

 		$scope.valueExtract = 0;
 		$scope.list = [];

 		$scope.addItem = function (data) {


 			$scope.list.push(data);

	 			if(data.type == 'Saque'){
	 				$scope.valueExtract -= data.value;
	 				data.color = 'red';
	 			} else {
	 				$scope.valueExtract += data.value;
	 				data.color = 'black';
	 			}
	
	  	
	  	$scope.data = {
		 			type: 'Depósito',
		 			value: 0
		 		};

		};

  	$scope.remoreItemList = function(idx, data) {

  		if(data.type == 'Saque'){
 				$scope.valueExtract += data.value;
 			} else {
 				$scope.valueExtract -= data.value;
 			}

 			$scope.list.splice(idx, 1);

 		}

  });
