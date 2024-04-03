// with async await we can write async code in a synchronous way



// following code can fail if the api is down or the url is wrong
// var a = axios.get('https://randomuser.me/api/')
// console.log(a)



async function abc() {
    let a = await axios.get('https://randomuser.me/api/')
    console.log(a)
}


abc()