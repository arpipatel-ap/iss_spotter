const needle = require('needle');


const fetchMyIP = function(callback) {
  needle.get('https://api.ipify.org?format=json', (error, response) => {
    
    if (error) {
      callback(error, null);
      return;
    }

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${response.body}`;
      callback(Error(msg), null);
      return;
    }
    // Parsing JSON body to extract IP address
    const ip = JSON.parse(body).ip;
    callback(null, ip);
  });
};

const fetchCoordsByIP = function(ip, callback){
  needle.get('https://ipwho.is?formate-json' , (error,response) => {
    if (error){
      callback (error, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${response.body}`;
      callback (Error(msg),null);
      return;
    }
    const data = JSON.parse(response.body);
    const { latitude, longitude } = data;
    const coordinates = { latitude, longitude };
    callback(null, coordinates);
  
});
};

module.exports = { fetchMyIP };

module.exports = { fetchCoordsByIP };