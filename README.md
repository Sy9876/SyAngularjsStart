angular 1 start project
====

# ui-router-extras

https://github.com/christopherthielen/ui-router-extras

UI-Router 1.0 now includes all the features of ui-router-extras out of the box, or as a plugin. As such, we are no longer actively maintaining ui-router-extras.

说明文档：

http://christopherthielen.github.io/ui-router-extras/#/sticky



node_modules\@uirouter\angularjs\release\angular-ui-router.js

```
    /**
     * This class defines a type of hook, such as `onBefore` or `onEnter`.
     * Plugins can define custom hook types, such as sticky states does for `onInactive`.
     *
     * @interalapi
     */
    var TransitionEventType = /** @class */ (function () {
```


测试失败。

$$equals不是function

与此有关？ https://ui-router.github.io/blog/uirouter-for-angularjs-umd-bundles/





# @uirouter/sticky-states

https://github.com/ui-router/sticky-states

npm i @uirouter/sticky-states --save


in run, keep $state service to $rootScope

```
$rootScope.$state = $state;
```

add plugin in config and register state

```
    var StickyStatesPlugin = window['@uirouter/sticky-states'].StickyStatesPlugin;
    $uiRouterProvider.plugin(StickyStatesPlugin);

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

```


set ui-views and use ng-show to toggle

```
<script src="node_modules/@uirouter/sticky-states/_bundles/ui-router-sticky-states.js"></script>

<a ui-sref="home" ui-sref-active="active">home</a>
<a ui-sref="about" ui-sref-active="active">about</a>

<div ui-view="home" ng-show="$state.includes('home')"></div>
<div ui-view="about" ng-show="$state.includes('about')"></div>
```


