module.exports = [{
    name: "channel",
    aliases: ["info-channel", "info channel", "channel-info", "channel info"],
    code: `
    $author[Channel Information ~ $channelName[$get[id]]]
    
    $addField[Main;
    Name: <#$get[id]> \`($channelName[$get[id]] / $get[id])\`
    Type: \`$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$channelType[$get[id]];text;Text];voice;Voice];forum;Forum];announcement;Announcement];stage;Stage];category;Category]\`
    Topic: \`$replaceText[$channelTopic[$get[id]];none;None]\`
    NSFW: \`$replaceText[$replaceText[$channelNSFW[$get[id]];false;False];true;True]\`;true]

    $addTimestamp
    $color[$getGuildVar[color]]
    $footer[Used the command ~ $username;$authorAvatar]

    $onlyIf[$channelExists[$get[id]]==true;{newEmbed:{title:Channel Error}{description:**Channel not found**}{color:Red}{footer:Error ~ $username:$authorAvatar}}]
    
    $let[id;$findChannel[$message[1];true]]

    $suppressErrors[{newEmbed:{title:Error}{description:**I'm sorry, but it seems that's not how you do it!**}{color:Red}{footer:Error ~ $username:$authorAvatar}}]`
}]