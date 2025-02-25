var geojson = { 
    "type": "FeatureCollection",
    "name": "Appalachian Trail",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
    ]
};


var mapManip


document.addEventListener("DOMContentLoaded", function(event){
    console.log(at_centerline["features"][0])
    mapboxgl.accessToken = 'pk.eyJ1IjoiYWFyb25icmV6ZWwiLCJhIjoiY2pwNXNyb3IxMDJwZTNxbzZ4M3IxdGp5ZCJ9.1_DVjqU_cgiK9gt-LGf3DA';
    var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/aaronbrezel/cjq5owl4k9jxm2srqcd1ngint',
    center: [-79.619196, 37.838640],
    zoom: 6.49,
    interactive: false
    }); 
    mapManip = map
   
    map.on('load', function(){
        map.addSource('ATCenterline', {
            type: 'geojson',
            data: at_centerline
        });
        
        
       
        
       
    });
    
})

$(window).resize(function(){
    console.log("resize");
    mapManip.flyTo({
        center: [-70.544710, 38.672591],
        zoom: 4.02,
        bearing: 0,
        speed: 0.5,
        curve: 0.8
    });    
});

function flytoAT (){
    mapManip.flyTo({
        center: [-54.544710, 38.672591],
        zoom: 4.02,
        bearing: 0,
        speed: 0.5,
        curve: 0.8
    });
    mapManip.addLayer({
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
}
