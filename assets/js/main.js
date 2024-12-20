/*
	Stellar by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

document.addEventListener('DOMContentLoaded', function() {
    // 보이지 않는 li 요소의 시작 인덱스
    var startIndex = 9;

    // 모든 li 요소 가져오기
    var listItems = document.querySelectorAll('#ul-projects li');

    // 숨겨진 li 요소 숨기기
    for (var i = startIndex; i < listItems.length; i++) {
        listItems[i].style.display = 'none';
    }
	document.getElementById('button-seeless-projects').style.display = 'none';

    // "See More" 버튼 클릭 시 추가적인 li 요소 보이기
    document.getElementById('button-seemore-projects').addEventListener('click', function() {
        // 숨겨진 li 요소 보이기
        for (var i = startIndex; i < listItems.length; i++) {
            listItems[i].style.display = 'list-item';
        }

        // "See More" 버튼 숨기기
        this.style.display = 'none';
		document.getElementById('button-seeless-projects').style.display = 'block';
    });

	// "See Less" 버튼 클릭 시 추가적인 li 요소 숨기기
    document.getElementById('button-seeless-projects').addEventListener('click', function() {
        // 숨겨진 li 요소 보이기
        for (var i = startIndex; i < listItems.length; i++) {
            listItems[i].style.display = 'none';
        }

        // "See More" 버튼 숨기기
        this.style.display = 'none';
		document.getElementById('button-seemore-projects').style.display = 'block';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // 보이지 않는 li 요소의 시작 인덱스
    var startIndex = 3;

    // 모든 li 요소 가져오기
    var listItems = document.querySelectorAll('#ul-web li');

    // 숨겨진 li 요소 숨기기
    for (var i = startIndex; i < listItems.length; i++) {
        listItems[i].style.display = 'none';
    }
	document.getElementById('button-seeless-web').style.display = 'none';

    // "See More" 버튼 클릭 시 추가적인 li 요소 보이기
    document.getElementById('button-seemore-web').addEventListener('click', function() {
        // 숨겨진 li 요소 보이기
        for (var i = startIndex; i < listItems.length; i++) {
            listItems[i].style.display = 'list-item';
        }

        // "See More" 버튼 숨기기
        this.style.display = 'none';
		document.getElementById('button-seeless-web').style.display = 'block';
    });

	// "See Less" 버튼 클릭 시 추가적인 li 요소 숨기기
    document.getElementById('button-seeless-web').addEventListener('click', function() {
        // 숨겨진 li 요소 보이기
        for (var i = startIndex; i < listItems.length; i++) {
            listItems[i].style.display = 'none';
        }

        // "See More" 버튼 숨기기
        this.style.display = 'none';
		document.getElementById('button-seemore-web').style.display = 'block';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // 보이지 않는 li 요소의 시작 인덱스
    var startIndex = 3;

    // 모든 li 요소 가져오기
    var listItems = document.querySelectorAll('#ul-sw li');

    // 숨겨진 li 요소 숨기기
    for (var i = startIndex; i < listItems.length; i++) {
        listItems[i].style.display = 'none';
    }
	document.getElementById('button-seeless-sw').style.display = 'none';

    // "See More" 버튼 클릭 시 추가적인 li 요소 보이기
    document.getElementById('button-seemore-sw').addEventListener('click', function() {
        // 숨겨진 li 요소 보이기
        for (var i = startIndex; i < listItems.length; i++) {
            listItems[i].style.display = 'list-item';
        }

        // "See More" 버튼 숨기기
        this.style.display = 'none';
		document.getElementById('button-seeless-sw').style.display = 'block';
    });

	// "See Less" 버튼 클릭 시 추가적인 li 요소 숨기기
    document.getElementById('button-seeless-sw').addEventListener('click', function() {
        // 숨겨진 li 요소 보이기
        for (var i = startIndex; i < listItems.length; i++) {
            listItems[i].style.display = 'none';
        }

        // "See More" 버튼 숨기기
        this.style.display = 'none';
		document.getElementById('button-seemore-sw').style.display = 'block';
    });
});

//see button 클릭시 부드러운 스크롤 구현
document.addEventListener('DOMContentLoaded', function() {
	var buttons = document.querySelectorAll('.seebutton');
	buttons.forEach(function(button) {
		button.addEventListener('click', function(event) {
			event.preventDefault(); // 기본 동작 방지
			var targetId = this.getAttribute('href').substring(1); // 링크의 대상 ID 가져오기
			var targetElement = document.getElementById(targetId);
			if (targetElement) {
				// 대상 섹션으로 스무스 스크롤링
				targetElement.scrollIntoView({ behavior: 'smooth' });
			}
		});
	});
});

function scrollToTop() {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
}



(function($) {

	var	$window = $(window),
		$body = $('body'),
		$main = $('#main');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '361px',   '480px'  ],
			xxsmall:  [ null,      '360px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Nav.
		var $nav = $('#nav');

		if ($nav.length > 0) {

			// Shrink effect.
				$main
					.scrollex({
						mode: 'top',
						enter: function() {
							$nav.addClass('alt');
						},
						leave: function() {
							$nav.removeClass('alt');
						},
					});

			// Links.
				var $nav_a = $nav.find('a');

				$nav_a
					.scrolly({
						speed: 1000,
						offset: function() { return $nav.height(); }
					})
					.on('click', function() {

						var $this = $(this);

						// External link? Bail.
							if ($this.attr('href').charAt(0) != '#')
								return;

						// Deactivate all links.
							$nav_a
								.removeClass('active')
								.removeClass('active-locked');

						// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
							$this
								.addClass('active')
								.addClass('active-locked');

					})
					.each(function() {

						var	$this = $(this),
							id = $this.attr('href'),
							$section = $(id);

						// No section for this link? Bail.
							if ($section.length < 1)
								return;

						// Scrollex.
							$section.scrollex({
								mode: 'middle',
								initialize: function() {

									// Deactivate section.
										if (browser.canUse('transition'))
											$section.addClass('inactive');

								},
								enter: function() {

									// Activate section.
										$section.removeClass('inactive');

									// No locked links? Deactivate all links and activate this section's one.
										if ($nav_a.filter('.active-locked').length == 0) {

											$nav_a.removeClass('active');
											$this.addClass('active');

										}

									// Otherwise, if this section's link is the one that's locked, unlock it.
										else if ($this.hasClass('active-locked'))
											$this.removeClass('active-locked');

								}
							});

					});

		}

	// Scrolly.
		$('.scrolly').scrolly({
			speed: 1000
		});

})(jQuery);