(function ($) {
    
$(window).load(function () {
	
});
    
$(document).ready(function () {
	if ($('cl-image-comparison').length) {
		$('.image-comparison-hover.before').click(function () {
			$(this).toggleClass('on');
			$(this).parent().addClass('hover-off');
			$(this).parent().find('.image-comparison-hover.after').removeClass('on');
		});
		  
		$('.image-comparison-hover.after').click(function () {
			$(this).toggleClass('on');
			$(this).parent().addClass('hover-off');
			$(this).parent().find('.image-comparison-hover.before').removeClass('on');
		});
	}	

	$('.cl-dropper-title').click(function () {
		const $this = $(this);
		const id = $this.attr('data-id');
		const $container = $('.cl-drop-down#'+id);
		
		//$('.cl-dropper-title.on').removeClass('on');

		if ($container.hasClass('active')) {
			//$('.cl-drop-down.active').slideDown().addClass('active');
			$container.slideUp('fast', function () {
				$container.removeClass('active');
			});
			$this.removeClass('on');
		} else {
			//$('.cl-drop-down.active').slideUp().removeClass('active');
			$container.slideDown('fast', function () {
				$container.addClass('active');
			});
			$this.addClass('on');
		}
	});
	
	
	
	$('.area-select').change(function () {
		const $this = $(this);
		const area = $(this).val()
		let $container;
		let country;
		let areaDropdown;
		if ($this.attr("id") === "state-select") {
			$container = $('.cl-drop-down#state-section');
			country = areareps["US"];
			areaDropdown = '#state-dropdown';
		} else if ($this.attr("id") === "canada-select") {
			$container = $('.cl-drop-down#canada-section');
			country = areareps["Canada"];
			areaDropdown = '#canada-dropdown';
		}
		
		// appendSection is the <div> section containing the dropdown information
		let appendSection = `
			<div>
				<h3>${area}</h3>
			</div>
			<div class="area-selected">`;
		
		// this loop builds each <div> column in the dropdown
		for (let i = 0; i < country[area].length; i++) {

			// some reps have multiple email addresses - this builds the email string
			let emailArray = country[area][i]["email"];
			let emailField = ``;
			if (emailArray instanceof Array) {
				for (let j = 0; j < emailArray.length; j++) {
					emailField += `<span style="text-decoration: underline;"><a href="mailto:${emailArray[j]}">${emailArray[j]}</a></span><br>`
				}
			} else {
				emailField += `<span style="text-decoration: underline;"><a href="mailto:${emailArray}">${emailArray}</a></span><br>`
			}

			appendSection += `
				<div class="area-column">
					<p>
						${country[area][i].name}<br>
						${country[area][i].location}<br>
						Ph: ${country[area][i].phone} <br>
						<br>`;
			// Some locations have no rep name (in Canada)
			if (country[area][i].rep != "") {
				appendSection += `<strong>${country[area][i].rep}</strong> <br>`;
			}
			appendSection += `
						${emailField}
					</p>
				</div>
			`
		}
		
		appendSection += `</div>`;
		
		$(areaDropdown).html($(appendSection));
		if ($container.hasClass('active') && state === "") {
			$('.cl-drop-down.active').slideDown().addClass('active');
			$container.slideUp('fast', function () {
				$container.removeClass('active');
			});
			//$this.removeClass('on');
		} else {
			$('.cl-drop-down.active').slideUp('fast', function() {
				$(areaDropdown).html($(appendSection));
			}).removeClass('active');
			$container.slideDown('fast', function () {
				$container.addClass('active');
			});
			//$this.addClass('on');
		}

	});

	//search icons
    $('.cl-search-icon').click(function () {
		if (!$('#search-form-overlay').is(':visible')) {
		  $('#search-form-overlay').fadeIn();
		}
	});
	$('.icon-cancel').click(function () {
		if ($('#search-form-overlay').is(':visible')) {
		  $('#search-form-overlay').fadeOut();
		}
	});

	//https://dimsemenov.com/plugins/magnific-popup/documentation.html
	$('.popup-video').magnificPopup({
		type: 'iframe',
		fixedContentPos: false
	});
	$('.popup-gallery').each(function (i,e) {
		$(e).magnificPopup({
			delegate: 'a', // child items selector, by clicking on it popup will open
			type: 'image',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
			}
		});
	});
    
    //resizes the main nav on scroll
	main_nav_resizing();
});
    
function main_nav_resizing() {
	$('header').data('size','big');

	$(window).scroll(function () {
		if ($(window).width() > 1000) {
			if($(document).scrollTop() > 50){
				if($('header').data('size') == 'big'){
					$('header').data('size','small');
                    $('#site-header').addClass('scroll');
				}
			} else {
				if($('header').data('size') == 'small'){
					$('header').data('size','big');
                    $('#site-header').removeClass('scroll');
				}
			}
		}
	});
}
})(jQuery);