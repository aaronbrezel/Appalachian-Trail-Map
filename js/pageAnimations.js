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

  //create timeline to run when page loads
  var headlineTimeline = new TimelineMax({onComplete: begin});

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
        
    


    if (window.innerWidth > 875){ // only run the full fade animation if the screen is larger than 875 pixels
        
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
        
        headlineTimeline.to(headline, 2, { opacity: 1 })
        .to(headline, 0.5, { opacity: 1 })
        .to(headline, 0.5, { opacity: 1 })
        .to(headline, 1, { opacity: 0 })
        .to(map, 2, { opacity: 1 })
        .to(map, 2, { opacity: 1 })
        .to(firstGraf, 1.5, { opacity: 1 })
        .to(firstGraf, 5, { });
    }
    else {
        skiptoMain();
    }


    
    

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

var mainCopy = document.getElementById("firstParagraph")

function openwide(){
    console.log("open wide");
    if (typeof skipButton != "undefined"){ //checks if the skip button even exists
        document.body.removeChild(skipButton); //removes skip button
    }
    if (typeof beginButton != "undefined"){ //checks if the begin button even exists
        document.body.removeChild(beginButton); //removes begin button
    } 
    restyleHeadline();
    
    //animation after beginButton is pressed
    var openWideTimeline = new TimelineMax();
    openWideTimeline.to(map, 3, { width: "33%", right: 0, position: "fixed", ease: Power3.easeOut})
    //.add(restyleHeadline)
    .to(firstGraf, 3, { width: "66%", left: "5px", top: "10%", margin: 0, padding: "3%", ease: Power3.easeOut}, "-=3")
    .to($("#firstParagraph"), 3, {fontSize: "1rem", textAlign: "left"}, "-=3")
    .add(addCopy)
    .add(function(){TweenMax.to($("#mainCopy"), 3, { opacity: 1})})
    
    .to(headline, 5, { opacity: 1})
    
    //reorientate the map for the whole AT
    console.log(map)
    flytoAT();

}

function skiptoMain(){
    console.log("What is you doing?");
    headlineTimeline.kill();
    if (typeof skipButton != "undefined"){ //checks if the skip button even exists
        document.body.removeChild(skipButton); //removes skip button
    }
    var skipTimeline = new TimelineMax();
    skipTimeline.to(document.body, 1, {opacity: 0})
    if (window.innerWidth > 875){ //checks if window is under a certain size
        skipTimeline.to(map, 0, { width: "33%", right: 0, position: "fixed" })
        .to(firstGraf, 0, { width: "66%", left: "5px", top: "10%", margin: 0, padding: "3%"})
        
    }
    else{ //if it is, then stack text on top of map.
        skipTimeline.to(map, 0, { width: "100%", position: "fixed"})
        .to($("#text"), 0, { position: "relative"})
        .to(firstGraf, 0, { width: "100%", float: "left", margin: "0"})
    }
    skipTimeline.to($("#firstParagraph"), 0, {fontSize: "1rem", textAlign: "left"})
    .add(addCopy)
    .add(function(){TweenMax.to($("#mainCopy"), 3, { opacity: 1})})
    .add(restyleHeadline)
    .add(flytoAT)
    .to(headline, 0, { opacity: 1})
    .to(firstGraf, 0, {opacity: 1})
    .to(map, 0, {opacity: 1})
    .to(document.body, 1, {opacity: 1})

}

