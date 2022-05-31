
let backgroundColor = document.getElementsByTagName('body')
body.innerHTML = backgroundColor;blue 

function departureLookUp() {
    const form = document.getElementById('init-airport-form')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const formInput = document.getElementById('initial-input')
        const airportCode = formInput.value;
        fetch(`https://api.flightstats.com/flex/fids/rest/v1/json/${airportCode}/departures?appId=9ca90017&appKey=430095eb345366c16e16381b17c69111&requestedFields=airlineCode%2CflightNumber%2Ccity%2CcurrentTime%2Cremarks%2CoriginAirportCode%2CdestinationAirportCode%2CairlineName%2CcurrentGateDate&lateMinutes=15&useRunwayTimes=false&excludeCargoOnlyFlights=false`)
            .then(response => response.json())
            .then(departureData => console.log(departureData))
    })
}
departureLookUp()

function arrivalLookup(){
    fetch(`curl -v  -X GET "https://api.flightstats.com/flex/fids/rest/v1/json/${airportCode}/arrivals?appId=9ca90017&appKey=430095eb345366c16e16381b17c69111&requestedFields=airlineCode%2CflightNumber%2Ccity%2CcurrentTime%2Cgate%2Cremarks&lateMinutes=15&useRunwayTimes=false&excludeCargoOnlyFlights=false"`)
}
