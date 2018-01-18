angular.module('myApp')
.directive('myInput', function() {
    return {
        restrict: 'EA',
        replace: true,
        template: '<h1>1</h1>',
        scope: {
            myData: '@',
            myData2: '='
        },
        compile: function(element, attr, transclude) {
            console.log('compile');
            // element.find('h1').append();
            element.text('wating');

            return {
                post: function(scope, element, attr) {
                    debugger
                    console.log('postLink');
                    console.log('myData:' + scope.myData2);
                    element.text(scope.myData2);
                    
                }
            }
        }
    }
})
;