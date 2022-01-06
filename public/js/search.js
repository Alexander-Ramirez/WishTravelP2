
// q selector for input
let searchBtn = document.querySelector('#searchBtn')

searchBtn.addEventListener('click', getCity);

function getCity(event) {
    event.preventDefault();
    let cityName = document.getElementById('cityName').value;
    console.log(cityName)
    getCityData(cityName);
}


const getCityData =  (name) =>
    window.location.href = (`/city/${name}`)
    // fetch(`/city/${name}`, {
    //     method: 'GET',
    // })
        
    // .then((res) => res.json()
    // .then((data) => {
    //     console.log(data)

    // }));


// grab the users input so when we hit a route like /city/{name}

// then that should take you to the handlebars render
