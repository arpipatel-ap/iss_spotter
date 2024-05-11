const { fetchMyIP } = require('./iss');
const {fetchCoordsByIP} = require('./iss');
const { fetchISSFlyOverTimes } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It did not work: ERROR!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
});




fetchCoordsByIP('72.141.171.121', (error, data) => {
  if (error) {
    console.log("It did not work: ERROR! ", error);
    return;
  }
  console.log('It worked! Returned data:' , data);

});




fetchISSFlyOverTimes(`{ latitude: '49.27670', longitude: '-123.13000' }`, (error, passTimes) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned flyover times:' , passTimes);
});