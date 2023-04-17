import { Button, Bot } from "../classes/Bot";
import { ButtonInteraction, ButtonStyle, ButtonBuilder } from "discord.js";

export default class extends Button {
    override build(): ButtonBuilder {
        return new ButtonBuilder()
            .setLabel("Edit Button Style")
            .setStyle(ButtonStyle.Primary)
            .setCustomId(this.id());
    }

    override id(): string {
        return "btnconfigeditbuttonstyle";
    }

    override async run (interaction: ButtonInteraction, bot: Bot): Promise<void> {
        await interaction.showModal(bot.getModal("configeditbtnstylemdl")!.build([interaction.guildId!]));
    }

}