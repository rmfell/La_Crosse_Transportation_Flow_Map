//Number of routes per employer, numbers from final data spreadsheet
var cityEmp = 75,
    dairyEmp = 33,
    evergreenEmp = 7,
    holmHighEmp = 23,
    holmMidEmp = 26,
    prairieEmp = 5,
    sandEmp = 4,
    vikingEmp = 20,
    eagleEmp = 7,
    irvingEmp = 6,
    northernEmp = 3,
    onaHighEmp = 9,
    onaMidEmp = 5,
    adminEmp = 29,
    humanEmp = 70,
    lawEmp = 42,
    traneEmp = 15,
    uwlEmp = 268,
    wtcEmp = 53;

//Custom popup for the markers, make it look nicer
var lawPopup = "<div style='text-align: center;'>" +
                   "<h2 style='margin: 0;'>La Crosse County Law Enforcement Center</h2>" +
                    "<img src='images/county.jpg'>" +
                   "<p style='font-size: 14px;'>Responses: " + lawEmp + "</p>" +
                   "</div>";

var humanPopup = "<div style='text-align: center;'>" +
                   "<h2 style='margin: 0;'>La Crosse County Human Services</h2>" +
                    "<img src='images/county.jpg'>" +
                   "<p style='font-size: 14px;'>Responses: " + humanEmp + "</p>" +
                   "</div>";

var adminPopup = "<div style='text-align: center;'>" +
                   "<h2 style='margin: 0;'>La Crosse County Administrative Center</h2>" +
                    "<img src='images/county.jpg'>" +
                   "<p style='font-size: 14px;'>Responses: " + adminEmp + "</p>" +
                   "</div>";

var onaMidPopup = "<div style='text-align: center;'>" +
                   "<h2 style='margin: 0;'>Onalaska Middle School</h2>" +
                    "<img src='images/onalaska.jpg' width='225' heigh='225'>" +
                   "<p style='font-size: 14px;'>Responses: " + onaMidEmp + "</p>" +
                   "</div>";

var onaHighPopup = "<div style='text-align: center;'>" +
                   "<h2 style='margin: 0;'>Onalaska High School</h2>" +
                    "<img src='images/onalaska.jpg' width='225' heigh='225'>" +
                   "<p style='font-size: 14px;'>Responses: " + onaHighEmp + "</p>" +
                   "</div>";

var evergreenPopup = "<div style='text-align: center;'>" +
                   "<h2 style='margin: 0;'>Evergreen Elementary School</h2>" +
                    "<img src='images/holmen.jpg' width='225' heigh='225'>" +
                   "<p style='font-size: 14px;'>Responses: " + evergreenEmp + "</p>" +
                   "</div>";

var holmHighPopup = "<div style='text-align: center;'>" +
                   "<h2 style='margin: 0;'>Holmen High School</h2>" +
                    "<img src='images/holmen.jpg' width='225' heigh='225'>" +
                   "<p style='font-size: 14px;'>Responses: " + holmHighEmp + "</p>" +
                   "</div>";

var holmMidPopup = "<div style='text-align: center;'>" +
                   "<h2 style='margin: 0;'>Holmen Middle School</h2>" +
                    "<img src='images/holmen.jpg' width='225' heigh='225'>" +
                   "<p style='font-size: 14px;'>Responses: " + holmMidEmp + "</p>" +
                   "</div>";
var prairiePopup = "<div style='text-align: center;'>" +
                   "<h2 style='margin: 0;'>Prairie View Elementary School</h2>" +
                    "<img src='images/holmen.jpg' width='225' heigh='225'>" +
                   "<p style='font-size: 14px;'>Responses: " + prairieEmp + "</p>" +
                   "</div>";
var sandPopup = "<div style='text-align: center;'>" +
                   "<h2 style='margin: 0;'>Sand Lake Elementary School</h2>" +
                    "<img src='images/holmen.jpg' width='225' heigh='225'>" +
                   "<p style='font-size: 14px;'>Responses: " + sandEmp + "</p>" +
                   "</div>";
