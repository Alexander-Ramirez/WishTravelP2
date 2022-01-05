const cityData = require('../../seeds/cityData.json');
const { City } = require('../../models');

const getcityData =  () =>
    fetch('/api/cityRoutes', {
        method: 'GET',
    })
        
    .then((res) => res.json()
    .then((data) => data));


