// Debugging a TypeError: cannot read property 'X' of undefined

var obj = {};

obj.name; // will not throw error.
obj.name.age; // will throw error.


// to avoid this. ? operator can be used.
obj?.name?.age; // will not throw error. and give undefined.