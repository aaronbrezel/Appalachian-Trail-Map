var geojson = { 
    "type": "FeatureCollection",
    "name": "Appalachian Trail",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
    ]
};

//Scroll percentage function taken (with much gratitude) from https://stackoverflow.com/questions/2387136/cross-browser-method-to-determine-vertical-scroll-percentage-in-javascript/9348993
$(window).on('scroll', function(){
    var s = $(window).scrollTop(),
        d = $(document).height(),
        c = $(window).height();
  
    var scrollPercent = (s / (d - c)) * 100;
    
    var at_progress = (scrollPercent/86.82767564293172) * 100;
    if (at_progress > 100){
        at_progress = 100;
    }
    console.clear();
    console.log(at_progress);
  })



document.addEventListener("DOMContentLoaded", function(event){
    console.log(at_centerline["features"][0])
    mapboxgl.accessToken = 'pk.eyJ1IjoiYWFyb25icmV6ZWwiLCJhIjoiY2pwNXNyb3IxMDJwZTNxbzZ4M3IxdGp5ZCJ9.1_DVjqU_cgiK9gt-LGf3DA';
    const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/aaronbrezel/cjq5owl4k9jxm2srqcd1ngint',
    center: [-73.924021, 38.221375],
    zoom: 3
    }); 
    map.on('load', function(){
        map.addSource('ATCenterline', {
            type: 'geojson',
            data: at_centerline
        });
        map.addLayer({
            'id': 'ATCenterline',
            'type': 'line',
            'source': 'ATCenterline',
            'layout': {
                'line-join': 'round',
                'line-cap': 'round'
            },
            'paint':{
                'line-color': '#f21818',
                'line-width': 1
            }
        });
    });
   
})