// call, apply, bind in javascript
// ways to call a function in javascript using while using an object as this.



function abcd(a) {
    console.log(a);
    console.log(this);
}

var obj = {user:'pratik'}

abcd('normal function call');


// call
abcd.call(obj, 'call');


// apply
abcd.apply(obj, ['apply'])


// bind
var baadMeChalaneKeLiyeFnc = abcd.bind(obj, 'bind');
baadMeChalaneKeLiyeFnc();