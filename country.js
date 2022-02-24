// All countries load and display
const loadCountries = () => {
    const allCountries = document.getElementById('display-countries')
    allCountries.innerHTML = ''
    fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data => displayAllContries(data))
}

loadCountries()

const displayAllContries = countries => {
    const allCountries = document.getElementById('display-countries')
    for(const country of countries){
        const div = document.createElement('div')
        div.classList.add('col-md-4')
        div.innerHTML = `
            <div class="card my-2">
                <div class="card-body">
                <div class="d-flex">
                    <img src="${country.flag}" style="width:30px"/>
                    <h6><span class="fw-bold ms-2">${country.name}</span><h6>
                </div>
                    <h6><span class="fw-bold">Capital: </span>${country.capital}<h6>
                    <h6><span class="fw-bold">Area: </span>${country.area}<h6>
                    <h6><span class="fw-bold">Calling code: </span>${country.callingCodes[0]}<h6>
                    <h6><span class="fw-bold">Timezone: </span>${country.timezones[0]}<h6>
                    <h6><span class="fw-bold">Population: </span>${country.population}<h6>
                    <h6><span class="fw-bold">Top level domain: </span>${country.topLevelDomain[0]}<h6>
                    <h6 class="fw-bold"><span class="fw-bold">Region: </span>${country.region}<h6>
                    
                </div>
            </div>
        `
        allCountries.appendChild(div)
        

    }
}


// Common Arrow function for individual country
const individualRegion = (country) => {
    document.getElementById(country+'-btn').addEventListener('click', () => {
        const allCountries = document.getElementById('display-countries')
        allCountries.innerHTML = ''
        fetch(`https://restcountries.com/v2/region/${country}`)
        .then(res => res.json())
        .then(data => displayAsianCountries(data))
    })
    
    const displayAsianCountries = countries => {
        const allCountries = document.getElementById('display-countries')
        for(country of countries){
            const div = document.createElement('div')
            div.classList.add('col-md-4')
            div.innerHTML = `
                <div class="card my-2">
                    <div class="card-body">
                    <div class="d-flex">
                        <img src="${country.flag}" style="width:30px"/>
                        <h6><span class="fw-bold ms-2">${country.name}</span><h6>
                    </div>
                        <h6><span class="fw-bold">Capital: </span>${country.capital}<h6>
                        <h6><span class="fw-bold">Area: </span>${country.area}<h6>
                        <h6><span class="fw-bold">Calling code: </span>${country.callingCodes[0]}<h6>
                        <h6><span class="fw-bold">Timezone: </span>${country.timezones[0]}<h6>
                        <h6><span class="fw-bold">Population: </span>${country.population}<h6>
                        <h6><span class="fw-bold">Top level domain: </span>${country.topLevelDomain[0]}<h6>
                        <h6 class="fw-bold"><span class="fw-bold">Region: </span>${country.region}<h6>
                        
                    </div>
                </div>
            `
            allCountries.appendChild(div)
        }
    }
}

individualRegion('asia')
individualRegion('europe')
individualRegion('africa')
