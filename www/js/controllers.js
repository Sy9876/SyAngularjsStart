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
    return vm;
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
    return vm;
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
    return vm;
})
.controller('contentController', function($scope, $state, stickyStateList) {
    // operate menu and content tab
    var controllerName = 'contentController';
    var vm=$scope;
    vm.vo={
        name: '111'
    }

    $scope.v2="xxxx"

    vm.v3='yyy'

    vm.init = function() {
        console.log(controllerName + '.init.  ');
        console.log(controllerName + 'stickyStateList:  ', stickyStateList);
        
    }

    vm.init();

    // 打开的state
    vm.tabList = [];
    // 当前活动的state
    vm.activeTab = '';

    // 激活tab页
    vm.activateTab = function() {

    }

    // 增加tab页
    vm.addTab = function() {
        
    }
        
    // 删除tab页
    vm.delTab = function(state) {
        console.log(controllerName + '.delTab.  state=' + state);
    }


    return vm;

})
;
