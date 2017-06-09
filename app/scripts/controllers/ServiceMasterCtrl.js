angular
    .module('bpcApp')
    .controller('ServiceMasterCtrl', ['$scope', '$location', '$state','$rootScope', function($scope, $location, $state, $rootScope) {

        $scope.$on('$stateChangeSuccess', function () {
          window.scrollTo(0, 0);
          for(var i = 0; i < $scope.services.length; i++) {
            if( $state.current.name === $scope.services[i].url ) {
              $scope.pageTitle = $scope.services[i].name;
                $scope.pageImage = $scope.services[i].img;
            //   $scope.titlePlural = $scope.services[i].titlePlural;
            //   $scope.pageIcon = $scope.services[i].icon;
            //   $scope.pageIconAlt = $scope.services[i].alt;
            }
          }
        });

        $scope.services = [
            {
                id: '0',
                name: 'Pool Acid Wash',
                subtext: '',
                url: 'pool-acid-wash',
                img: 'pool-acid-wash.jpg',
                position: ''
            },
            {
                id: '1',
                name: 'Chlorine Bath',
                subtext: '',
                url: 'chlorine-bath',
                img: 'chlorine-bath.jpg',
                position: ''
            },
            {
                id: '2',
                name: 'Dedicated Suction Line',
                subtext: '',
                url: 'dedicated-suction-line',
                img: 'dedicated-suction-line.jpg',
                position: ''
            },
            {
                id: '3',
                name: 'Drain and Fill Pool Service',
                subtext: '',
                url: 'drain-and-fill-pool-service',
                img: 'drain-and-fill-pool-service.jpg',
                position: ''
            },
            {
                id: '4',
                name: 'Green to Clean Pool Service',
                subtext: '',
                url: 'green-to-clean-pool-service',
                img: 'green-to-clean-pool-service.jpg',
                position: ''
            },
            {
                id: '5',
                name: 'Salt Water Conversion',
                subtext: '',
                url: 'salt-water-conversion',
                img: 'salt-water-conversion.jpg',
                position: ''
            },
            {
                id: '6',
                name: 'Pool Filter Cleaning',
                subtext: '',
                url: 'pool-filter-cleaning',
                img: 'pool-filter-cleaning.jpg',
                position: ''
            },
            {
                id: '7',
                name: 'Tile Cleaning Pool Service',
                subtext: '',
                url: 'tile-cleaning-pool-service',
                img: 'tile-cleaning-pool-service.jpg',
                position: ''
            }
        ];

    }]);
