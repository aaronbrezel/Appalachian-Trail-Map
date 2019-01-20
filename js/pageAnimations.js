var scrollPercent





//Scroll percentage function taken (with much gratitude) from https://stackoverflow.com/questions/2387136/cross-browser-method-to-determine-vertical-scroll-percentage-in-javascript/9348993
$(window).on('scroll', function(){
    var s = $(window).scrollTop(),
        d = $(document).height(),
        c = $(window).height();
  
    ATscrollPercent = (s / (d - c)) * 100;
    
    var at_progress = (ATscrollPercent/86.82767564293172) * 100;
    if (at_progress > 100){
        at_progress = 100;
    }
    //console.clear();
    //console.log(ATscrollPercent);
  })



  $(window).on('load', function(){
    
    var a = $(window).scrollTop(),
        b = $(document).height(),
        c = $(window).height();
    scrollPercent = (a / (b - c)) * 100;
    //console.log(scrollPercent);
    //If the page loads at the top, then the initial fade-in animation is run
    //if (scrollPercent == 0){
    

    //*********************************************************
    //Create Skip button to go straight to the article
    //*********************************************************
    var skipButton = document.createElement("button");
    var skip = document.createTextNode("Skip");
    skipButton.appendChild(skip);
    skipButton.className = "btn btn-secondary btn-lg";
    skipButton.setAttribute("id", "skipButton");
    skipButton.id = "skipButton"
    document.body.appendChild(skipButton);
    skipButton.addEventListener("click", skiptoMain);


    //***********************************************************
    //Initial load animation, fade-in's, etc. On complete, the
    //begin button is made with "begin()" function
    //***********************************************************
    var headline = document.getElementById('headline');
    var firstGraf = document.getElementById('firstGraf');
    var headlineTimeline = new TimelineMax({onComplete: begin});
    headlineTimeline.to(headline, 2, { opacity: 1 })
    .to(headline, 1, { opacity: 1 })
    .to(headline, 1, { opacity: 1 })
    .to(headline, 2, { opacity: 0 })
    .to(map, 2, { opacity: 1 })
    .to(map, 2, { opacity: 1 })
    .to(firstGraf, 2.5, { opacity: 1 })
    .to(firstGraf, 10, { });
    //}
    

});

//*********************************************************
//Begin() creates begin button from scratch and fades it in
//*********************************************************

function begin() {
    console.log("Begin");
    
    var beginButton = document.createElement("button");
    var begin = document.createTextNode("Begin");
    beginButton.appendChild(begin);
    beginButton.className = "btn btn-secondary btn-lg";
    beginButton.id = "beginButton"
    document.body.appendChild(beginButton); //actually adds the begin button element to the body so it is visible
    //fades in the button in
    TweenMax.to(beginButton, 3, { opacity: 1 });
    beginButton.addEventListener("click", openwide);
    
}

function openwide(){
    console.log("open wide");
    document.body.removeChild(skipButton); //removes skip button 
    document.body.removeChild(beginButton); //removes begin button
    //restyling headline
    headline.style.position = "absolute";
    headline.style.top = "0%";
    headline.style.left = "0%";
    headline.style.textAlign = "left";
    headline.style.padding = "2%";

    //animation after beginButton is pressed
    var openWideTimeline = new TimelineMax();
    openWideTimeline.to(map, 3, { width: "33%", right: 0 })
    openWideTimeline.to(firstGraf, 3, { width: "66%", left: 0}, "-=3")
    openWideTimeline.to(headline, 1, { opacity: 1})
    //reorientate the map for the whole AT
    console.log(map)
    flytoAT();

}

function skiptoMain(){
    //Run when Skip button is pressed, go straight to the copy of the article
   // headlineTimeline.timeScale(2);
}



$(function(){
    /*
    //Init Controller
    var controller = new ScrollMagic.Controller();

    var headlineFadeIn = new TweenMax.to(headline, 4, {
        opacity: 1
    });
    var headlineFadeOut = new TweenMax.to(headline, 5, {
        opacity: 0,
        //onComplete: firstGrafFadeIn()
    });

    var firstGraf
    

    var headlineScene1 = new ScrollMagic.Scene({
        triggerElement: '#headlineScene1',
        reverse: false,
        duration: 170
    })
    .setTween(headlineFadeIn)
    .addIndicators()    
    .addTo(controller);

    var headlineScene2 = new ScrollMagic.Scene({
        triggerElement: '#headlineScene1',
        reverse: false,
        offset: 170,
       // ease:    
    })
    .setTween(headlineFadeOut)
    .addIndicators()
    .addTo(controller);
    
    /*var headlineScene2 = new ScrollMagic.Scene({
        triggerElement: '#headlineScene2',
        reverse: true,
        
    })
    .setTween(headlineFadeOut)
    .addIndicators()    
    .addTo(controller);
    */
   
  
});



