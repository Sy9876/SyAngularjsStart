angular.module('myApp')
.controller('appController', function($scope) {
    var controllerName = 'appController';
    var vm=$scope;
    vm.vo={
        name:'default',
        searchName: '',
        mediaInfoList: [],
        mediaInfoRows: [],
        myData: 'aaa'
    }

    vm.init = function() {
        console.log(controllerName + '.init.  ');
    }

    vm.init();
})
.controller('state1Controller', function($scope, $state) {
    var controllerName = 'state1Controller';
    var vm=$scope;
    vm.vo={
    }

    vm.init = function() {
        console.log(controllerName + '.init.  ');

        console.log('state:', $state.current);
        console.log('state:', $state.includes('about'));

    }

    vm.init();
})
.controller('state2Controller', function($scope, $state) {
    var controllerName = 'state2Controller';
    var vm=$scope;
    vm.vo={
    }

    vm.init = function() {
        console.log(controllerName + '.init.  ');

        console.log('state:', $state.current);
        console.log('state:', $state.includes('about'));

    }

    vm.init();
})
;
