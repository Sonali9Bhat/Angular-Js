 

angular.module("app").controller('Ass5Controller', function($scope){
    $scope.userArray = [];

  $scope.Location=[{name:"pune"},{name:"bangalore"},{name:"mumbai"}]



    $scope.formData = {};
    console.log($scope.userArray);
    $scope.submitForm = function(isValid){
 
        if(isValid){
             $scope.userArray.push($scope.formData.firstname);
             $scope.userArray.push($scope.formData.lastname);
             $scope.userArray.push($scope.formData.email);
              $scope.userArray.push($scope.formData.phoneNumber);
             $scope.userArray.push( $scope.formData.selectedVal);
             $scope.userArray.push($scope.formData.ItemSelected);
                         
             
         }
        console.log($scope.userArray);
    };

  


$scope.clear = function(){
    $scope.userArray="";
  }


});