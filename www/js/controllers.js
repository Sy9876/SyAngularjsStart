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
});
