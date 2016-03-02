(function () {

    function SubscribersService() {
        var subscribers = [{
            id: 1,
            name: 'Craig McKeachie',
            email: 'craig@test.com',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, repellendus facere expedita, magni cumque, voluptas vero nulla fugit enim ullam repellat earum vitae. Porro repellendus, officia quasi, alias numquam commodi.'
        }, {
            id: 2,
            name: 'John Doe',
            email: 'johndoe@gmail.com',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore magnam nostrum officiis dolor delectus ipsa magni error culpa, autem sit, perferendis eligendi officia quod amet perspiciatis dignissimos omnis molestias tempore.'
        }];
        
        return {
            list: function () {
                return subscribers;
            },
            find: function (id) {
                var selected;
                subscribers.forEach(function(s) {
                    if (s.id == id) {
                        selected = s;
                    }
                });
                
                return selected;
            }
        }
    };

    angular
        .module('app')
        .factory('SubscribersService', SubscribersService)

})();
