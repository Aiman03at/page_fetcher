//Implement a node app called fetcher.js.

//It should take two command line arguments 1.:a URL  2.a local file path

//// Fetching command line arguments//////
const args =process.argv;
let URL=args[2];
let local_path=args[3];


////two operations in this problem which will take an unknown amount of time:

//1.You need to make an http request and wait for the response.
//2.After the http request is complete, you need to take the data you receive and write it to a file in your local filesystem.

///Making an http request
const fs = require("node:fs");
const needle = require('needle');
const readline = require('readline');

// Function to prompt user for input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


needle.get(URL, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  const content = body; // the Html page for thr URL

  ///WWrite the data to a file /////
  fs.writeFile(local_path, content, err => {
    if (err) {
      console.error(err);
    } else {
      // file written successfully
    }
  });
  
});
/////Calculating the file size////
fs.stat(local_path, (err, stats) => {
  if (err) {
    console.error(`Error: ${err.message}`);
    return;
  }
  console.log(`Downloaded and saved ${stats.size} bytes to ${local_path}.`)

});




