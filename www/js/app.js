angular.module('myApp', ['ui.router']) //, "ct.ui.router.extras.sticky"
.config(function(
    $stateProvider
    , $urlRouterProvider
    // , $stickyStateProvider
) {
    console.log('myApp.config');

    // $stickyStateProvider.enableDebug(true);
    $urlRouterProvider.when('',"/app");

    $stateProvider
    .state({
        name: 'app',
        url: '/app',
        // abstract: true,
        // sticky: true,
        // cache: true,
        templateUrl: 'www/templates/app.html',
        controller: 'appController'
    })    
    .state({
        name: 'app.state1',
        url: '/state1',
        sticky: true,
        cache: true,
        templateUrl: 'www/templates/state1.html',
        controller: 'state1Controller'
    })
    .state({
        name: 'app.state2',
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
