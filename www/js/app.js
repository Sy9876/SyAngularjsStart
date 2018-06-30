angular.module('myApp', ['ui.router', "ct.ui.router.extras.sticky"]) //
.config(function(
    $stateProvider
    , $urlRouterProvider
    , $stickyStateProvider
) {
    console.log('myApp.config');

    $stickyStateProvider.enableDebug(true);
    $urlRouterProvider.when('',"/");

    $stateProvider
    .state({
        name: 'home',
        url: '/',
        template: '<h1>hello</h1>'
    })    
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
        name: 'app.sticky',
        url: '/sticky',
        sticky: true,
        templateUrl: 'www/templates/sticky.html'
    })
    .state({
        name: 'app.sticky.state1',
        url: '/state1',
        cache: true,
        templateUrl: 'www/templates/state1.html',
        controller: 'state1Controller'
    })
    .state({
        name: 'app.sticky.state2',
        url: '/state2',
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
