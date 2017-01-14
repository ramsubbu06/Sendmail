'use strict';
console.log("ramya");
console.log("this is the file");
var myApp = angular.module('MyModuleC', []);
myApp.directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;

            element.bind('change', function(){
                scope.$apply(function(){
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}]);
angular.module('MyModuleC',[])
.controller('MyControllerC', function ($scope, $http) {
  $scope.submitEmail = function() {

    console.log("TEST");
    //Request
    $http.post('/sendmail', $scope.email) 
    .success(function(data, status) {
        console.log("Sent ok");
    })
    .error(function(data, status) {
        console.log("Error");
    })
  };
});


angular.module('MyModuleC', [])
.controller('MyControllerC', function ($scope,$http) {
  $scope.loading = false;
  $scope.send = function (mail){
    $scope.loading = true;
    $http.post('/sendmail', {
      from: 'Naperville Angular-site comments modified<user@naper-angular-site.com>',
      to: 'ramsubbu06@gmail.com',
      subject: 'Comments from our users',
      text: mail.message,
	  attachments: [  
             {  
               // utf-8 string as an attachment
            filename: 'text1.txt',
            content: 'hello world!'
               }   
             ]  
    }).then(res=>{
        $scope.loading = false;
        $scope.serverMessage = 'Email sent successfully';
    });
  }
})


function submitEmail() {
	console.log("calling submit email");
    
}