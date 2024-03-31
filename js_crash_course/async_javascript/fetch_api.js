// fetch is by default async.
 
fetch('https://randomuser.me/api/').then(
    function(res){
        return res.json()
    }
).then(
    function(data){
        console.log(data.results[0]) 
    }
);

console.log('hi')