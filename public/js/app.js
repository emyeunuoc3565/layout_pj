var myApp = angular.module('myApp', ['ui.router']);
(function(){
	myApp.config(function($stateProvider, $urlRouterProvider) {
		var share = {
			sidebarLeft:{
				templateUrl:'/template/share/sidebarLeft.html'
			},
			sidebarRight:{
				templateUrl:'/template/share/sidebarRight.html'
			},
			navbar:{
				templateUrl:'/template/share/navbar.html'
			},
			footer:{
				templateUrl:'/template/share/footer.html'
			}
		}
		var state = {
			routes:{
				name:'routes',
				url:'/routes',
				templateUrl:'/template/routes.html'
			},
			login:{
				name:'login',
				url:'/login',
				templateUrl:'/template/login.html'
			},
			layoutIndex:{
				name:'layoutIndex',
				abstract: true,
				views: {
					'': { templateUrl:'/template/layout/layoutIndex.html'}
				}
			},
			dashboard: {
				parent:'layoutIndex',
				name:'dashboard',
				url:'/dashboard',
				views:{
					'content@layoutIndex':{
						templateUrl:'/template/dashboard.html',
						controller:'dashboardCtr'
					},
					'sidebarLeft@layoutIndex': share.sidebarLeft,
					'sidebarRight@layoutIndex': share.sidebarRight,
					'navbar@layoutIndex': share.navbar,
					'footer@layoutIndex': share.footer,
				},
				
			},
		}

		$urlRouterProvider.otherwise('/routes');
		$stateProvider.state(state.layoutIndex);
		$stateProvider.state(state.routes);
		$stateProvider.state(state.login);
		$stateProvider.state(state.dashboard);



	});
	myApp.run(function($rootScope){
	    $rootScope
	        .$on('$stateChangeStart', 
	            function(event, toState, toParams, fromState, fromParams){ 
	                console.log("State Change: transition begins!");
	        });

	    $rootScope
	        .$on('$stateChangeSuccess',
	            function(event, toState, toParams, fromState, fromParams){ 
	                console.log("State Change: State change success!");
	        });

	    $rootScope
	        .$on('$stateChangeError',
	            function(event, toState, toParams, fromState, fromParams){ 
	                console.log("State Change: Error!");
	        });

	    $rootScope
	        .$on('$stateNotFound',
	            function(event, toState, toParams, fromState, fromParams){ 
	                console.log("State Change: State not found!");
	        });

	    $rootScope
	        .$on('$viewContentLoading',
	            function(event, viewConfig){ 
	        });

	    $rootScope
	        .$on('$viewContentLoaded',
	            function(event, viewConfig){
	            	$.material.init();
	        });
	})
})();

(function () {
	myApp.controller('dashboardCtr', ['$scope', function($scope){
		$scope.message = 'test';
		$scope.showhang = false;
		$scope.arr = [{name:'sa'},{name:'haha'},{name:'haha'},{name:'sa'},{name:'haha'},{name:'haha'},{name:'sa'},{name:'haha'},{name:'haha'},{name:'sa'},{name:'haha'},{name:'haha'},{name:'haha'}];
		$scope.add = function(){
			$scope.arr.push({name:'fuck'});
		}
		$scope.show = function(){
			$scope.showhang = ! $scope.showhang;
		}
	}]);
})();
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
(function() {
	myApp.directive('treeview', function($timeout) {
		return {  
			restrict: 'C',
			link : function(scope, elem) {
				if(angular.element(elem).hasClass('active')){
					elem.children('.treeview-menu').slideUp();
					elem.children('.treeview-menu').slideDown();
					angular.element(elem).addClass('menu-open');
				}
				elem.on('click', function() {
					var currentState = true;
					if(angular.element(elem).hasClass('active')){
						currentState = false;
					}

					elem.siblings('.treeview').children('.treeview-menu').slideUp();
					elem.siblings('.treeview').removeClass('active');
					elem.siblings('.treeview').removeClass('menu-open');

					if(currentState === true) {
						$timeout(function(){
							angular.element(elem).addClass('active');
						},400)
						angular.element(elem).addClass('menu-open');
						$(elem.children('.treeview-menu')[0]).slideDown();
					} else {
						$timeout(function(){
							angular.element(elem).removeClass('active');
						},400)
						angular.element(elem).removeClass('menu-open');
						$(elem.children('.treeview-menu')[0]).slideUp();
					}
					currentState = !currentState;
				});
			}
		};
	});
})();