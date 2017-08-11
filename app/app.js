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