function addCopy(){
    var restOfText = "<div id='mainCopy'><p></p><p>There is absolutely no logical reason to hike the Appalachian Trail. It&rsquo;s an endless cycle of woods, rocks, bugs and mountains, punctuated only by rain and the occasional hailstorm. There&rsquo;s no monk on the highest peak and no prize when you finish&mdash;just a picture in front of a beat-up park sign. You spend most of your time on the trail in any combination of sore, injured, wet, smelly, exhausted or hungry. But so many who hike the Appalachian Trail spend the rest of their lives wishing they could go back.</p><p>The Appalachian Trail runs for 2,190 miles from Springer Mountain in Georgia to Mount Katahdin in Maine. Each year, thousands attempt to &ldquo;thru-hike&rdquo; the &ldquo;A.T.,&rdquo; that is, walk the entire trail in one go. This typically takes between four to seven months. The Appalachian Trail Conservancy estimates that the total elevation gain and loss is the equivalent to climbing Mountain Everest from sea-level to summit and back down again, 16 times. Only one in four thru-hikers ever finish.</p><p>However illogical, Appalachian Trail culture is based on this daunting totality and the mystical notion of a six-month-long walk in the woods. I hesitate to make too many generalizations as every hiker&rsquo;s time on the A.T. is different. But, if the sheer number of trail journals and self-published books are any indication, for many it is an intensely introspective experience. Despite the thousands of thru-hikers and many more section and day hikers, most of a thru-hiker&rsquo;s time on the trail is spent walking alone.</p><p>I started interviewing thru-hikers with the expectation of hearing heroic stories of self-reliance. Like many college-educated suburbanites with too many degrees and too little common sense, I read books like &ldquo;Into the Wild,&rdquo; and quietly fantasized about abandoning my comfortable but programmed life. I would find whatever my life was missing in the woods. The irony that Chris McCandless died of his own stupidity did not deter me at all. Even after hearing the harsh realities of the trail, I don&rsquo;t think I&rsquo;ve completely abandoned this dream. After every interview, a part of me wanted to throw my notepad into the garbage and go to the trail.</p><p>What I did learn, is that hiking the Appalachian Trail is not about erasing your past. One of the refrains on the A.T. is that you don&rsquo;t leave your life behind on the trail, you take it with you. Of the hikers I spoke to, this was true.</p><p>Like most who hike the Appalachian Trail, Ken Hall set his sights on Katahdin long before he stepped foot on Springer Mountain. Hall grew up and continues to live in Eastman, a small town in central Georgia. The way he says &ldquo;Vuh-gin-ya&rdquo; makes me swoon. As a child, he would camp in mountains of Georgia and North Carolina with his grandfather. But it was when he was in his 50&rsquo;s that the challenge of the Appalachian Trail began to crystallize in his mind.</p><p>Taking six months out of one&rsquo;s life is rarely a spur-of-the-moment decision for anyone. To do this, Hall would have to leave his 30-year career writing contracts for the U.S. Air Force. He would have to leave his wife Deb with all his responsibilities around the house. They never had kids, but she would have to tend to elderly parents alone. In particular, Hall&rsquo;s mother, Jean, was in her 80&rsquo;s.</p><p>Another important thing to know about Hall is that he is very close with his extended family. While on the trail, he would miss gatherings, birthdays anniversaries and baptisms. The guilt of leaving his family behind would gnaw at him worse than the hunger.</p><p>It is customary for Appalachian Trail hikers to adopt a trail name. This is not a formality. Without exception, every person I spoke to exclusively referred to fellow hikers by their trail names. A few even suggested I refer to him or her by his or her trail name in this story. The practical justification for these nicknames is safety. Who knows what kind of crazy people you might meet on the trail? The spiritual one stresses the purity of an anonymous journey. I think hikers just like the hokey fun of it.</p><p>There are usually two ways to get a trail name. You either pick one yourself or let the trail decide for you. Anna Huthmaker is the founder and executive director of Trail Dames, a non-profit that organizes hikes for women. She fell into a puddle on the first hike she ever went on. In the words of her trail journal, &ldquo;Thus, &lsquo;Mud Butt&rsquo; was born.&rdquo;</p><p>In Hall&rsquo;s case, he let friends and family decide. It was at a 2013 New Year&rsquo;s Eve party, about three and a half months before the hike. A list of names was put on a ballot. Sawtooth, Double Ought and Lighterknot were among them. Each referred to an aspect of Hall&rsquo;s life. His mom lobbied hard for Lighterknot. She named him the first time around; it only made sense to do it again. Lighterknot refers to the heartwood of long-dead pine trees. As the tree decays, the resin inside hardens, making the wood notoriously resilient. A Southern saying goes that a person can be, &ldquo;tougher than a Lighterknot.&rdquo; For Hall&rsquo;s 2,190-mile journey on the Appalachian Trail, he would need to be.</p><p>On April 14<sup>th</sup>, 2014, Hall, began his hike with a ceremonial walk up Springer Mountain. The following day, Deb and his mom, who travelled the three and a half hours North with her, saw him off for good. In the final moments, mom wanted to say a prayer. The three joined hands while she launched, by Hall&rsquo;s memory into, &ldquo;a rather lengthy prayer.&rdquo; So she prayed and prayed. Eventually, she started repeating herself. Forty years ago, Hall&rsquo;s mom had hiked a section of the Georgia&nbsp;A.T. with several friends and a 50-pound backpack. She knew what her son was getting into. Maybe this was her way of delaying his walk to the last possible second. After saying goodbye, Hall, now Lighterknot, disappeared into the tree line.</p><p>Once on the Appalachian Trail, hikers quickly lose weight and the injuries accumulate almost as fast as miles. Trail Angels are the only way most manage to keep going. A Trail Angel is anyone who provides any kind of help for hikers. This could be a cup of hot coffee on a cold morning served at a road crossing or a ride into town for someone in need of a resupply and a warm bed. These acts of kindness are called, &ldquo;Trail Magic.&rdquo; Simple gestures have big impacts. At Unicoi Gap, 50 miles and six days out from Springer Mountain, a Trail Angel handed Lighterknot a bag of chips. His trail journal reads, &ldquo;They were the best chips [I] ever tasted.&rdquo;</p><p>With so many people on the Appalachian Trail in recent years, hiking it has become a more social event. &ldquo;Hiker bubbles&rdquo; form, a group of thru-hikers all inch-worming up the trail at roughly the same speed. Folks hike at their own pace, so most still walk by themselves, but at various points in the day and at the shelters where you camp, you see familiar faces. Rough terrain and bad weather are both good icebreakers.</p><p>For the first few hundred miles on the A.T. Lighterknot hiked with a man named Tick Spit. Yep. Tick Spit looked to be in his mid-sixties and claimed to be on his second thru-hike attempt. He dispensed several nuggets of wisdom. One of them went: once you hike the first 200, 300 miles, you know you&rsquo;re physically capable of hiking the Appalachian Trail. After that, the challenge becomes mental. Lighterknot was already discovering how right Tick Spit was.&nbsp;</p><p>Lighterknot had just crossed the James River in Virginia when his emotions welled over. It was a Sunday and his nephew Carter Seward was undergoing an adult baptism with his wife Natasha. There was already the hunger and the biting bugs. On top of that, there was already a three-mile, 2000 ft. climb right after the river crossing, according to his trail journal.</p><p>&ldquo;I was physically exhausted, emotionally exhausted and then this family event was taking place and I couldn&rsquo;t be there,&rdquo; Hall said.&nbsp;</p><p>On top of a mountain, Deb gave him a call and put Carter on. Lighterknot wanted to talk to him on the phone, but the right words wouldn&rsquo;t come out. The most he could tell Carter that he was proud of him.</p><p>It was his family that helped push Lighterknot through his lowest points. His niece, Melissa Seward, send him a motivational text message every day he was on the trail, 167 texts total. These could be morale-boosting quotes, bible verses or just positive statements. On days that Lighterknot hiked out of cell service, he looked forward to the times when the backed-up messages came through and he&rsquo;d get two or three at once. Deb also made regular visits to the trail to bring him into town, clean him up and get him several thousand calories of whatever a nearby diner was serving.</p><p>&ldquo;I probably wouldn&rsquo;t have made it to Virginia,&rdquo; without Deb, Lighterknot said.</p><p>&nbsp;Lighterknot&rsquo;s mother even came up from Eastman to visit him in Shenandoah National Park. By then, he had lost so much weight and grown such a beard, that she didn&rsquo;t even recognize him.</p><p>The Appalachian Trail is magnetic. Every hiker I spoke to said as much. Before stepping foot on Springer Mountain (or in one South bounder&rsquo;s case, Katahdin), something intangible was pulling them onto the trail. For one, it was a romantic notion of adventure. For another, it was a chance to take a break. One liked the idea of stripping life to the basics. Lighterknot was looking for the challenge. What they all had in common was that they <em>needed to do it</em>.</p><p>After mile, say, 1,000 that mystic tug dissipates and you're left with a muddy trail and ramen noodles for five straight days. What&rsquo;s stopping you from hitching a ride home on the next highway you see?</p><p>Lighterknot was tempted in Vermont. Deb was up from Eastman for one of her routine visits. She had picked up him in Salisbury, Conn. The trail passes right through the town in the far northwest corner of the state. Deb then followed Lighterknot up in a rental car for about 90 miles through Massachusetts and into Vermont over the course of about a week. Lighterknot lived the pampered life during that time&mdash;relatively speaking. He still hiked every day, but he also slept in a hotel with his wife and ate cooked food. This did little to fill out his gaunt frame. As Deb made ready to leave in Bennington, Lighterknot felt like he could go with her. Whatever challenge he&rsquo;d hoped to find on the Appalachian Trail, he found it. Whatever sights he wanted to see, he&rsquo;d seen them. He&rsquo;d squatted in the woods more in one week than most people did in a lifetime. Some 580 miles from Katahdin and the end, he could be done.</p><p>He told Deb as much.</p><p>Three and a half months earlier, Tick Spit had given Lighterknot another piece of advice. He said, if you decide to hike the Appalachian Trail, make sure you finish. Because if you give up, you&rsquo;ll just be back anyway. No hiker named Tick Spit finished the A.T. in 2014, at least according to records kept by the Appalachian Trail Conservancy. But Lighterknot still could.</p><p>Deb gave him the final push. She said he had already invested too much time an effort to quit now.</p><p>Lighterknot summited Katahdin on Sept. 30, 170 days after trudging up Springer Mountain. That day, he hiked with Tee Bird and Mighty Blue, two older hikers he linked up with in New Hampshire. They didn&rsquo;t speak much on the way up. Katahdin is one of the toughest climbs on the Appalachian Trail. It rises prominently from the surrounding wilderness. Lighterknot, Tee Bird and Mighty Blue had to navigate lose rocks, boulders and exposure above the tree line. But adrenaline powered all three quickly up the mountain. Mist and cold rain soon enveloped them.</p><p>As the terrain levelled out, a brown park sign appeared from the fog. It sat on an A-frame. This was as high as they could go. Written in white paint, weathered to the point that it was hardly legible it read:</p><p class='katSign' style='font-size: 2em;'>KATAHDIN</p><p class='katSign'>BAXTER PEAK &ndash; ELEVATION 5257 FT.</p><p class='katSign'>NORTHERN TERMINUS OF THE</p><p class='katSign' style='font-size: 1.5em;'>APPALACHIAN TRAIL</p><p class='katSign'>A MOUNTAIN FOOTPATH EXTENDING OVER</p><p class='katSign'>2000 MILES TO SPRINGER MTN. GEORGIA</p><p>Several thru-hikers were summiting at the time, including a man Lighterknot met in Georgia. Everyone got their moment in front of the sign. He used his for a photo and a thankful prayer for a safe journey. After 30 minutes, it was time to walk down.</p></div>"
    $("#firstParagraph").append(restOfText);  
}

function restyleHeadline(){
    //restyling headline
    headline.style.position = "relative";
    headline.style.top = "0%";
    headline.style.left = "0%";
    headline.style.width = "66%";
    headline.style.textAlign = "left";
    headline.style.padding = "2%";
    headline.style.paddingLeft = "3%";
    headline.style.paddingBottom = "1%";
    headline.style.display = "block";
    headline.style.clear = "both";
    if(window.innerWidth <= 875){
        headline.style.backgroundColor = "rgb(255,255,255,0.4)"
        headline.style.width = "100%"
        headline.style.paddingLeft = "15%"

    }
}


