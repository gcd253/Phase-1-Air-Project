resultSpan = document.getElementById('search-results-span')

function departureLookUp() {
    const form = document.getElementById('init-airport-form')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const formInput = document.getElementById('initial-input')
        const airportCode = formInput.value;
        fetch(`https://api.flightstats.com/flex/fids/rest/v1/json/${airportCode}/departures?appId=9ca90017&appKey=430095eb345366c16e16381b17c69111&requestedFields=airlineCode%2CflightNumber%2Ccity%2CcurrentTime%2Cremarks%2CoriginAirportCode%2CdestinationAirportCode%2CairlineName%2CcurrentGateDate&lateMinutes=15&useRunwayTimes=false&excludeCargoOnlyFlights=false`)
            .then(response => response.json())
            .then(departureData => {
                (departureData)
                console.log(departureData)
                for (item of departureData.fidsData) {
                let orderedList = document.createElement('ol')
                orderedList.textContent = item.airlineCode + " " + item.airlineName + " " + item.flightNumber + " " + item.originAirportCode + " " + item.destinationAirportCode + " " + item.remarks + item.city + " " + item.currentTime + " " + item.currentGateDate;
                console.log(orderedList)
                resultSpan.append(orderedList)

                }
            })



    })
}



departureLookUp()

function findAirportCode() {
    let cityLabel = document.getElementById('cityCodeLabel')
    let citySelect = document.getElementById('cityCodeSelect')

}




