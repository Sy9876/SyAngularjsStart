angular.module('myApp')
.controller('indexController', function($scope) {
    var controllerName = 'indexController';
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
.controller('state1Controller', function($scope) {
    var controllerName = 'state1Controller';
    var vm=$scope;
    vm.vo={
    }

    vm.init = function() {
        console.log(controllerName + '.init.  ');
    }

    vm.init();
})
.controller('state2Controller', function($scope) {
    var controllerName = 'state2Controller';
    var vm=$scope;
    vm.vo={
    }

    vm.init = function() {
        console.log(controllerName + '.init.  ');
    }

    vm.init();
})
;
