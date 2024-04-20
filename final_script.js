
//Set up the baselayers and WMS layer
var streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2NoYXVkaHVyaSIsImEiOiJjazBtcG5odG8wMDltM2JtcjdnYTgyanBnIn0.qwqjMomdrBMG36GQKXBlMw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
});

//Create the map variable
var mymap = L.map("map", {
    center: [43.80915392978621, -91.23855826302504], 
    zoom: 12,
    layers:streets,

});

//GeoJSON variables
var traneJson,
    onaJson,
    cityJson,
    dairyJson,
    holmJson,
    uwlJson,
    countyJson,
    wtcJson;


//Adding all GeoJSON data
traneJson = L.geoJSON(traneData, {
    style: trane_style,
    onEachFeature: onEachTrane
});

onaJson = L.geoJSON(onaData, {
    style: ona_style,
    onEachFeature: onEachOna
});

cityJson = L.geoJSON(cityData, {
    style: city_style,
    onEachFeature: onEachCity
});

dairyJson = L.geoJSON(dairyData, {
    style: dairy_style,
    onEachFeature: onEachDairy
});

holmJson = L.geoJSON(holmenData, {
    style: holmen_style,
    onEachFeature: onEachHolmen
});

uwlJson = L.geoJSON(uwlData, {
    style: uwl_style,
    onEachFeature: onEachUWL
});

countyJson = L.geoJSON(countyData, {
    style: county_style,
    onEachFeature: onEachCounty
});

wtcJson = L.geoJSON(wtcData, {
    style: wtc_style,
    onEachFeature: onEachWTC
});


//Creating markers for each employer
var cityMarker = L.marker([43.8166637123762, -91.24809062065495]).bindPopup(cityPopup),
    
    dairyMarker =L.marker([43.77785796539056, -91.22917015480107]).bindPopup(dairyPopup),
    
    uwlMarker = L.marker([43.81720841033026, -91.2291335709666]).bindPopup(uwlPopup),
    
    adminMarker = L.marker([43.813060180816045, -91.2477582910667]).bindPopup(adminPopup),
    
    traneMarker = L.marker([43.78697515522275, -91.22641347115187]).bindPopup(tranePopup),
    
    wtcMarker = L.marker([43.81550758244395, -91.24600923950368]).bindPopup(wtcPopup),
    
    evergreenMarker = L.marker([43.970051876572256, -91.25555906386555]).bindPopup(evergreenPopup),
    
    holmHighMarker = L.marker([43.97290772197836, -91.27790495892063]).bindPopup(holmHighPopup),
    
    holmMidMarker = L.marker([43.96807746239547, -91.26164605892369]).bindPopup(holmMidPopup),
    
    prairieMarker = L.marker([43.990326719461244, -91.28410295778785]).bindPopup(prairiePopup),
    
    sandMarker = L.marker([43.928694029134455, -91.24032519758342]).bindPopup(sandPopup),
    
    vikingMarker = L.marker([43.96183273383593, -91.24953575892764]).bindPopup(vikingPopup),
    
    eagleMarker = L.marker([43.88340629869768, -91.19974284363583]).bindPopup(eaglePopup),
    
    irvingMarker = L.marker([43.88362058523988, -91.22924505831276]).bindPopup(irvingPopup),
    
    northernMarker = L.marker([43.896301783032456, -91.23461612033412]).bindPopup(northernPopup),
    
    onaHighMarker = L.marker([43.876616514162976, -91.22732626029804]).bindPopup(onaHighPopup),
    
    onaMidMarker = L.marker([43.8927583035925, -91.2285268314611]).bindPopup(onaMidPopup),
    
    humanMarker = L.marker([43.81472924400062, -91.24864868566092]).bindPopup(humanPopup),
    
    lawMarker = L.marker([43.81449789051716, -91.25030412443274]).bindPopup(lawPopup);

// Create layer groups for each employer
var cityGroup = L.layerGroup([cityJson, cityMarker]),
    
    dairyGroup = L.layerGroup([dairyJson, dairyMarker]),

    uwlGroup = L.layerGroup([uwlJson, uwlMarker]),
    
    countyGroup = L.layerGroup([countyJson, adminMarker, lawMarker, humanMarker]),
    
    traneGroup = L.layerGroup([traneJson, traneMarker]),
    
    wtcGroup = L.layerGroup([wtcJson, wtcMarker]),
    
    holmGroup = L.layerGroup([holmJson, evergreenMarker, holmHighMarker, holmMidMarker, prairieMarker, sandMarker, vikingMarker]),
    
    onaGroup = L.layerGroup([onaJson, eagleMarker, irvingMarker, northernMarker, onaHighMarker, onaMidMarker]);
    

var baseLayers = {
    'Streets': streets
};

//Radio buttons of each employer.  Only one can be selected at once!
var overlays = {
    "City of La Crosse - City Hall": cityGroup,
    "Dairyland Power Cooperative": dairyGroup,
    "University of Wisconsin - La Crosse": uwlGroup,
    "La Crosse County": countyGroup,
    "Trane": traneGroup,
    "Western Technical College": wtcGroup,
    "Holmen School District": holmGroup,
    "Onalaska School District": onaGroup
};

// Event listener for baselayerchange event
mymap.on('baselayerchange', function (event) {
    var newBaseLayer = event.layer;

    // Determine new center based on the selected basemap
    var newCenter;
    if (newBaseLayer === cityGroup) {
        newCenter = cityMarker.getLatLng(); 
    } else if (newBaseLayer === dairyGroup) {
        newCenter = dairyMarker.getLatLng();
    } else if (newBaseLayer === uwlGroup) {
        newCenter = uwlMarker.getLatLng();
    } else if (newBaseLayer === wtcGroup) {
        newCenter = wtcMarker.getLatLng();
    } else if (newBaseLayer === countyGroup) {
        newCenter = lawMarker.getLatLng();
    } else if (newBaseLayer === traneGroup) {
        newCenter = traneMarker.getLatLng();
    } else if (newBaseLayer === holmGroup) {
        newCenter = vikingMarker.getLatLng();
    } else {
        newCenter = irvingMarker.getLatLng();
    }
    // Set new center for the map
    mymap.setView(newCenter, 13);
});

var layerControl = L.control.layers(overlays).addTo(mymap);

