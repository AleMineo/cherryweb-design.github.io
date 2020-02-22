// JavaScript Document




//animation scrolling
$(document).ready(function(){
  $("#nav li a").click(function(event){
    event.preventDefault();
    var offset = $($(this).attr('href')).offset().top;
	$('html, body').animate({scrollTop:offset}, 1000, 'easeOutQuad');
  });
});


 var stickyNavTop = $('#nav').offset().top;  
      
    var stickyNav = function(){  
    var scrollTop = $(window).scrollTop();  
           
    if (scrollTop > stickyNavTop) {   
        $('#nav').addClass('sticky');  
    } else {  
        $('#nav').removeClass('sticky');   
    }  
    };  
      
    stickyNav();  
      
    $(window).scroll(function() {  
        stickyNav();  
    }); 


//portfolio isotope
$(function(){
      
      var $container = $('#container');

      $container.isotope({
        itemSelector : '.element'
      });
      
      
      var $optionSets = $('#options .option-set'),
          $optionLinks = $optionSets.find('a');

      $optionLinks.click(function(){
        var $this = $(this);
        // don't proceed if already selected
        if ( $this.hasClass('selected') ) {
          return false;
        }
        var $optionSet = $this.parents('.option-set');
        $optionSet.find('.selected').removeClass('selected');
        $this.addClass('selected');
  
        // make option object dynamically, i.e. { filter: '.my-filter-class' }
        var options = {},
            key = $optionSet.attr('data-option-key'),
            value = $this.attr('data-option-value');
        // parse 'false' as false boolean
        value = value === 'false' ? false : value;
        options[ key ] = value;
        if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
          // changes in layout modes need extra logic
          changeLayoutMode( $this, options )
        } else {
          // otherwise, apply new options
          $container.isotope( options );
        }
        
        return false;
      });

      
    });
//fine portfolio isotope




	
						
						




// Using $(document).ready never hurts
	$(document).ready(function(){

		// Cookie setting script wrapper
		var cookieScripts = function () {
			// Internal javascript called
			console.log("Running");
		
			
		}
	
		/* Call cookiesDirective, overriding any default params
		
			*** These are the defaults ***
				explicitConsent: true,
				position: 'top',
				duration: 10,
				limit: 0,
				message: null,				
				cookieScripts: null,
				privacyPolicyUri: 'privacy.html',
				scriptWrapper: function(){},	
				fontFamily: 'helvetica',
				fontColor: '#FFFFFF',
				fontSize: '13px',
				backgroundColor: '#000000',
				backgroundOpacity: '80',
				linkColor: '#CA0000'
				
		*/
		
		$.cookiesDirective({
			privacyPolicyUri: 'privacy-policy.html',
			explicitConsent: false,
			position : 'top',
			scriptWrapper: cookieScripts, 
			cookieScripts: 'Google Analytics, Shinystat, Google ADsense ', 
			backgroundColor: '#cc0099',
			linkColor: '#ffffff'
		});
	});
	

