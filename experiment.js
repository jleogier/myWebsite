$( document ).ready(function() {
    console.log("Get funky");

    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        appendDots: $('.dotsHere'),

        responsive: [{
            breakpoint: 700,
            settings: {
                arrows: true,
                appendArrows: $('.arrowsHere'),
            }
        }]

        
    });

    $('.autoslide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        vertical: true,
        verticalSwiping: true,
        pauseOnHover: true,
        arrows: false,
    });



    // TO BE DELETED EVENTUALLY:


    // // Toggles Project 1 details
    // $('body').on('click', '#projIcon1', function (e) {  
    //     console.log('Project 1 Icon Button was clicked')              
    //     return $('#projectDescrip1').toggle();
    //     });    


    // // Toggles Project 2 details
    // $('body').on('click', '#projIcon2', function (e) {  
    //     console.log('Project 2 Icon Button was clicked')              
    //     return $('#projectDescrip2').toggle();
    //     });  


    //         // Toggles Project 3 details
    // $('body').on('click', '#projIcon3', function (e) {  
    //     console.log('Project 3 Icon Button was clicked')              
    //     return $('#projectDescrip3').toggle();
    //     });  


    
    // // Toggles About Me section
    // $('body').on('click', '#aboutMeButton', function (e) {  
    //     console.log('About Me Button was clicked')          
    //     return $('#aboutMe').fadeToggle('slow');
    //     });                
    
});