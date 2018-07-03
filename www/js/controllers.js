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
.controller('contentController', function($scope, $state, stickyStateList, $timeout) {
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
    // vm.activateTab = function() {

    // }

    // 增加tab页
    vm.addTab = function() {
        
    }
        
    // 删除tab页
    vm.delTab = function(state) {
        console.log(controllerName + '.delTab.  state=' + state);
    }





    vm.currentStateIdx=0;
    // vm.changeState = function() {
    //     console.log('RootController changeState start -------------');

    //     var nextStateIdx=(++vm.currentStateIdx)%vm.tabList.length;
    //     var nextStateName=vm.tabList[nextStateIdx].route
    //     console.log('RootController $state.go to -- ' + nextStateName );
    //     $state.go(nextStateName, {}, {reload: false});
    // }


    // 所有的tab
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

    // 已显示的tab
    vm.tabShown = [vm.tabList[0]]; // , vm.tabList[1], vm.tabList[2], vm.tabList[3], vm.tabList[4]
    vm.tabToAppend="";
    vm.activatedTab = vm.tabList[0].title;

    // 是否已显示
    vm.isShown = function(stateName) {
        var shown = false;
        for(var i=0;i<vm.tabShown.length;i++) {
            if(stateName==vm.tabShown[i].route) {
                shown=true;
                break;
            }
        }
        console.log('isShown stateName=' + stateName + '  ' + shown);
        return shown;
    }
    // 显示tab，如果未显示，则增加tab页并激活，如果已显示，则激活
    vm.showTab = function(stateName) {
        console.log('showTab. stateName: ' + stateName);
        if(vm.isShown(stateName)) {
            // 激活 
            console.log('showTab. already shown. activate ' + stateName);
            vm.activateTab(stateName);
        }
        else {
            // 增加tab页并激活
            console.log('showTab. show tab ' + stateName);

            // search
            for(i=0;i<vm.tabList.length;i++) {
                if(stateName == vm.tabList[i].route) {
                    console.log('showTab ' + stateName + ' add and activate');
                    vm.tabShown.push(vm.tabList[i]);
                    break;
                }
            }

            console.log('showTab. activate ' + stateName);
            vm.activateTab(stateName);
        }

        console.log('showTab ' + ' end');
    }
    vm.activateTab = function(stateName) {
        var targetId='';
        for(i=0;i<vm.tabShown.length;i++) {
            if(stateName == vm.tabShown[i].route) {
                targetId=vm.tabShown[i].target;
                break;
            }
        }
        if(!targetId) {
            // not found
        }
        else {
            $timeout(function() {
                var selector = '#id_content_ul a[data-target="' + targetId + '"]';
                var e=$(selector);
                console.log('show element ' + selector);
                e.tab('show') ;
    
            }, 100)
        }

    }

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
    vm.appendTab = function(title) {
        console.log('appendTab. tabToAppend: ' + title);
        var i=0;
        var titleToAppend = title;
        // if exist
        for(i=0;i<vm.tabShown.length;i++) {
            if(title == vm.tabShown[i].title) {
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
                vm.tabShown.push(vm.tabList[i]);
                vm.activatedTab = titleToAppend;
                return;
            }
        }

        console.log('appendTab ' + titleToAppend + ' not found');
    }
    
    vm.closeTab = function(event, stateName) {
        var newRoute='';
        var i=0;
// debugger

        // 这个不管用
        event.stopPropagation();
        // 这个好使，不会触发外层a标签的ui-sref
        event.preventDefault();

        for(i=0;i<vm.tabShown.length;i++) {
            if(stateName == vm.tabShown[i].route) {
                
                // 关闭当前活动页
                if($state.current.name==stateName) {

                // }
                // if(vm.isActivated(stateName)) {
                    // 关闭的是活动标签，则计算新的活动标签
                    var activeNum=0;
                    if(i+1<vm.tabShown.length) {
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
                    console.log('closeTab activeNum=' + activeNum);
                    newRoute=vm.tabShown[activeNum].route;
                    // vm.setActivate(vm.tabShown[activeNum].title);
                    // vm.activateTab(vm.tabShown[activeNum].route);
                }

                console.log('closeTab ' + stateName + ' deactive and close');
                console.log('vm.tabShown before splice: ', JSON.stringify(vm.tabShown));
                // debugger
                vm.tabShown.splice(i, 1);
                console.log('vm.tabShown after splice: ', JSON.stringify(vm.tabShown));

                // 关闭所有标签页
                if(vm.tabShown.length==0) {
                    newRoute='app.content';
                }
                if(newRoute) {
                    console.log('closeTab state go =' + newRoute);
                    $state.go(newRoute);
                }

                return;
            }
        }
    }

    $scope.$on('$stateChangeSuccess',
        function(evt, toState, roParams, fromState, fromParams) {

            // ContentController控制tab标签
            // 路由跳转后，打开或激活相应的标签
            // 关闭标签时，隐藏tab，跳转路由

            // toState是否是激活的 -- 如果是当前激活的，则不会发生state change事件

            // toState是否已打开
            if(vm.isShown(toState.name)) {
                // 激活
                vm.activateTab(toState.name);
            }
            else {
                // 打开
                vm.showTab(toState.name);
            }


            // var e=null;
            // console.log('ContentController on $stateChangeStart. fromState=' + fromState.name + '  toState=' + toState.name);
            // if(toState.name == 'app.home.Home') {
            //     console.log('HomeController show tab #home');

            //     e=$('#id_content_ul a[data-target="#Home"]');
            //     e.tab('show') ;

            //     vm.appendTab('Home');
            // }
            // else if(toState.name == 'app.home.Profile') {

            //     console.log('RootController show tab #Profile');

            //     e=$('#id_content_ul a[data-target="#Profile"]');
            //     e.tab('show') ;

            
            //     vm.appendTab('Profile');
            // }
            // else if(toState.name == 'app.home.Messages') {

            //     console.log('RootController show tab #Messages');

            //     e=$('#id_content_ul a[data-target="#Messages"]');
            //     e.tab('show') ;

            
            //     vm.appendTab('Messages');
            // }
            
    });



    return vm;

})
;
