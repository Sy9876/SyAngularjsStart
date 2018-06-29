angular.module('myApp', ['ui.router', "ct.ui.router.extras.sticky"])
.config(function($stateProvider, $stickyStateProvider) {
    console.log('myApp.config');

    $stickyStateProvider.enableDebug(true);

    $stateProvider
    .state({
        name: 'state1',
        url: '/state1',
        sticky: true,
        cache: true,
        templateUrl: 'www/templates/state1.html',
        controller: 'state1Controller'
    })
    .state({
        name: 'state2',
        url: '/state2',
        sticky: true,
        cache: true,
        templateUrl: 'www/templates/state2.html',
        controller: 'state2Controller'
    })
    ;

})
.run(function() {
    console.log('myApp.run');
})
;
