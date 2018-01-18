angular.module('myApp')
.filter('toHref', function(myAppConfig) {
    return function(filename) {
        //console.log('toHref 1 ' + filename);
        if(!filename) {return null;}
        var href = filename.replace(/\\/g, '/');
        href = href.replace(/\/\//g, '/');
        href = href.replace(myAppConfig.nginxRoot, '');
        // href = 'file:///' + href;
        href = myAppConfig.nginxHost + href;
        //console.log('toHref=' + href);
        return href;
    }
})
;
