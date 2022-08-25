      // toggle menu/navbar script
       $('.menu-btn ').click(function(){
        $('.menu ul').toggleClass("active");
       
    });



//     /*===== SCROLL REVEAL ANIMATION =====*/
const sr= ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true,
    useDelay: 'once'
});




/*SCROLL HOME*/
sr.reveal('.heading-text',{}); 
sr.reveal('.home-para',{delay: 200}); 
sr.reveal('.home-btn',{interval: 50}); 
sr.reveal('.home-img',{ interval: 200,origin:'right'}); 


// SCroll facilities  
sr.reveal('.fac-card',{delay:200})

/*SCROLL ABOUT*/
sr.reveal('.about-img',{delay:100,origin:'left'}); 
sr.reveal('.facilites',{delay: 50}); 
sr.reveal('.about-text',{delay: 50}); 

/*SCROLL Services */
sr.reveal('.services-para',{}); 
sr.reveal('.card',{delay:100}); 


// /*SCROLL Story*/
sr.reveal('.heading-text-2',{interval: 200}); 
sr.reveal('.story-para',{interval: 200}); 
sr.reveal('.story-item',{interval: 200}); 
sr.reveal('.story-img',{interval: 200}); 

// /*SCROLL staff*/
sr.reveal('.staff-para',{}); 

// /*SCROLL Appointment*/
sr.reveal('.app-text',{origin:'left'}); 
sr.reveal('.appoinment',{}); 

// /*SCROLL Newsletter */
sr.reveal('.Newsletter',{}); 

