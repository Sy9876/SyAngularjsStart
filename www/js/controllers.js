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
        lastInputed: new Date(),
        in: null
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
        lastInputed: new Date(),
        in: null
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





    vm.currentStateIdx=0;
    vm.changeState = function() {
        console.log('RootController changeState start -------------');

        var nextStateIdx=(++vm.currentStateIdx)%vm.tabList.length;
        var nextStateName=vm.tabList[nextStateIdx].route
        console.log('RootController $state.go to -- ' + nextStateName );
        $state.go(nextStateName, {}, {reload: false});
    }


    
    vm.tabList = [
        {
            title: 'Home',
            route: 'app.content.Home',
            target: '#tab_Home'
        },
        {
            title: 'state 1',
            route: 'app.content.state1',
            target: '#idState1'
        },
        {
            title: 'state 2',
            route: 'app.content.state2',
            target: '#idState2'
        },
        {
            title: 'Profile',
            route: 'app.content.Profile',
            target: '#tab_Profile'
        },
        {
            title: 'Messages',
            route: 'app.content.Messages',
            target: '#tab_Messages'
        }
    ];
    vm.tabEnabled = [vm.tabList[0], vm.tabList[1], vm.tabList[2], vm.tabList[3], vm.tabList[4]];
    vm.tabToAppend="Messages";
    vm.activatedTab = 'Home';
    vm.isActivated = function(title) {
        if(title == vm.activatedTab) {
            return true;
        }
        else {
            return false;
        }
    };
    vm.setActivate = function(title) {
        vm.activatedTab = title;
        console.log('activatedTab ' + title);
    };

    vm.loadPca = function(code) {
        console.log('loadPca show tab #Messages');
        // $('#Messages').tab('show');
        // debugger
        // $('#id_content_ul a[target="#Messages"]').tab('show') ;
        var e=$('#id_content_ul a[data-target="#Messages"]');
        e.tab('show') ;
        // $('#id_content_ul a:last').tab('show')
    }
    vm.appendTab = function(title) {
        console.log('appendTab. tabToAppend: ' + title);
        var i=0;
        var titleToAppend = title;
        // if exist
        for(i=0;i<vm.tabEnabled.length;i++) {
            if(title == vm.tabEnabled[i].title) {
                console.log('appendTab ' + titleToAppend + ' exist');
                // activate tab?
                vm.activatedTab = titleToAppend;
                return;
            }
        }

        // search
        for(i=0;i<vm.tabList.length;i++) {
            if(title == vm.tabList[i].title) {
                console.log('appendTab ' + titleToAppend + ' add and activate');
                vm.tabEnabled.push(vm.tabList[i]);
                vm.activatedTab = titleToAppend;
                return;
            }
        }

        console.log('appendTab ' + titleToAppend + ' not found');
    }
    
    vm.closeTab = function(title) {
        var i=0;
// debugger
        for(i=0;i<vm.tabEnabled.length;i++) {
            if(title == vm.tabEnabled[i].title) {
                
                if(vm.isActivated(title)) {
                    // 关闭的是活动标签，则计算新的活动标签
                    var activeNum=0;
                    if(i+1<vm.tabEnabled.length) {
                        activeNum=i+1;
                    }
                    else {
                        if(i-1>=0) {
                            activeNum=i-1;
                        }
                        else {
                            activeNum=0;
                        }
                    }
                    console.log('appendTab activeNum=' + activeNum);
                    vm.setActivate(vm.tabEnabled[activeNum].title);
                }
                console.log('appendTab ' + title + ' deactive and close');
                vm.tabEnabled.splice(i, 1);
                return;
            }
        }
    }

    $scope.$on('$stateChangeStart',
        function(evt, toState, roParams, fromState, fromParams) {
            // 可以阻止这一状态完成
            // evt.preventDefault();
            var e=null;
            console.log('RootController on $stateChangeStart. fromState=' + fromState.name + '  toState=' + toState.name);
            if(toState.name == 'app.home.Home') {
                console.log('HomeController show tab #home');

                e=$('#id_content_ul a[data-target="#Home"]');
                e.tab('show') ;

                vm.appendTab('Home');
            }
            else if(toState.name == 'app.home.Profile') {

                console.log('RootController show tab #Profile');

                e=$('#id_content_ul a[data-target="#Profile"]');
                e.tab('show') ;

            
                vm.appendTab('Profile');
            }
            else if(toState.name == 'app.home.Messages') {

                console.log('RootController show tab #Messages');

                e=$('#id_content_ul a[data-target="#Messages"]');
                e.tab('show') ;

            
                vm.appendTab('Messages');
            }
            
    });



    return vm;

})
;
