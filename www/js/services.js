angular.module('myApp')
.factory('utilService', function($q, $http, myAppConfig) {
    var serviceName = 'utilService';
    var service = {};


    return service;
})
.factory('tabService', function($q, $http, myAppConfig, stickyStateList) {
    var serviceName = 'tabService';
    var service = {};

    // 打开的state
    service.tabList = [];
    // 当前活动的state
    service.activeTab = '';

    // 激活tab页
    service.activateTab = function() {

    }

    // 增加tab页
    service.addTab = function() {
        
    }
        
    // 删除tab页
    service.delTab = function() {
        
    }
        

    return service;
})
;
