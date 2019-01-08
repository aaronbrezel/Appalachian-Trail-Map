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
        var headline = document.getElementById('headline');
        var firstGraf = document.getElementById('firstGraf');
        var map = document.getElementById('map');
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

function begin() {
    console.log("Begin");
    var beginButton = document.createElement("button");
    var begin = document.createTextNode("Begin");
    beginButton.appendChild(begin);
    beginButton.className = "btn btn-secondary btn-lg";
    document.body.appendChild(beginButton);
    beginButton.id = "beginButton"
    beginButton = document.getElementById("beginButton")
    TweenMax.to(beginButton, 3, { opacity: 1 });
    beginButton.addEventListener("click", openwide);
    
}

function openwide(){
    console.log("open wide");
    TweenMax.to(map, 0.5, { xpercent: 50})
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



