(function () {

    function SubscriberDetailController($stateParams, SubscribersService) {
        var ctrl = this;

        ctrl.selected = SubscribersService.find($stateParams.id);
    };

    angular
        .module('app')
        .controller('SubscriberDetailController', [
            '$stateParams',
            'SubscribersService',
        SubscriberDetailController
    ])

})();
