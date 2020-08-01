const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('messageLogged', function(arg) {
    console.log('Listener called!', arg);
});

// raise an event
emitter.emit('messageLogged', { id: 1, url: 'https://' });