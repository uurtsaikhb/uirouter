(function () {

    function CampaignsController() {
        var ctrl = this;

        ctrl.title = 'Campaigns';
    };


    angular
        .module('app')
        .controller('CampaignsController', CampaignsController)

})();
