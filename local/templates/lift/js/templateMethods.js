var Template = (function($){
	'use strict';
	
	var win = $(window);

	return {		
		// ============================ Прокрутка к началу страницы
		pageUp: function(){
			var self = this;

			$('html, body').animate({
				scrollTop: 0
			}, 300);

			return self;
		},
		
		// ============================ Показывать кнопку вверх только если был скролл
		pageUpButFade: function(){
			var self = this;

			var but = $('#pageUp');

			if(win.scrollTop() >= 200){
				but.fadeIn();
			} else {
				but.fadeOut();
			}

			return self;
		}
	}
})(jQuery);
