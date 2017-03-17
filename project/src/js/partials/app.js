$( document ).ready(function() {

	//menu collapsed
	$(".navbar-toggle.collapsed").on("click", function(){
		 $('.collapse.navbar-collapse').slideToggle();
	});
	
	//search
	setTimeout(function() {
		$(".btn-open").on("mouseover", function(){
			$('.search').show("slide", { direction: "right" }, 500);
		});
	}, 1000);

	$(function() {
		$(".main-navigation-slider .main-slider-nav").click(function() {
			$(".main-navigation-slider .main-slider-nav").removeClass('active');
			$(this).addClass('active');
		})
	});

	/*collum height*/
	function setEqualHeight(columns)
	{
		var tallestcolumn = 0;
		columns.each(
			function()
			{
				currentHeight = $(this).height();
				if(currentHeight > tallestcolumn)
				{
					tallestcolumn = currentHeight;
				}
			}
		);
		columns.height(tallestcolumn);
	}
	setEqualHeight($(".shop figure"));
	/*end colum*/

	var $window = $(window);
	function checkWidth() {
		var windowsize = $window.width();
		if (windowsize > 768) {
			setEqualHeight($(".portfolio-link img"));
			setEqualHeight($(".news-box"));
		}
		else if (windowsize < 991) {
			$('.shop-box').click(function(){
				$(this).find('figcaption > span').hide();
				$(this).find('.shop-links').show();
			});
		}
	}
	// Execute on load
	checkWidth();
	// Bind event listener
	$(window).resize(checkWidth)
});