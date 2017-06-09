angular
    .module('bpcApp')
    .controller('HomeCtrl', ['$scope', function($scope) {

        $scope.slideshow = [
            {
                id: '0',
                headline: 'Fast. Convenient. Affordable.',
                subtext: '',
                url: '',
                img: 'brennan-pool-care-1.jpg',
                btnClass: 'squareBtnBlue',
                position: ''
            },
            {
                id: '1',
                headline: 'POOL MAINTENANCE',
                subtext: 'WEEKLY AND MONTHLY PLANS AVAILABLE',
                url: '',
                img: 'brennan-pool-care-2.jpg',
                btnClass: 'squareBtnGray',
                position: ''
            },
            {
                id: '2',
                headline: 'Professional Pool Service',
                subtext: '',
                url: '',
                img: 'brennan-pool-care-3.jpg',
                btnClass: 'squareBtnBlue',
                position: ''
            },
        ];




    }]);
