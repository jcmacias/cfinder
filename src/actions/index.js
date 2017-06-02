import axios from 'axios';

const API_TOKEN ='Bearer ' + 'I3KYMpLakY-_FwiPWXZ0RpoZnDivyjKVygpIzILLCpBoem9IZPNT9mt_de-D2jRR3CzjyiqBnlf8UoXlt6mXXed3h7qPjGcFp0pyR3BLYL68fVRrIgkmBCzQNDwoWXYx';
const ROOT_URL = 'https://api.yelp.com/v3/businesses/search'
export const FETCH_BUSINESS = 'fetch_business';



export function fetch_business (term) {
  const url = `${ROOT_URL}?term=${term}&location=US`;
  const request = axios.get(url, {'headers': { 'Authorization': API_TOKEN }});
  return {
    type: FETCH_BUSINESS,
    payload: request
  }
}

// const data = {
//       grant_type: USER_GRANT_TYPE,
//       client_id: CLIENT_ID,
//       client_secret: CLIENT_SECRET,
//       scope: SCOPE_INT,
//       username: DEMO_EMAIL,
//       password: DEMO_PASSWORD
//     };
//
//
//
//   axios.post(TOKEN_URL, Querystring.stringify(data))
//    .then(response => {
//       console.log(response.data);
//       USER_TOKEN = response.data.access_token;
//       console.log('userresponse ' + response.data.access_token);
//     })
//    .catch((error) => {
//       console.log('error ' + error);
//    });
//
//
//
// const AuthStr = 'Bearer '.concat(USER_TOKEN);
// axios.get(URL, { headers: { Authorization: AuthStr } })
//  .then(response => {
//      // If request is good...
//      console.log(response.data);
//   })
//  .catch((error) => {
//      console.log('error ' + error);
//   });
