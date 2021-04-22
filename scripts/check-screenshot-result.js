const https = require('https');


const options = {
  host: 'happo.io',
  port: 443,
  method: 'POST',
  path: '/api/reports/'+process.env.PREVIOUS_SHA+'/compare/'+process.env.CURRENT_SHA,
  // authentication headers
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Basic ' + new Buffer(process.env.HAPPO_API_KEY+':'+process.env.HAPPO_API_SECRET).toString('base64')
  }
};

const post_req = https.request(options, (resp) => {
  let data = '';
  // A chunk of data has been received.
  resp.on('data', (chunk) => {
    data += chunk;
  });
  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    if (data) {
      try {
        let result = JSON.parse(data);
        if (result.status === "success") {
          console.log("accept");
        } else {
          console.log("reject");
        }
      }
      catch (error) {
        console.log("Unable to parse Happo response data as JSON");
      }
    }
    else {
      console.log("run_compare");
    }
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});
post_req.write("");
post_req.end();
