$(function(){
    //Init Controller
    var controller = new ScrollMagic.Controller();
    var headlineFadeIn = new TweenMax.to('#headline', 4, {
        opacity: 1
    });
    var headlineFadeOut = new TweenMax.to('#headline', 4, {
        opacity: 0
    });
    
    var headlineScene1 = new ScrollMagic.Scene({
        triggerElement: '#headlineScene1',
        reverse: true
    })
    .setTween(headlineFadeIn)
    .addIndicators()    
    .setPin('#headline')
    .addTo(controller);
    
    var headlineScene2 = new ScrollMagic.Scene({
        triggerElement: '#headlineScene2',
        reverse: true
    })
    .setTween(headlineFadeOut)
    .addIndicators()    
    .setPin('#headline')
    .addTo(controller);
    
    
});




