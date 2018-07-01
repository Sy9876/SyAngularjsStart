angular.module('myApp')
.value('myAppConfig', {
    'key': 'value'
})
.value('stickyStateList', {
    'stateList': [
        {
            'stateName': 'app.content.state1',
            'title': 'state 1'
        },
        {
            'stateName': 'app.content.state2',
            'title': 'state 2'
        }
    ]
})
;
