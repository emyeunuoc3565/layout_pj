(function () {
    myApp.directive('syncPluginJquery', function() {
        return {
            link: function(scope, element, attrs) {
                var observer = new MutationObserver(function(mutations) {
                    $.material.init();
                });
                observer.observe(element[0], {
                    childList: true,
                    subtree: true
                });
            }
        };
    });
})();