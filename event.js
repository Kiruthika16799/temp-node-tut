const EventEmitter = require('events');
// event driven application - chat, drive -driven
const customEmitter = new EventEmitter();
//callback 
customEmitter.emit(`response`);
customEmitter.on('response', (name,age) => {

    console.log(`data received ${name} ${age}`);
})
customEmitter.on('response1', () => {
    console.log(`some logic`)
})
customEmitter.emit(`response`, 'john', 34);
customEmitter.emit(`response1`);

