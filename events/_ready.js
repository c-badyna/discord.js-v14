module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        require('../handlers/commands').init(client)
        console.log(`[${client.user.tag}] ---> : `.green + ' На данный момент бот был подгружен к Discord API!'.blue.bold)
        setInterval(() => { client.user.setPresence({ status: `online`, activities: [{ name: `vike.y#9306 --- > ${new Date().toLocaleTimeString('ru', { timeZone: 'Europe/Moscow', timeStyle: 'short' })} МСК`, type: 2 }] }) }, 15 * 1000)

    }
}