

// let inputForm = document.getElementById('init-airport-form')
// let initialInput = document.getElementById('initial-input')
// let initialBtn = document.getElementById('initial-btn')
// const airportInput = initialInput.value

// inputForm.addEventListener('submit', (e) => {
//     e.preventDefault()
//     console.log(airportInput)


//     function getArrivalOrDeparture() {
//         fetch(`https://api.flightstats.com/flex/fids/rest/v1/json/${airportInput}/departures?appId=9ca90017&appKey=430095eb345366c16e16381b17c69111&requestedFields=airlineCode%2CflightNumber%2Ccity%2CcurrentTime%2Cremarks%2CoriginAirportCode%2CdestinationAirportCode%2CairlineName%2CcurrentGateDate&includeAirlines=DL%2CUA%2CAA&lateMinutes=15&useRunwayTimes=false&excludeCargoOnlyFlights=false`)
//             .then((response) => response.json())
//             .then((departures) => console.log(departures))
            
//         }
//     getArrivalOrDeparture()

// })

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
airportLookUp()

