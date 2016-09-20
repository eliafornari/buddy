angular.module('myApp')
.controller('homeCtrl', ($rootScope, $location, $window, $timeout, $http, anchorSmoothScroll, $scope, $anchorScroll, $interval, check, transformRequestAsFormPost)=>{

setTimeout(function(){
  $( ".instagram" ).draggable({ containment: "parent" });
  $( ".facebook" ).draggable({ containment: "parent" });
  $( ".soundcloud" ).draggable({ containment: "parent" });
  $( ".twitter" ).draggable({ containment: "parent" });
  $( ".private" ).draggable({ containment: "parent" });

  $( ".home-video" ).draggable({ containment: "parent" });


}, 600);




$rootScope.isSoundOpen = false


$rootScope.openSound = function(){
  $rootScope.isSoundOpen = !$rootScope.isSoundOpen
}




});
