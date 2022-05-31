

function getArrivalOrDeparture() {
    fetch('https://api.flightstats.com/flex/fids/rest/v1/json/lga/arrivals?appId=9ca90017&appKey=430095eb345366c16e16381b17c69111')
        .then((response) => response.json())
        .then((arrivalData) => console.log(arrivalData))
        
        fetch('https://api.flightstats.com/flex/fids/rest/v1/json/lga/departures?appId=9ca90017&appKey=430095eb345366c16e16381b17c69111')
        .then(response => response.json())
        .then(departureData => console.log(departureData))
    }
     
 getArrivalOrDeparture()


   
