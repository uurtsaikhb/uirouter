(function () {

    function DashboardController() {
        var ctrl = this;
        ctrl.title = "Dashboard";
    };

    angular
        .module('app')
        .controller('DashboardController', DashboardController)

})();
