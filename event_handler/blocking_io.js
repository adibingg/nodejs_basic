//blocking io
console.log(1);
console.log(2);
console.log(3);

//nobblocking io
console.log(1)
setTimeout(function(){
    console.log(2)
}, 200);
console.log(3);