var vikingPopup = "<div style='text-align: center;'>" +
                   "<h2 style='margin: 0;'>Viking Elementary School</h2>" +
                    "<img src='images/holmen.jpg' width='225' heigh='225'>" +
                   "<p style='font-size: 14px;'>Responses: " + vikingEmp + "</p>" +
                   "</div>";

var eaglePopup = "<div style='text-align: center;'>" +
                   "<h2 style='margin: 0;'>Eagle Bluff Elementary School</h2>" +
                    "<img src='images/onalaska.jpg' width='225' heigh='225'>" +
                   "<p style='font-size: 14px;'>Responses: " + eagleEmp + "</p>" +
                   "</div>";
var cityPopup = "<div style='text-align: center;'>" +
                   "<h2 style='margin: 0;'>City of La Crosse - City Hall</h2>" +
                    "<img src='images/city.jpg' width='225' heigh='225'>" +
                   "<p style='font-size: 14px;'>Responses: " + cityEmp + "</p>" +
                   "</div>";

var irvingPopup = "<div style='text-align: center;'>" +
                   "<h2 style='margin: 0;'>Irving Pertzsch Elementary School</h2>" +
                    "<img src='images/onalaska.jpg' width='225' heigh='225'>" +
                   "<p style='font-size: 14px;'>Responses: " + irvingEmp + "</p>" +
                   "</div>";

var northernPopup = "<div style='text-align: center;'>" +
                   "<h2 style='margin: 0;'>Northern Hills Elementary School</h2>" +
                    "<img src='images/onalaska.jpg' width='225' heigh='225'>" +
                   "<p style='font-size: 14px;'>Responses: " + northernEmp + "</p>" +
                   "</div>";

var dairyPopup = "<div style='text-align: center;'>" +
                   "<h2 style='margin: 0;'>Dairyland Power Cooperative</h2>" +
                    "<img src='images/dairy.jpg' width='225' heigh='225'>" +
                   "<p style='font-size: 14px;'>Responses: " + dairyEmp + "</p>" +
                   "</div>";

var uwlPopup = "<div style='text-align: center;'>" +
                   "<h2 style='margin: 0;'>University of Wisconsin - La Crosse</h2>" +
                    "<img src='images/uwl.jpg' width='225' heigh='225'>" +
                   "<p style='font-size: 14px;'>Responses: " + uwlEmp + "</p>" +
                   "</div>";

var countyPopup = "<div style='text-align: center;'>" +
                   "<h2 style='margin: 0;'>City of La Crosse - City Hall</h2>" +
                   "<p style='font-size: 14px;'>Responses: " + cityEmp + "</p>" +
                   "</div>";

var tranePopup = "<div style='text-align: center;'>" +
                   "<h2 style='margin: 0;'>Trane</h2>" +
                    "<img src='images/trane.jpg' width='225' heigh='225'>" +
                   "<p style='font-size: 14px;'>Responses: " + traneEmp + "</p>" +
                   "</div>";

var wtcPopup = "<div style='text-align: center;'>" +
                   "<h2 style='margin: 0;'>Western Technical College</h2>" +
                    "<img src='images/wtc.jpg' width='225' heigh='225'>" +
                   "<p style='font-size: 14px;'>Responses: " + wtcEmp + "</p>" +
                   "</div>";

var holmenPopup = "<div style='text-align: center;'>" +
                   "<h2 style='margin: 0;'>City of La Crosse - City Hall</h2>" +
                   "<p style='font-size: 14px;'>Responses: " + cityEmp + "</p>" +
                   "</div>";

var onaPopup = "<div style='text-align: center;'>" +
                   "<h2 style='margin: 0;'>City of La Crosse - City Hall</h2>" +
                   "<p style='font-size: 14px;'>Responses: " + cityEmp + "</p>" +
                   "</div>";