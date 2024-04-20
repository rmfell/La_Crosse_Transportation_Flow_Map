



// Function to style each line segment
function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        color: 'rgba(0, 0, 255, 0.5)',
        fillOpacity: 0.85
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
}




// Function to reset the style after hovering
function resetTrane(e) {
    traneJson.resetStyle(e.target);
}

function resetWTC(e) {
    wtcJson.resetStyle(e.target);
}

function resetUWL(e) {
    uwlJson.resetStyle(e.target);
}

function resetOna(e) {
    onaJson.resetStyle(e.target);
}

function resetDairy(e) {
    dairyJson.resetStyle(e.target);
}

function resetHolmen(e) {
    holmJson.resetStyle(e.target);
}

function resetCounty(e) {
    countyJson.resetStyle(e.target);
}

function resetCity(e) {
    cityJson.resetStyle(e.target);
}




// Function to bind popup to each line segment
function onEachTrane(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetTrane
    });

    layer.bindPopup("<b>Street: </b>" + feature.properties.name + "<br>" +
                    "<b>Commuters: </b>" + feature.properties.count); 
}

// Function to bind popup to each line segment
function onEachWTC(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetWTC
    });

    layer.bindPopup("<b>Street: </b>" + feature.properties.name + "<br>" +
                    "<b>Commuters: </b>" + feature.properties.count); 
}

// Function to bind popup to each line segment
function onEachUWL(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetUWL
    });

    layer.bindPopup("<b>Street: </b>" + feature.properties.name + "<br>" +
                    "<b>Commuters: </b>" + feature.properties.count); 
}

// Function to bind popup to each line segment
function onEachOna(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetOna
    });

    layer.bindPopup("<b>Street: </b>" + feature.properties.name + "<br>" +
                    "<b>Commuters: </b>" + feature.properties.count); 
}

// Function to bind popup to each line segment
function onEachDairy(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetDairy
    });

    layer.bindPopup("<b>Street: </b>" + feature.properties.name + "<br>" +
                    "<b>Commuters: </b>" + feature.properties.count); 
}

// Function to bind popup to each line segment
function onEachCounty(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetCounty
    });

    layer.bindPopup("<b>Street: </b>" + feature.properties.name + "<br>" +
                    "<b>Commuters: </b>" + feature.properties.count); 
}

// Function to bind popup to each line segment
function onEachCity(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetCity
    });

    layer.bindPopup("<b>Street: </b>" + feature.properties.name + "<br>" +
                    "<b>Commuters: </b>" + feature.properties.count); 
}

// Function to bind popup to each line segment
function onEachHolmen(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHolmen
    });

    layer.bindPopup("<b>Street: </b>" + feature.properties.name + "<br>" +
                    "<b>Commuters: </b>" + feature.properties.count); 
}
