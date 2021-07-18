google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawGasEmissionChart);
function drawGasEmissionChart() {
var data = google.visualization.arrayToDataTable([
    ['Item', 'Percent'],
    ['Food',     26],
    ['Other',      74],
]);

var options = {
    title: 'About a quarter of greenhouse gas emissions comes from food',
    pieHole: 0.3,
};

var chart = new google.visualization.PieChart(document.getElementById('gas-emissions'));
chart.draw(data, options);
}

google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawFoodChart);
function drawFoodChart() {
var data = google.visualization.arrayToDataTable([
    ['Item', 'Percent'],
    ['Animal Products',     58],
    ['Other',      42],
]);

var options = {
    title: 'More than half of food emissions come from animal products',
    pieHole: 0.3,
};

var chart = new google.visualization.PieChart(document.getElementById('food-portion'));
chart.draw(data, options);
}

google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawFoodBreakdownChart);
function drawFoodBreakdownChart() {
var data = google.visualization.arrayToDataTable([
    ['Item', 'Percent'],
    ['Beef & Lamb',     50],
    ['Other',      50],
]);

var options = {
    title: 'About half of animal products come from beef and lamb',
    pieHole: 0.3,
};

var chart = new google.visualization.PieChart(document.getElementById('food-breakdown'));
chart.draw(data, options);
}




function clicked() {
    // console.log("kk")
    const form = document.getElementById("quiz");
    let meats = document.getElementsByName("meat");
    let nuts = document.getElementsByName("nuts");
    let citrus = document.getElementsByName("citrus");
    let beef = document.getElementsByName("beef");

    let meat_index = null;
    let nuts_index = null;
    let citrus_index = null;
    let beef_index = null;

    for(i=0; i<meats.length; i++){
        if(meats[i].checked){
            meat_index = i;
        }
    }

    for(i=0; i<nuts.length; i++){
        if(nuts[i].checked){
            nuts_index = i;
        }
    }

    for(i=0; i<citrus.length; i++){
        if(citrus[i].checked){
            citrus_index = i;
        }
    }

    for(i=0; i<beef.length; i++){
        if(beef[i].checked){
            beef_index = i;
        }
    }

    meat_label = document.getElementById("meats-ans");
    if(meat_index === 1){
    meat_label.innerText = "Correct"
    meat_label.style.color = "#008000";
    }else if(meat_index === null) {
    meat_label.innerText = "Please select an answer"
    }else{
    meat_label.innerText = "Incorrect"
    meat_label.style.color = "#ff0000";
    }

    nut_label = document.getElementById("nuts-ans");
    if(nuts_index === 1){
    nut_label.innerText = "Correct"
    nut_label.style.color = "#008000";
    }else if(nuts_index === null) {
    nut_label.innerText = "Please select an answer"
    }else{
    nut_label.innerText = "Incorrect"
    nut_label.style.color = "#ff0000";
    }

    citrus_label = document.getElementById("citrus-ans");
    if(citrus_index === 0){
    citrus_label.innerText = "Correct"
    citrus_label.style.color = "#008000";
    }else if(citrus_index === null) {
    citrus_label.innerText = "Please select an answer"
    }else{
    citrus_label.innerText = "Incorrect"
    citrus_label.style.color = "#ff0000";
    }

    beef_label = document.getElementById("beef-ans");
    if(beef_index === 0){
    beef_label.innerText = "Correct"
    beef_label.style.color = "#008000";
    }else if(beef_index === null) {
    beef_label.innerText = "Please select an answer"
    }else{
    beef_label.innerText = "Incorrect"
    beef_label.style.color = "#ff0000";
    }
}
