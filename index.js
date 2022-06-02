resultDiv = document.getElementById('search-results-div')
let allFlightData = []


function departureLookUp() {
    const form = document.getElementById('init-airport-form')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const formInput = document.getElementById('initial-input')
        const airportCode = formInput.value;
        while (resultDiv.firstChild) {
            resultDiv.removeChild(resultDiv.firstChild);
        }

        fetch(`https://api.flightstats.com/flex/fids/rest/v1/json/${airportCode}/departures?appId=9ca90017&appKey=430095eb345366c16e16381b17c69111&requestedFields=airlineCode%2CflightNumber%2Ccity%2CcurrentTime%2Cremarks%2CoriginAirportCode%2CdestinationAirportCode%2CairlineName%2CcurrentGateDate&lateMinutes=15&useRunwayTimes=false&excludeCargoOnlyFlights=false`)

            .then(response => response.json())
            .then(departureData => {
                (departureData)
                // console.log(departureData)

                allFlightData = departureData

                for (let item of departureData.fidsData) {
                    let orderedList = document.createElement('ol')
                    orderedList.className = item.airlineName
                    orderedList.textContent = item.airlineName + " " + item.flightNumber
                    resultDiv.append(orderedList)

                    let restOfInfo = item.airlineCode + " " + item.originAirportCode + " " + item.destinationAirportCode + " " + item.city + " " + item.currentTime + " " + item.currentGateDate

                    orderedList.addEventListener('mouseover', () => {
                        console.log(restOfInfo)
                        orderedList.append(restOfInfo)

                    })

                    orderedList.addEventListener('mouseout', () => {
                        orderedList.textContent = item.airlineName + " " + item.flightNumber
                    })
                }

            })

    })
}

departureLookUp()

const aa = document.getElementById('aa-option')
const searchDiv = document.querySelector('#search-results-div')
const filterByAirlineForm = document.getElementById('filter-by-airline')
const selectAirline = document.getElementById('airline-select')

selectAirline.addEventListener('change', filterAirline)


function areValuesEqual() {
    while (selectAirline === aa) {

    }
}


function filterAirline() {
    allFlightData.filter(areValuesEqual)
}

// while (resultDiv.firstChild) {
//     resultDiv.removeChild(resultDiv.firstChild);
// }






const citiesAndCodes = new Set();

function createCityCodeList() {

    fetch('https://api.flightstats.com/flex/fids/rest/v1/json/jfk/departures?appId=9ca90017&appKey=430095eb345366c16e16381b17c69111&requestedFields=city%2CdestinationAirportCode&lateMinutes=15&useRunwayTimes=false&excludeCargoOnlyFlights=false')
        .then((response) => response.json())
        .then(cityAndCodeJson => {
            for (const item of cityAndCodeJson.fidsData)
                citiesAndCodes.add(item.city + " - " + item.destinationAirportCode)
            //console.log(citiesAndCodes)
        })

}

createCityCodeList()





function findAirportCode() {
    let cityLabel = document.getElementById('cityCodeLabel')
    let citySelect = document.getElementById('cityCodeSelect')

}



