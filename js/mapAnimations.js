document.addEventListener("DOMContentLoaded", function(event){
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