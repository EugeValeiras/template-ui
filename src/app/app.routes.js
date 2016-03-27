angular.module('App').config(function ($stateProvider, $urlRouterProvider, $locationProvider, $mdThemingProvider) {

    // For any unmatched urls
    $urlRouterProvider.otherwise(function($injector) {
      $injector.get('$state').go('homeBody');
    });

    // Now set up the states
    $stateProvider

    .state('homeBody', {
        url: '/',
        views: {
            content: {
                templateUrl: 'app/components/home/homeBody.html',
                controller: 'HomeController',
                controllerAs: 'ctrl'
            }
        }
    })

    .state('loginBody', {
        url: '/login',
        views: {
            content: {
                templateUrl: 'app/components/login/loginBody.html',
                controller: 'LoginController',
                controllerAs: 'ctrl'
            }
        }
    })

    .state('creationBody', {
        url: '/creation',
        views: {
            content: {
                templateUrl: 'app/components/creation/creationBody.html',
                controller: 'CreationController',
                controllerAs: 'ctrl'
            }
        }
    });

    $locationProvider.html5Mode(true);

    $mdThemingProvider
    .theme('default')
    .primaryPalette('blue')
    .accentPalette('blue');
    //.backgroundPalette('blue')
});
