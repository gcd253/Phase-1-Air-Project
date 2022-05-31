function createJsonArray() {

const flightData = []

fetch('https://api.flightstats.com/flex/fids/rest/v1/json/jfk/departures?appId=9ca90017&appKey=430095eb345366c16e16381b17c69111&requestedFields=airlineCode%2CflightNumber%2Ccity%2CcurrentTime%2Cremarks%2CoriginAirportCode%2CdestinationAirportCode%2CairlineName%2CcurrentGateDate&includeAirlines=dl%2Caa%2Cua&lateMinutes=15&useRunwayTimes=false&excludeCargoOnlyFlights=false')
.then((response) => response.json())
.then((jsonJfk) => flightData.push(jsonJfk))


fetch('https://api.flightstats.com/flex/fids/rest/v1/json/lga/departures?appId=9ca90017&appKey=430095eb345366c16e16381b17c69111&requestedFields=airlineCode%2CflightNumber%2Ccity%2CcurrentTime%2Cremarks%2CoriginAirportCode%2CdestinationAirportCode%2CairlineName%2CcurrentGateDate&includeAirlines=dl%2Caa%2Cua&lateMinutes=15&useRunwayTimes=false&excludeCargoOnlyFlights=false')
.then((response) => response.json())
.then((jsonLga) => flightData.push(jsonLga))


fetch('https://api.flightstats.com/flex/fids/rest/v1/json/ewr/departures?appId=9ca90017&appKey=430095eb345366c16e16381b17c69111&requestedFields=airlineCode%2CflightNumber%2Ccity%2CcurrentTime%2Cremarks%2CoriginAirportCode%2CdestinationAirportCode%2CairlineName%2CcurrentGateDate&includeAirlines=dl%2Caa%2Cua&lateMinutes=15&useRunwayTimes=false&excludeCargoOnlyFlights=false')
.then((response) => response.json())
.then((jsonEwr) => flightData.push(jsonEwr))


console.log(flightData)

}

createJsonArray()