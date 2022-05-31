
function airportLookUp() {
    const form = document.getElementById('init-airport-form')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const formInput = document.getElementById('initial-input')
        const airportCode = formInput.value;
        fetch(`https://api.flightstats.com/flex/fids/rest/v1/json/${airportCode}/departures?appId=9ca90017&appKey=430095eb345366c16e16381b17c69111&requestedFields=airlineCode%2CflightNumber%2Ccity%2CcurrentTime%2Cremarks%2CoriginAirportCode%2CdestinationAirportCode%2CairlineName%2CcurrentGateDate&lateMinutes=15&useRunwayTimes=false&excludeCargoOnlyFlights=false`)
        .then((response) => response.json())
        .then((jsonData) => console.log(jsonData))

        
    })
}
const citiesAndCodes = new Set();

function createCityCodeList() {

fetch('https://api.flightstats.com/flex/fids/rest/v1/json/jfk/departures?appId=9ca90017&appKey=430095eb345366c16e16381b17c69111&requestedFields=city%2CdestinationAirportCode&lateMinutes=15&useRunwayTimes=false&excludeCargoOnlyFlights=false')
.then((response) => response.json())
.then(cityAndCodeJson => {
    for(const item of cityAndCodeJson.fidsData)
    citiesAndCodes.add(item.city + " - " + item.destinationAirportCode)
    //console.log(citiesAndCodes)
})

}

createCityCodeList()

console.log(citiesAndCodes)