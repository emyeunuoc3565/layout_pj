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