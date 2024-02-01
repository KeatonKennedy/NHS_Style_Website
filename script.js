function runPythonScript() {
    var pythonScriptPath = "login.py"; 
    subprocess.run(["python", pythonScriptPath]);
}

function Refresh () {
    location.reload();
}

function Search_Location() {
    var locationInput = document.getElementById("Location_Input").value;

    window.weatherWidgetConfig = window.weatherWidgetConfig || [];
    window.weatherWidgetConfig.push({
        selector: ".weatherWidget",
        apiKey: "R7W9HPDQNV57RKFYX9XXXULFW", 
        location: locationInput, // Use the value of the input field
        unitGroup: "metric", //"us" or "metric"
        forecastDays: 14, // how many days forecast to show
        title: locationInput, // optional title to show in the widget
        showTitle: true,
        showConditions: true
    });
   
    (function() {
    var d = document, s = d.createElement('script');
    s.src = 'https://www.visualcrossing.com/widgets/forecast-simple/weather-forecast-widget-simple.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();
}