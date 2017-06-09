angular
    .module('bpcApp', [
    'ui.router',
    'ngMeta',
    'ngAnimate',
    'angular-typed',
    'slickCarousel',
    'uiGmapgoogle-maps',
    'ngSanitize'
])
    .config(['$urlRouterProvider', '$stateProvider', '$locationProvider', 'ngMetaProvider', function($urlRouterProvider, $stateProvider, $locationProvider, ngMetaProvider) {
        // Remove hashbang
        // Uncomment for production!!! _-_-_-_-_____--__-_--__--_
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: true,
            rewriteLinks: true,
        });
        // Redirect 404
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('master', {
            templateUrl: '/templates/master.html',
            abstract: true,
            controller: 'MasterCtrl'
        })
            .state('home', {
            title : 'Home',
            robots : 'follow,index',
            description : 'Family owned and operated pool service and repair company based in the east valley. We offer weekly and monthly pool service to residential and commercial pools in Mesa, Gilbert, Chandler, Queen Creek, Apache Junction, and the entire east valley.',
            canonical : 'http://brennanpoolcare.com/',
            url: '/',
            parent: 'master',
            templateUrl: '/templates/home.html',
            controller: 'HomeCtrl'
        })
            .state('services', {
            title : 'Our Services',
            robots : 'follow,index',
            description : 'Family owned and operated pool service and repair company based in the east valley.',
            canonical : 'http://brennanpoolcare.com/services',
            url: '/services',
            parent: 'master',
            templateUrl: '/templates/services.html',
            controller: 'ServiceMasterCtrl'
        })
            .state('service-master', {
            templateUrl: '/templates/serviceMaster.html',
            abstract: true,
            controller: 'ServiceMasterCtrl',
            parent: 'master'
        })
        //SERVICE PAGES
            .state('chlorine-bath', {
            title : 'Chlorine Bath',
            robots : 'follow,index',
            description : 'Family owned and operated pool service and repair company based in the east valley.',
            canonical : 'http://brennanpoolcare.com/chlorine-bath',
            url: '/chlorine-bath',
            parent: 'service-master',
            templateUrl: '/templates/servicePages/chlorine-bath.html',
            controller: 'ServicePageCtrl'
        })
            .state('dedicated-suction-line', {
            title : 'Dedicated Suction Line',
            robots : 'follow,index',
            description : 'Family owned and operated pool service and repair company based in the east valley.',
            canonical : 'http://brennanpoolcare.com/dedicated-suction-line',
            url: '/dedicated-suction-line',
            parent: 'service-master',
            templateUrl: '/templates/servicePages/dedicated-suction-line.html',
            controller: 'ServicePageCtrl'
        })
            .state('drain-and-fill-pool-service', {
            title : 'Drain and Fill Pool Service',
            robots : 'follow,index',
            description : 'Family owned and operated pool service and repair company based in the east valley.',
            canonical : 'http://brennanpoolcare.com/drain-and-fill-pool-service',
            url: '/drain-and-fill-pool-service',
            parent: 'service-master',
            templateUrl: '/templates/servicePages/drain-and-fill-pool-service.html',
            controller: 'ServicePageCtrl'
        })
            .state('green-to-clean-pool-service', {
            title : 'Green to Clean Pool Service',
            robots : 'follow,index',
            description : 'Family owned and operated pool service and repair company based in the east valley.',
            canonical : 'http://brennanpoolcare.com/green-to-clean-pool-service',
            url: '/green-to-clean-pool-service',
            parent: 'service-master',
            templateUrl: '/templates/servicePages/green-to-clean-pool-service.html',
            controller: 'ServicePageCtrl'
        })
            .state('pool-acid-wash', {
            title : 'Pool Acid Wash',
            robots : 'follow,index',
            description : 'Family owned and operated pool service and repair company based in the east valley.',
            canonical : 'http://brennanpoolcare.com/pool-acid-wash',
            url: '/pool-acid-wash',
            parent: 'service-master',
            templateUrl: '/templates/servicePages/pool-acid-wash.html',
            controller: 'ServicePageCtrl'
        })
            .state('salt-water-conversion', {
            title : 'Salt Water Conversion',
            robots : 'follow,index',
            description : 'Family owned and operated pool service and repair company based in the east valley.',
            canonical : 'http://brennanpoolcare.com/salt-water-conversion',
            url: '/salt-water-conversion',
            parent: 'service-master',
            templateUrl: '/templates/servicePages/salt-water-conversion.html',
            controller: 'ServicePageCtrl'
        })
            .state('pool-filter-cleaning', {
            title : 'Pool Filter Cleaning',
            robots : 'follow,index',
            description : 'Family owned and operated pool service and repair company based in the east valley.',
            canonical : 'http://brennanpoolcare.com/pool-filter-cleaning',
            url: '/pool-filter-cleaning',
            parent: 'service-master',
            templateUrl: '/templates/servicePages/pool-filter-cleaning.html',
            controller: 'ServicePageCtrl'
        })
            .state('tile-cleaning-pool-service', {
            title : 'Tile Cleaning Pool Service',
            robots : 'follow,index',
            description : 'Family owned and operated pool service and repair company based in the east valley.',
            canonical : 'http://brennanpoolcare.com/tile-cleaning-pool-service',
            url: '/tile-cleaning-pool-service',
            parent: 'service-master',
            templateUrl: '/templates/servicePages/tile-cleaning-pool-service.html',
            controller: 'ServicePageCtrl'
        })

        //CONTACT

            .state('contact', {
            title : 'Contact',
            robots : 'follow,index',
            description : 'Family owned and operated pool service and repair company based in the east valley.',
            canonical : 'http://brennanpoolcare.com/contact',
            url: '/contact',
            parent: 'service-master',
            templateUrl: '/templates/contact.html',
            controller: 'ContactCtrl'
        });


        // Uncomment for production!!! _-_-_-_-_____--__-_--__--_
        $locationProvider.html5Mode(true);
    }])
    .run(['$rootScope', function ($rootScope) {
        $rootScope.reloadstate = function () { $state.go($state.current, {}, {reload: true}); };
        $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
            $rootScope.title = current.$$route.title;
            $rootScope.description = current.$$route.description;
            $rootScope.canonical = current.$$route.canonical;
            $rootScope.robots = current.$$route.robots;

        });
        //$rootScope.$on("$locationChangeStart", function(event, next, current) {
        //    if(next==current && next=='/page') {
        //        $location.url('/');
        //        $state.go('home');
        //    }
        //});
    }]);
