(function() {
    
    function SubscribersController (SubscribersService) {
        var ctrl = this;
        
        ctrl.title = "Subscribers";
        ctrl.subscribers = SubscribersService.list();
    }
    
    angular
        .module('app')
        .controller('SubscribersController', ['SubscribersService', SubscribersController])
    
})();