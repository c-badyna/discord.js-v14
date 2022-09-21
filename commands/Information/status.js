const { Client, EmbedBuilder, CommandInteraction } = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('status')
        .setDescription("Даёт статус бота"),
    async execute(client, interaction) {

        const StatusEmbed = new EmbedBuilder()
          .setTitle("Статус " + client.user.username + "'s")
          .setFields([
            {
              name: "Мой пинг",
              value: `${Date.now() - interaction.createdTimestamp}ms`
            },
            {
              name: "Пинг WebSoket",
              value: `${client.ws.ping}ms`
            },
            {
              name: "Онлайн с",
              value: `<t:${client.readyTimestamp}:F> (<t:${client.readyTimestamp}:R>)`,
            },
          ])

        interaction.reply({ embeds: [StatusEmbed] })
    }
}