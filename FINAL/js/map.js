var pages = ["chichenitza", "christredeemer", "colosseum", "greatwall", "machupicchu", "petra", "tajmahal"];

function goTo() {
    window.location.href = "./" + pages[slideIndex] + ".html";
}

var map;
var lat;
var lon;
var myLatLng = {};
myLatLng = {
    lat: 30,
    lng: 0
};
var chichenitza;

function initMap() {  
    var styledMapType = new google.maps.StyledMapType([
    {
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f5f5"
            }
        ]
    },
    {
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#616161"
            }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#f5f5f5"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#bdbdbd"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#eeeeee"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#757575"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e5e5e5"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#9e9e9e"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#757575"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dadada"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#616161"
            }
        ]
    },
    {
        "featureType": "road.local",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#9e9e9e"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e5e5e5"
            }
        ]
    },
    {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#eeeeee"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#c9c9c9"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#9e9e9e"
            }
        ]
    }],
    {name: 'Custom Styled'});


    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 2,
        minZoom: 2,
        center: myLatLng,
        mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                    'styled_map']
          }

    });

    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');


    chichenitza = new google.maps.Marker({
        position: {
            lat: 20.6843,
            lng: -88.5678
        },
        map: map
    });

    var chichenitzaDescription = 
    '<div class="info-title">Chichén Itzá</div>' +
    '<div class="info-location">Yucatan, Mexico</div>'; 

    var chichenitzaInfoWindow = new google.maps.InfoWindow({
        content: chichenitzaDescription
    });


    chichenitza.addListener('click', function() {
        window.location.href = "chichenitza.html";
    });

    chichenitza.addListener('mouseover', function() {
        chichenitzaInfoWindow.open(map, chichenitza);
    });

    chichenitza.addListener('mouseout', function() {
        chichenitzaInfoWindow.close(map, chichenitza);
    });



    christredeemer = new google.maps.Marker({
        position: {
            lat: -22.9519,
            lng: -43.2105
        },
        map: map
    });

    var christredeemerDescription = 
    '<div class="info-title">Christ the Redeemer</div>' +
    '<div class="info-location">Rio de Janeiro, Brazil</div>'; 

    var christredeemerInfoWindow = new google.maps.InfoWindow({
        content: christredeemerDescription
    });


    christredeemer.addListener('click', function() {
        window.location.href = "christredeemer.html";
    });

    christredeemer.addListener('mouseover', function() {
        christredeemerInfoWindow.open(map, christredeemer);
    });

    christredeemer.addListener('mouseout', function() {
        christredeemerInfoWindow.close(map, christredeemer);
    });



    colosseum = new google.maps.Marker({
        position: {
            lat: 41.8902,
            lng: 12.4922
        },
        map: map
    });

    var colosseumDescription = 
    '<div class="info-title">Colosseum</div>' +
    '<div class="info-location">Roma, Italy</div>'; 

    var colosseumInfoWindow = new google.maps.InfoWindow({
        content: colosseumDescription
    });


    colosseum.addListener('click', function() {
        window.location.href = "colosseum.html";
    });

    colosseum.addListener('mouseover', function() {
        colosseumInfoWindow.open(map, colosseum);
    });

    colosseum.addListener('mouseout', function() {
        colosseumInfoWindow.close(map, colosseum);
    });


    greatwall = new google.maps.Marker({
        position: {
            lat: 40.4319,
            lng: 116.5704
        },
        map: map
    });

    var greatwallDescription = 
    '<div class="info-title">Great Wall of China</div>' +
    '<div class="info-location">Huairou, China</div>'; 

    var greatwallInfoWindow = new google.maps.InfoWindow({
        content: greatwallDescription
    });


    greatwall.addListener('click', function() {
        window.location.href = "greatwall.html";
    });

    greatwall.addListener('mouseover', function() {
        greatwallInfoWindow.open(map, greatwall);
    });

    greatwall.addListener('mouseout', function() {
        greatwallInfoWindow.close(map, greatwall);
    });


    machupicchu = new google.maps.Marker({
        position: {
            lat: -13.1631,
            lng: -72.5450
        },
        map: map
    });

    var machupicchuDescription = 
    '<div class="info-title">Machu Picchu</div>' +
    '<div class="info-location">Mountain Machu Picchu, Peru</div>'; 

    var machupicchuInfoWindow = new google.maps.InfoWindow({
        content: machupicchuDescription
    });


    machupicchu.addListener('click', function() {
        window.location.href = "machupicchu.html";
    });

    machupicchu.addListener('mouseover', function() {
        machupicchuInfoWindow.open(map, machupicchu);
    });

    machupicchu.addListener('mouseout', function() {
        machupicchuInfoWindow.close(map, machupicchu);
    });


    petra = new google.maps.Marker({
        position: {
            lat: 30.3285,
            lng: 35.4444
        },
        map: map
    });

    var petraDescription = 
    '<div class="info-title">Petra</div>' +
    "<div class='info-location'>Ma'an Governorate, Jordan</div>"; 

    var petraInfoWindow = new google.maps.InfoWindow({
        content: petraDescription
    });


    petra.addListener('click', function() {
        window.location.href = "petra.html";
    });

    petra.addListener('mouseover', function() {
        petraInfoWindow.open(map, petra);
    });

    petra.addListener('mouseout', function() {
        petraInfoWindow.close(map, petra);
    });


    tajmahal = new google.maps.Marker({
        position: {
            lat: 27.1750,
            lng: 78.0422
        },
        map: map
    });

    var tajmahalDescription = 
    '<div class="info-title">Taj Mahal</div>' +
    "<div class='info-location'>Agra, Uttar Pradesh, India</div>"; 

    var tajmahalInfoWindow = new google.maps.InfoWindow({
        content: tajmahalDescription
    });


    tajmahal.addListener('click', function() {
        window.location.href = "tajmahal.html";
    });

    tajmahal.addListener('mouseover', function() {
        tajmahalInfoWindow.open(map, tajmahal);
    });

    tajmahal.addListener('mouseout', function() {
        tajmahalInfoWindow.close(map, tajmahal);
    });
}