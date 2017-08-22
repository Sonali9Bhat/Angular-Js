angular.module("app").service('CalcService', function(){
   this.square1 = function(a) {
      return a*a; 
   }
this.cube1 = function(a) {
       return a*a*a ;
  }
  
  this.factorial1 = function factorial1(num) {
    // If the number is less than 0, reject it.
    if (num < 0) {
        return -1;
    }
    // If the number is 0, its factorial is 1.
    else if (num == 0) {
        return 1;
    }
    // Otherwise, call this recursive procedure again.
    else {
        return (num * factorial1(num - 1));
    }
}


});


angular.module("app").controller('Ass2Controller', function($scope, CalcService) {
  
 // $scope.result = CalcService.square($scope.number);
   $scope.square = function(){
  $scope.result = CalcService.square1($scope.number);
   }
  $scope.cube =function(){
   $scope.result=  CalcService.cube1($scope.number);
   }

 $scope.factorial=function(){
    $scope.result=  CalcService.factorial1($scope.number);
  }
 });

 