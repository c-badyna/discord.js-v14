const fs = require('fs');
module.exports.init = async (client) => {

    fs.readdirSync('./events').filter(s => s.endsWith('.js')).forEach(file => {
        const evt = require(`../events/${file}`)
        client.on(evt.name, evt.execute.bind(null, client))
    })
    console.log("[Event] ---> : ".white  + "Идёт запуск Обработчика событий. Пожалуйста, ожидайте...".blue.bold);
}