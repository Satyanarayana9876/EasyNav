/* eslint-disable consistent-return */
import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
  try {
    const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        tr_latitude: ne.lat,
      },
      headers: {
        'x-rapidapi-key': '11d920cdccmsh485a5855ea3e2fcp1fc4c0jsn7ed0fc15a951',
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

// export const getWeatherData = async (lat, lng) => {
//   try {
//     if (lat && lng) {
//       const { data } = await axios.get('https://open-weather-map27.p.rapidapi.com/weather', {
//         params: { lat, lon: lng },
//         headers: {
//           'X-RapidAPI-Key': '11d920cdccmsh485a5855ea3e2fcp1fc4c0jsn7ed0fc15a951',
//           'X-RapidAPI-Host': 'open-weather-map27.p.rapidapi.com',
//         },
//       });

//       return data;
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };
