angular.module("app").controller('Ass4Controller', function($scope) {
            $scope.student = {
               firstName: "",
               lastName: "",
               amount:"",
               
               fullName: function() {
                  var studentObject;
                  studentObject = $scope.student;
                  return studentObject.firstName + " " + studentObject.lastName;
               },
               FilterAmount:function(){
                    var studentObject;
                  studentObject = $scope.student;
                   return  studentObject.amount;

               }
            };
         });