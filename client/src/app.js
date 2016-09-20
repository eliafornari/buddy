import jQuery from "jquery";
import angular from 'angular'
import 'angular-route'
import 'angular-animate'
import 'angular-touch'
import 'angular-resource'




angular.module('myApp', ["ngRoute", "ngAnimate", "ngResource", "ngTouch"])
.run(['$rootScope', '$location','$route', '$templateCache',($rootScope, $location, $route, $templateCache)=>{

    var original = $location.path;
    $location.path = function (path, reload) {
        if (reload === false) {
            var lastRoute = $route.current;
            var un = $rootScope.$on('$locationChangeSuccess', function () {
                $route.current = lastRoute;
                un();
            });
        }
        else if (reload === true){

          var currentPageTemplate = $route.current.templateUrl;
            $templateCache.remove(currentPageTemplate);

        var un = $rootScope.$on('$locationChangeSuccess', function () {
              $route.current = '/';
              un();
              $route.reload();
          });
        }
        return original.apply($location, [path]);
    };

}])

.service('anchorSmoothScroll', function(){

    this.scrollTo = function(eID) {

        // This scrolling function
        // is from http://www.itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript

        var startY = currentYPosition();
        var stopY = elmYPosition(eID);
        var distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
            scrollTo(0, stopY); return;
        }
        var speed = Math.round(distance / 100);
        if (speed >= 20) speed = 20;
        var step = Math.round(distance / 25);
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;
        if (stopY > startY) {
            for ( var i=startY; i<stopY; i+=step ) {
                setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
                leapY += step; if (leapY > stopY) leapY = stopY; timer++;
            } return;
        }
        for ( var i=startY; i>stopY; i-=step ) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
        }

        function currentYPosition() {
            // Firefox, Chrome, Opera, Safari
            if (self.pageYOffset) return self.pageYOffset;
            // Internet Explorer 6 - standards mode
            if (document.documentElement && document.documentElement.scrollTop)
                return document.documentElement.scrollTop;
            // Internet Explorer 6, 7 and 8
            if (document.body.scrollTop) return document.body.scrollTop;
            return 0;
        }

        function elmYPosition(eID) {
            var elm = document.getElementById(eID);
            var y = elm.offsetTop;
            var node = elm;
            while (node.offsetParent && node.offsetParent != document.body) {
                node = node.offsetParent;
                y += node.offsetTop;
            } return y;
        }

    };

})


.config(['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) => {

  // use the HTML5 History API
  $locationProvider.html5Mode(true);
  $routeProvider



    /*............................. Take-all routing ........................*/


    .when('/', {
      // redirectTo: 'matthew30matthew30matthew'
      templateUrl: 'views/home.html',
      controller: 'homeCtrl'

    })


    // put your least specific route at the bottom
    .otherwise({redirectTo: '/'})



}]) //config


.filter('trustUrl', function ($sce) {
  return function(url) {
    // if (url){
      var trusted = $sce.trustAsResourceUrl(url);
      return trusted;
    // }
  };
})




.controller('appCtrl', ($rootScope, $location, $window, $timeout, $http, anchorSmoothScroll, $scope, $anchorScroll, $interval, check, transformRequestAsFormPost)=>{

  check.size();

$scope.isWrong = false;

  $rootScope.retrieveElement = function(id){
    var element = angular.element(document.querySelectorAll("#"+id)[0]);
    return element
  }



$rootScope.windowHeight= $window.innerHeight;
$rootScope.half_windowHeight = $window.innerHeight/2;
jQuery($window).resize(function(){
  $rootScope.windowHeight = $window.innerHeight;
  $rootScope.half_windowHeight = $window.innerHeight/2;
  $scope.$apply();
});





$scope.$watch('scroll', function(newValue, oldValue) {


}); //if desktop











})// end of appCtrl



.directive('logoDirective', function($rootScope, $location, $window, $timeout) {
  return {
    restrict: 'E',
    templateUrl: 'views/components/logo.html',
    replace: true,
    link: function(scope, elem, attrs) {

    }
  };
})

.directive('socialDirective', function($rootScope, $location, $window, $timeout) {
  return {
    restrict: 'E',
    templateUrl: 'views/components/social.html',
    replace: true,
    link: function(scope, elem, attrs) {

    }
  };
})


.directive('navDirective', function($rootScope, $location, $window, $timeout) {
  return {
    restrict: 'E',
    templateUrl: 'views/components/nav.html',
    replace: true,
    link: function(scope, elem, attrs) {

      if(!$rootScope.isDevice){
        scope.isNav = false;
        scope.showNav = () => {
          scope.isNav = !scope.isNav
        }
        scope.isActive = (page) => {
          if ($rootScope.page.name == page){
            return true
          }
        }
      }

    }
  };
});




var jquerymousewheel = require('./vendor/jquery.mousewheel.js')($);
var jqueryUI = require('./vendor/jquery-ui.min.js');
var service = require("./service.js");
var service = require("./home.js");
