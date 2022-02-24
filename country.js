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

const currencies = (currency) => {
    for(const key in currency){
        return currency[key]
    }
}


// Asia region countries
document.getElementById('asia-btn').addEventListener('click', (e) => {
    const allCountries = document.getElementById('display-countries')
    allCountries.innerHTML = ''
    fetch('https://restcountries.com/v2/region/asia')
    .then(res => res.json())
    .then(data => displayAsianCountries(data))
})



const displayAsianCountries = countries => {

    const allCountries = document.getElementById('display-countries')
    // console.log(countries)
    for(const asia of countries){
        console.log(asia.name)
        const div = document.createElement('div')
        div.classList.add('col-md-4')
        div.innerHTML = `
            <div class="card my-2">
                <div class="card-body">
                <div class="d-flex">
                    <img src="${asia.flag}" style="width:30px"/>
                    <h6><span class="fw-bold ms-2">${asia.name}</span><h6>
                </div>
                    <h6><span class="fw-bold">Capital: </span>${asia.capital}<h6>
                    <h6><span class="fw-bold">Area: </span>${asia.area}<h6>
                    <h6><span class="fw-bold">Calling code: </span>${asia.callingCodes[0]}<h6>
                    <h6><span class="fw-bold">Timezone: </span>${asia.timezones[0]}<h6>
                    <h6><span class="fw-bold">Population: </span>${asia.population}<h6>
                    <h6><span class="fw-bold">Top level domain: </span>${asia.topLevelDomain[0]}<h6>
                    <h6 class="fw-bold"><span class="fw-bold">Region: </span>${asia.region}<h6>
                    
                </div>
            </div>
        `
        allCountries.appendChild(div)
    }
}


{/* <h6><span class="fw-bold">Capital: </span>${asia.capital}<h6>
<h6><span class="fw-bold">Area: </span>${asia.area}<h6>
<h6><span class="fw-bold">Calling code: </span>${asia.callingCodes[0]}<h6>
<h6><span class="fw-bold">Calling code: </span>${asia.callingCodes[0]}<h6>
<h6><span class="fw-bold">Calling code: </span>${asia.callingCodes[0]}<h6>
<h6><span class="fw-bold">Timezone: </span>${asia.timezones[0]}<h6>
<h6><span class="fw-bold">Population: </span>${asia.population}<h6>
<h6><span class="fw-bold">Top level domain: </span>${asia.topLevelDomain[0]}<h6>
<h6 class="fw-bold"><span class="fw-bold">Region: </span>${asia.region}<h6> */}