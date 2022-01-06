const getCityData =  () =>
    fetch(`/city/${name}`, {
        method: 'GET',
    })
        
    .then((res) => res.json()
    .then((data) => {
        console.log(data)

    }));

// q selector for input

// grab the users input so when we hit a route like /city/{name}

// then that should take you to the handlebars render
