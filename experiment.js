$( document ).ready(function() {
    console.log("Get funky");


    $('body').on('click', '#projIcon1', function (e) {  
        console.log('Project 1 Icon Button was clicked')              

        return $('.projectDescrip1').toggle();


        });    

    
    $('body').on('click', '#aboutMeButton', function (e) {  
        console.log('About Me Button was clicked')      

        //.fadeIn('5000') <-- Need to make it fade, doesn't work correctly

        return $('#aboutMe').toggle();


        });                
    




});