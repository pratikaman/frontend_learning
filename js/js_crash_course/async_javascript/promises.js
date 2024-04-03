//

const parchi = new Promise(function (resolve, reject) {
  axios.get("https://randomuser.me/api/").then((result) => {
    // console.log(result.data.results[0]);

    if(result.data.results[0].gender === 'male'){
        resolve()
    }
    else{
        reject()
    }
  });
});


parchi.then(function(){
    console.log('its male')
}).catch(function(){
    console.error("its female")
});
