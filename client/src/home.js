angular.module('myApp')
.controller('homeCtrl', ($rootScope, $location, $window, $timeout, $http, anchorSmoothScroll, $scope, $anchorScroll, $interval, check, transformRequestAsFormPost)=>{

$rootScope.letmescroll = true;

setTimeout(function(){
  $( ".instagram" ).draggable({ containment: "parent" });
  $( ".facebook" ).draggable({ containment: "parent" });
  $( ".soundcloud" ).draggable({ containment: "parent" });
  $( ".twitter" ).draggable({ containment: "parent" });
  $( ".private" ).draggable({ containment: "parent" });

    $( ".youtube" ).draggable({ containment: "parent" });
    $( ".music" ).draggable({ containment: "parent" });
    $( ".itunes" ).draggable({ containment: "parent" });


  // $( ".home-video" ).draggable({ containment: "parent" });
  //
  $( ".soundcloudicon" ).draggable({ containment: "parent" });


  // var vid = document.getElementById("video");
  //
  // $rootScope.playPause =()=> {
  //   if(vid.paused){
  //     vid.play();
  //   }else{
  //     vid.pause();
  //   }
  //
  // }




  jQuery('html body').bind('scroll', function(){

    var scroll =  this.scrollLeft();
    console.log(scroll);
    if(scroll >= $rootScope.windowWidth){
      $rootScope.letmescroll = false;
    }else{
      $rootScope.letmescroll = true;
    }
    var module = scroll%($rootScope.windowHeight*3);
    if ((module >= 0)&&(module<200)){
      $scope.blink = true;
    }else{
      $scope.blink = false;
    }
    $scope.$apply();
  });



  $(function() {
     $("html body").mousewheel(function(event, delta) {
        // console.log(event.deltaX, event.deltaY, event.deltaFactor);
        this.scrollLeft -= (delta * 0.4);
        event.preventDefault();
     });
  });


}, 600);


$rootScope.isSoundOpen = false


$rootScope.openSound = function(){
  $rootScope.isSoundOpen = !$rootScope.isSoundOpen
}


});
