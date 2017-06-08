angular
    .module('bpcApp')
    .controller('MasterCtrl', ['$scope', '$rootScope', function($scope, $rootScope, $state) {

        $scope.companyName = "Brennen Pool Care";
        $scope.address1 = "";
        $scope.cityStateZip = "";

        $scope.hours = {
            days: "Monday - Friday",
            times: "8 AM to 5 PM",
            zone: "Arizona Time"
        };
        $scope.phone ={
            office: "480-266-3468"
        };
        $scope.email ={
            main: "info@brennanpoolcare.com"
        };
        // Date for footer
        $scope.today = new Date();

        $rootScope.$on('$locationChangeStart', function() {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        });

        $scope.reload = function(){
            $state.reload();
        };

        $scope.initDropdownMenu = function () {
            $(function () {
                // wait till load event fires so all resources are available
                $scope.dropdownMenu = $('ul.nav li.dropdown').hover(function() {
                    if (parseInt($(window).width()) > 1100) {
                        $(this).find('.dropdown-menu').stop(true, true).delay(150).slideDown(500);
                    }
                }, function() {
                    if (parseInt($(window).width()) > 1100) {
                        $(this).find('.dropdown-menu').stop(true, true).delay(150).slideUp(400);
                    }
                });
            });
        };
        $scope.initDropdownMenu();

        $(document).ready(function(){
            $(window).scroll(function () {
                if ($(this).scrollTop() > 50) {
                    $('#back-to-top').fadeIn();
                } else {
                    $('#back-to-top').fadeOut();
                }
            });
            // scroll body to 0px on click
            $('#back-to-top').click(function () {
                $('#back-to-top').tooltip('hide');
                $('body,html').animate({
                    scrollTop: 0
                }, 800);
                return false;
            });

            $('#back-to-top').tooltip('show');


            var height = $(window).height();
            var newHeight = height - 170;
            $('.viewBox').css('min-height', newHeight);

            $(window).scroll(function() {
                //SLIDE FROM BOTTOM
                $(".slideanim").each(function(){
                    var pos = $(this).offset().top;

                    var winTop = $(window).scrollTop();
                    if (pos < winTop + 750) {
                        $(this).addClass("slide-bottom");
                    }
                });
                //SLIDE FROM LEFT
                $(".slideanim-left").each(function(){
                    var pos = $(this).offset().top;

                    var winTop = $(window).scrollTop();
                    if (pos < winTop + 750) {
                        $(this).addClass("slide-left");
                    }
                });
                //SLIDE FROM RIGHT
                $(".slideanim-right").each(function(){
                    var pos = $(this).offset().top;

                    var winTop = $(window).scrollTop();
                    if (pos < winTop + 750) {
                        $(this).addClass("slide-right");
                    }
                });
            });

        });
        $(window).resize(function(){
            var height = $(window).height();
            var newHeight = height - 170;
            $('.viewBox').css('min-height', newHeight);
        });


        $scope.servicesSubMenu = [
            {
                id: 0,
                name: "Chlorine Bath",
                icon: "fa-cloud",
                url: "chlorine-bath",
                subMenu: ""
            },
            {
                id: 1,
                name: "Dedicated Suction Line",
                icon: "fa-gavel",
                url: "dedicated-suction-line",
                subMenu: ""
            },
            {
                id: 2,
                name: "Drain and Fill",
                icon: "fa-flask",
                url: "drain-and-fill-pool-service",
                subMenu: ""
            },
            {
                id: 3,
                name: "Green to Clean",
                icon: "fa-comments",
                url: "green-to-clean-pool-service",
                subMenu: ""
            },
            {
                id: 4,
                name: "Pool Acid Wash",
                icon: "fa-comments",
                url: "pool-acid-wash",
                subMenu: ""
            },
            {
                id: 5,
                name: "Salt Water Conversion",
                icon: "fa-comments",
                url: "salt-water-conversion",
                subMenu: ""
            },
            {
                id: 6,
                name: "Pool Filter Cleaning",
                icon: "fa-comments",
                url: "pool-filter-cleaning",
                subMenu: ""
            },
            {
                id: 7,
                name: "Tile Cleaning Pool Service",
                icon: "fa-comments",
                url: "tile-cleaning-pool-service",
                subMenu: ""
            },
        ];

        $scope.mainNav = [
            {
                id: 0,
                name: "Home",
                icon: "fa-home",
                url: "home",
                hasSubmenu: false,
                subMenu: [],
                href: false
            },
            {
                id: 1,
                name: "Services",
                icon: "fa-sliders",
                url: "connexis-cloud",
                hasSubmenu: true,
                subMenu: $scope.servicesSubMenu,
                href: false
            },
            {
                id: 2,
                name: "Contact",
                icon: "fa-mobile",
                url: "contact",
                hasSubmenu: false,
                subMenu: [],
                href: false
            }
        ];

        $scope.footerMenu = [
            {
                id: 0,
                name: "Supplies Portal",
                icon: "fa-shopping-bag",
                url: "http://supplies.ims-trident.com",
                hasSubmenu: false,
                subMenu: [],
                href: true
            },
            {
                id: 1,
                name: "Customers",
                icon: "fa-users",
                url: "customers",
                subMenu: "",
                href: false
            },
            {
                id: 2,
                name: "Partners",
                icon: "fa-globe",
                url: "partners",
                subMenu: "",
                href: false
            },
            {
                id: 3,
                name: "News",
                icon: "fa-newspaper-o",
                url: "news",
                subMenu: "",
                href: false
            },
            {
                id: 4,
                name: "Links",
                icon: "fa-link",
                url: "links",
                subMenu: "",
                href: false
            },
            {
                id: 5,
                name: "Testimonials",
                icon: "fa-comments",
                url: "connexis-cloud-testimonials",
                subMenu: "",
                href: false
            }
        ];

        $scope.socialMedia = [
            {
                id: 1,
                name: "Twitter",
                url: "https://twitter.com/imstrident",
                icon: "fa-twitter"
            },
            {
                id: 1,
                name: "Facebook",
                url: "https://www.facebook.com/imstrident",
                icon: "fa-facebook-square"
            },
            {
                id: 2,
                name: "Youtube",
                url: "https://www.youtube.com/channel/UCWR9b1PYN34vwmCZ4lOt7Tw",
                icon: "fa-youtube"
            },
            {
                id: 3,
                name: "Linkedin",
                url: "https://www.linkedin.com/company-beta/2079375/?pathWildcard=2079375",
                icon: "fa-linkedin-square"
            }
        ];

        $scope.ratings = [
            {
                num: '1 Poor/ Bad',
                id: 1
            },
            {
                num: '2',
                id: 2
            },
            {
                num: '3',
                id: 3
            },
            {
                num: '4',
                id: 4
            },
            {
                num: '5 Great/ Amazing',
                id: 5
            },
        ];



        // Mobile Menu cross on click
        $scope.isActive = false;
        $scope.activeButton = function() {
            $scope.isActive = !$scope.isActive;
        };

    }]);
