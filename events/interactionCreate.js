const { EmbedBuilder } = require("@discordjs/builders");

module.exports = {
    name: 'interactionCreate',

    async execute(client, interaction) {
        if (!interaction.isCommand()) return;
        if (!interaction.guild) return;

        const cmd = client.commands.get(interaction.commandName)
        if (!cmd) return;

        console.log(`[ChatInput] ---> : `.red + ` ${interaction.user.tag}`.yellow + ` использует команду `.grey + `[${interaction.commandName.toUpperCase()}]`.blue.bold)

        cmd.execute(client, interaction)
    }
}