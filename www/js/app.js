
angular.module('myApp', ['ui.router']) //, "ct.ui.router.extras.sticky"
.config(function(
    $stateProvider
    , $urlRouterProvider
    ,$uiRouterProvider
    // , $stickyStateProvider
) {
    console.log('myApp.config');

    var StickyStatesPlugin = window['@uirouter/sticky-states'].StickyStatesPlugin;
    $uiRouterProvider.plugin(StickyStatesPlugin);

    // Add states
    var stateRegistry = $uiRouterProvider.stateRegistry;

    stateRegistry.register({ 
        name: 'home',
        url: '/home',
        sticky: true,
        views: {
            'home': {
                template: '<h1>home</h1>',
                controller: 'state1Controller'
            }
        }
    });

    stateRegistry.register({
        name: 'about',
        url: '/about',
        sticky: true,
        views: {
            'about': {
                template: '<h1>about</h1>',
                controller: 'state2Controller'
            }
        }
    });
  
    // Set initial state
    var urlService = $uiRouterProvider.urlService;
    urlService.rules.initial({ state: 'home' })

    /*
    // $stickyStateProvider.enableDebug(true);
    $urlRouterProvider.when('',"/app");

    $stateProvider
    // .state({
    //     name: 'home',
    //     url: '/',
    //     template: '<h1>hello</h1>'
    // })    
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
*/
})
.run(function($rootScope, $state) {
    console.log('myApp.run');

    $rootScope.$state = $state;

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        console.log('on stateChangeStart');
        console.log(event);
        console.log(toState);
        console.log(toParams);
        console.log(fromState);
        console.log(fromParams);
        
    })


})
;
