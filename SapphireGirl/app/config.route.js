(function () {
    'use strict';

    var app = angular.module('app');

    // Collect the routes
    app.constant('routes', getRoutes());
    
    // Configure the routes and route resolvers
    app.config(['$routeProvider', 'routes', routeConfigurator]);
    function routeConfigurator($routeProvider, routes) {

        routes.forEach(function (r) {
            $routeProvider.when(r.url, r.config);
        });
        $routeProvider.otherwise({ redirectTo: '/' });
    }

    // Define the routes 
    function getRoutes() {
        return [
            {
                url: '/',
                config: {
                    templateUrl: 'app/dashboard/dashboard.html',
                    title: 'dashboard',
                    settings: {
                        nav: 1,
                        content: '<i class="fa fa-dashboard"></i> Dashboard'
                    }
                }
            }, {
                url: '/',
                config: {
                    title: 'home',
                    templateUrl: 'app/main/main.html',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> Main'
                    }
                }
            },
             {
                 url: '/about',
                 config: {
                     title: 'about',
                     templateUrl: 'app/about/about.html',
                     settings: {
                         nav: 3,
                         content: '<i class="fa fa-lock"></i> Resume'
                     }
                 }
             }, {
                 url: '/resume',
                 config: {
                     title: 'resume',
                     templateUrl: 'app/resume/resume.html',
                     settings: {
                         nav: 4,
                         content: '<i class="fa fa-lock"></i> Admin'
                     }
                 }
             }, {
                 url: '/resume',
                 config: {
                     title: 'resume',
                     templateUrl: 'app/resume/resume.html',
                     settings: {
                         nav: 5,
                         content: '<i class="fa fa-lock"></i> Admin'
                     }
                 }
             }, {
                 url: '/resume',
                 config: {
                     title: 'resume',
                     templateUrl: 'app/resume/resume.html',
                     settings: {
                         nav: 6,
                         content: '<i class="fa fa-lock"></i> Admin'
                     }
                 }
             }, {
                 url: '/resume',
                 config: {
                     title: 'resume',
                     templateUrl: 'app/resume/resume.html',
                     settings: {
                         nav: 3,
                         content: '<i class="fa fa-lock"></i> Admin'
                     }
                 }
             }
        ];
    }
})();