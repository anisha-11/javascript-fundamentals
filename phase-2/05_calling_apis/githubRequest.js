// Load the `get` function.
const { get } = require('callback-fetch');

// Create a "handler" callback function.
const handleReceivedResponse = (body) => {
 const responseObject = JSON.parse(body); 
 console.log('body:', body);
}

const url = 'https://api.github.com/repos/sinatra/sinatra';

// Call `get` and provide the handler callback function.
// This will get called by `get` when the response is received.
get(url, handleReceivedResponse);

// Shorter version of the above:
// get(url, (body) => {
//   console.log('body:', body);
// });
