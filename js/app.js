(function () {
    angular.module('app', [
        'ngResource',
        'ngRoute',
        'app.welcome'
    ]);

    angular.module('app')
        .config([
            '$routeProvider',
            '$locationProvider',
            function ($routeProvider, $locationProvider) {
                $locationProvider.html5Mode(true);
                $routeProvider.
                    when('/', {
                        templateUrl: 'js/app/templates/welcome/welcome.html',
                        controller: 'WelcomeCtrl'
                    }).
                    otherwise({
                        redirectTo: '/'
                    });
            }])
        .run(['$injector', function ($injector) {
            var $rootScope = $injector.get('$rootScope');
        }]);
})();
