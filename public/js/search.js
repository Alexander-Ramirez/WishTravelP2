const getCityData =  () =>
    fetch('/api/cities', {
        method: 'GET',
    })
        
    .then((res) => res.json()
    .then((data) => {
        console.log(data)
    
    
    }));



