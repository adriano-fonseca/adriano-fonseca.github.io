$(document).ready(function(){


	$("#portfolio-contant-active").mixItUp();


	$("#testimonial-slider").owlCarousel({
	    paginationSpeed : 500,      
	    singleItem:true,
	    autoPlay: 3000,
	});
	
	 $('a[href*="#"]:not([href="#"])').click(function() {
	  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
	    var target = $(this.hash);
	    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	    if (target.length) {
	      $('html, body').animate({
	        scrollTop: target.offset().top
	      }, 1000);
	      return false;
	    }
	  }
	});

	$('#sendEmail').click(function() {

		var msg = 'Name: ' + $('#yourName').val() + ' \n Email: ' + $('#emailAddress').val() + ' \n Subject: ' + $('#subject').val() + ' \n Message: ' + $('#yourMessage').val();
		
		AWS.config.update({
      accessKeyId: 'AKIAJNHLSZBWXA7QFILQ',
      secretAccessKey: 'JdsKq4I05yaPCorin/2wV+vO7DSLrH5L1aeL3idX',
      region: 'sa-east-1'
    });

    var sns = new AWS.SNS();
		sns.publish({
			Message: msg,
			TopicArn: 'arn:aws:sns:sa-east-1:128489220762:allumy_contato',
		}, function(err, data) {
				$.toast({
						heading: 'Obrigado pelo seu contato',
						text: 'Entraremos em contato em breve.',
						position: 'top-right',
						icon: 'info'
				})
				
				if (err) {
					console.log(err.stack);
					return;
				}
			});

	});



	$("#clients-logo").owlCarousel({
		autoPlay: 3000,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
	});

	$("#works-logo").owlCarousel({
		autoPlay: 3000,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
	});


	// google map
		var map;
		function initMap() {
		  map = new google.maps.Map(document.getElementById('map'), {
		    center: {lat: -34.397, lng: 150.644},
		    zoom: 8
		  });
		}


	// Counter

	$('.counter').counterUp({
        delay: 10,
        time: 1000
    });


	// Initialize WOW.js Scrolling Animations
    new WOW().init();
});