//Kelas EventEmitter
var events = require('events');

//membuat object
var obj = new events.EventEmitter();

//mendefinisikan event mulai
obj.on('mulai', function(){
             console.log("terjadi event mulai");
});

obj.on('selesai', function(){
             console.log("terjadi event selesai");
});

//untuk memicu terjadinya emit tentu harus memanggil metode emit()
obj.emit('mulai');
for(let i = 0; i<20; i++){
             process.stdout.write((i+1).toString() + ' ');
}
obj.emit('selesai');