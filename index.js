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
                // console.log(departureData)
                for (item of departureData.fidsData) {
                    let orderedList = document.createElement('ol')
                    orderedList.textContent = /*item.airlineCode + " " + */ item.airlineName + " " + item.flightNumber + " " + item.originAirportCode + "/" + item.destinationAirportCode + " " + item.remarks + " " + item.city + " " + item.currentTime + " " + item.currentGateDate;
                    resultSpan.append(orderedList)

                }
            })

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



departureLookUp()

let cityForm = document.getElementById('cityCodeLookup')
    let citySelect = document.getElementById('look-up-box')
    let testDiv = document.getElementById('test')
    

function findAirportCode() {
    
    cityForm.addEventListener('submit', (e) => {
        e.preventDefault()

        const searchTerm = citySelect.value
        let url = "https://autocomplete.travelpayouts.com/places2?locale=en&types[]=code&types[]=city&types[]=country_name&term=" + searchTerm
      
        fetch(url)
        .then(response => response.json())
        .then(cityData => console.log(cityData))
        
      
        //testDiv.innerText = 
    })



}


findAirportCode()


// function autocompleteSearch() {
//     let cityForm = document.getElementById('cityCodeLookup')
//     let citySelect = document.getElementById('look-up-box')
//     const searchTerm = citySelect.value

//     cityForm.addEventListener('keypress', () => {
//         fetch(`https://autocomplete.travelpayouts.com/places2?locale=en&types[]=code&types[]=city&term=${searchTerm}`)
//         .then(response => response.json())
//         .then(cityData => testDiv.innerText = cityData[0].code)
//     })
// }

// autocompleteSearch()