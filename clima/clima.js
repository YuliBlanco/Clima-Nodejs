const axios = require ('axios');

const getClima = async (lat, lng) =>{

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=0e358e9e4c8b1abd781b376442e387f3&units=metric`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}