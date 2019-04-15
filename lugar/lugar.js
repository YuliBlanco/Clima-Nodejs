const axios = require ('axios');

const getLugarLatLng = async(dir) => {

    const encodeUrl = encodeURI(dir);
    console.log(encodeUrl);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodeUrl }`,
        headers: {'X-RapidAPI-Key': '85a3139034mshe5498155cd71e39p1b8e19jsn1be208843a75'}
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${ dir}`);
    }

    const data       = resp.data.Results[0];
    const direccion  = data.name;
    const lat        = data.lat;
    const lon        = data.lon;  

    return {
        direccion,
        lat,
        lon
    }
}

module.exports = {
    getLugarLatLng
}
