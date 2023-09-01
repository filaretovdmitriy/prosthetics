document.addEventListener('DOMContentLoaded', function(event) {
	if(document.querySelector('.header')){
		function handleScroll() {
	    var scroll = window.pageYOffset || document.documentElement.scrollTop;
	    var header = document.querySelector('.header');
	    if (scroll > 1) {
	      header.classList.add('show');
	    } else {
	      header.classList.remove('show');
	    }
		}
		handleScroll();
		window.addEventListener('scroll', handleScroll);
		document.querySelector('.header__burger').addEventListener('click', function(event) {
		    var headerBurger = document.querySelector('.header__burger');
		    var menu = document.querySelector('.menu');
		    var body = document.querySelector('body');
		    headerBurger.classList.toggle('active');
		    menu.classList.toggle('active');
		    body.classList.toggle('lock');
		});
		var menuLinks = document.querySelectorAll('.menu__item');
		menuLinks.forEach(function(link) {
		    link.addEventListener('click', function(event) {
		        var headerBurger = document.querySelector('.header__burger');
		        var menu = document.querySelector('.menu');
		        var body = document.querySelector('body');
		        headerBurger.classList.remove('active');
		        menu.classList.remove('active');
		        body.classList.remove('lock');
		    });
		});		
	}


  const sendButton = document.querySelectorAll("[data-topopup]");
  if(sendButton){
	  sendButton.forEach(function (sendButton) {
	    sendButton.addEventListener("click", function (event) {
	    	event.preventDefault();
	    		var body = document.querySelector('body');
		      const dataPopup = this.getAttribute("data-topopup");
		      const dataClassPopup = document.querySelector(`${dataPopup}`);
		      if (dataClassPopup !== null) {
		        dataClassPopup.classList.add("open");
		        body.classList.add('popuplock');	
		      }			  
	    });
	  });  	
  }
	var popupClose = document.querySelectorAll('.popup__close');
	if(popupClose){
		popupClose.forEach(function(popupClose) {
		    popupClose.addEventListener('click', function(event) {
		    		var body = document.querySelector('body');
		    		body.classList.remove('popuplock');	
		    		popupClose.closest('.popup').classList.remove('open');

		    });
		});		
	}

	const sertificateSwiper = document.querySelector('.sertificate__swiper .swiper-wrapper');
	if (sertificateSwiper) {
	    const clonedChildren = Array.from(sertificateSwiper.children).map(child => {
	        const clonedChild = child.cloneNode(true);
	        const dataFancyboxValue = clonedChild.getAttribute('data-fancybox');
	        if (dataFancyboxValue) {
	            clonedChild.setAttribute('data-fancybox', dataFancyboxValue + '-c');
	        }
	        return clonedChild;
	    });
	    clonedChildren.forEach(clonedChild => {
	        sertificateSwiper.appendChild(clonedChild);
	    });
	}
	const reviewsSwiper = document.querySelector('.reviews__swiper .swiper-wrapper');
	if(reviewsSwiper){
		const clonedChildren1 = Array.from(reviewsSwiper.children).map(child => child.cloneNode(true));
		clonedChildren1.forEach(clonedChild => {
		  reviewsSwiper.appendChild(clonedChild);
		});		
	}

  if(document.querySelector('.sertificate__swiper')){
      new Swiper('.sertificate__swiper', {
        spaceBetween: 20,
        slidesPerView: 5,
        loop: true,
			  navigation: {
			    nextEl: '.sertificate__arrow-right',
			    prevEl: '.sertificate__arrow-left',
			  },
		    breakpoints: {
		        1400: {
		            slidesPerView: 5,
		        },
		        1024: {
		            slidesPerView: 4,
		        },
		        850: {
		            slidesPerView: 3,
		        },
		        600: {
		            slidesPerView: 2,
		        },
		        0: {
		            slidesPerView: 1
		        }		        
		    }
      });
   }


  if(document.querySelector('.clients__swiper')){
      new Swiper('.clients__swiper', {
        spaceBetween: 30,
        slidesPerView: 2,
        loop:true,
			  navigation: {
			    nextEl: '.clients__arrow-right',
			    prevEl: '.clients__arrow-left',
			  },
		    breakpoints: {
		        769: {
		            slidesPerView: 2,
		        },
		        0: {
		            slidesPerView: 1,
		        },

		    }
      });
   }
  if(document.querySelector('.reviews__swiper')){
      new Swiper('.reviews__swiper', {
        spaceBetween: 30,
        slidesPerView: 2,
        loop:true,
			  navigation: {
			    nextEl: '.reviews__arrow-right',
			    prevEl: '.reviews__arrow-left',
			  },
		    breakpoints: {
		        769: {
		            slidesPerView: 2,
		        },
		        0: {
		            slidesPerView: 1,
		        },

		    }
      });
   }
 	Fancybox.bind("[data-fancybox]", {
	  Images: {
	  	zoom:true,
	  	zoomOpacity:true,
	  },
	  Thumbs: {
	    type: "classic",
	  },

 	});
});

