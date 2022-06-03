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

        // fetch(`https://api.flightstats.com/flex/fids/rest/v1/json/${airportCode}/departures?appId=9ca90017&appKey=cfa6fb6fef2e62c990148468a699fd34&requestedFields=airlineCode%2CflightNumber%2Ccity%2CcurrentTime%2Cremarks%2CoriginAirportCode%2CdestinationAirportCode%2CairlineName%2CcurrentGateDate&lateMinutes=15&useRunwayTimes=false&excludeCargoOnlyFlights=false`)

        fetch('http://localhost:3000/fidsData')
            .then(response => response.json())
            .then(departureData => {
                (departureData)
                console.log(departureData)

                allFlightData = departureData

                for (let item of departureData) {
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

// some global variables
const aa = document.getElementById('aa-option')
const searchDiv = document.querySelector('#search-results-div')
const filterByAirlineForm = document.getElementById('filter-by-airline')
const selectAirline = document.getElementById('airline-select')


selectAirline.addEventListener('change', filterAirline)



// an attempt to filter the displayed data by airline
function filterAirline() {
    const filtered = [allFlightData.filter((item) => {
        return item.airlineName === selectAirline.value
     })]
     allFlightData = filtered


     const collection = document.querySelectorAll('ol');

    for (let i = 0; i < collection.length; i++) {
        collection[i].remove();
    }
     
    //  console.log(allFlightData)
    alert('Feature not yet implemented!')
}


// global variables
let cityForm = document.getElementById('cityCodeLookup')
let citySelect = document.getElementById('look-up-box')
let testDiv = document.getElementById('test')
    
// this function allows user to find an airport IATA code by city
function findAirportCode() {
    // prevent refresh on submit
    cityForm.addEventListener('submit', (e) => {
        e.preventDefault()

        // defining variables
        const searchTerm = citySelect.value
        let url = "https://autocomplete.travelpayouts.com/places2?locale=en&types[]=code&types[]=city&types[]=country_name&term=" + searchTerm

        // fetch request to obtain airport code
        fetch(url)
        .then(response => response.json())
        .then((cityData) => {
            citySelect.value = `${cityData[0].name} -- ${cityData[0].code}`
        })
    })
}

findAirportCode()