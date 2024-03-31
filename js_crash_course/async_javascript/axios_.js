// more user friendly way to make http requests

axios.get('https://randomuser.me/api/').then((result) => {
    console.log(result.data.results[0]);
    
}).catch((err) => {
    
});