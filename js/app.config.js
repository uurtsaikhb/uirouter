(function () {

    angular
        .module('app.config', ['ui.router'])
        .config(function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/');

            $stateProvider

                .state('app', {
                url: '/',
                views: {
                    'header': {
                        templateUrl: '/templates/partials/header.html'
                    },
                    'content': {
                        templateUrl: '/templates/partials/content.html'
                    },
                    'footer': {
                        templateUrl: '/templates/partials/footer.html'
                    }
                }
            })

            .state('app.dashboard', {
                url: 'dashboard',
                views: {
                    'content@': {
                        templateUrl: '/templates/dashboard/dashboard.html',
                        controller: 'DashboardController',
                        controllerAs: 'dashboard'
                    }
                }
            })

            .state('app.campaigns', {
                url: 'campaigns',
                views: {
                    'content@': {
                        templateUrl: '/templates/campaigns/campaigns.html',
                        controller: 'CampaignsController',
                        controllerAs: 'campaigns'
                    }
                }
            })

            .state('app.subscribers', {
                url: 'subscribers',
                views: {
                    'content@': {
                        templateUrl: 'templates/subscribers/subscribers.html',
                        controller: 'SubscribersController',
                        controllerAs: 'subscriber'
                    }
                }

            })

            .state('app.subscribers.detail', {
                url: '/:id',
                views: {
                    'detail@app.subscribers': {
                        templateUrl: 'templates/subscribers/detail/subscriber-detail.html',
                        controller: 'SubscriberDetailController',
                        controllerAs: 'sdetail'
                    }
                }

            });

        })

})();
