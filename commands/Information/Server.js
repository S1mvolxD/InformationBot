module.exports = [{
    name: "server",
    aliases: ["server-info", "info-server", "server info", "info server"],
    code: `
    $author[Server Information - $guildName[$guildID];$get[icon]]

    $addField[Owner:;$username[$guildOwnerID[$guildID]];true]
    
    $addField[Verification level;$get[verifylevel];true]
    
    $addField[Date of creation:;
    <t:$round[$math[$creationDate[$guildID;ms]/1000]]:D> (<t:$round[$math[$creationDate[$guildID;ms]/1000]]:R>)
    ;true]
      
    $addField[Channels:;
    Total: **$channelCount[$guildID;all]**
    Text: **$channelCount[$guildID;Text]**
    Voice: **$channelCount[$guildID;Voice]**
    Announcement: **$channelCount[$guildID;Announcement]**
    Stage: **$channelCount[$guildID;Stage]**
    Forum: **$channelCount[$guildID;Forum]**
    ;true]
    
    $addField[Status:;
    Onlien: **$membersCount[$guildID;online;true]**
    Idle: **$membersCount[$guildID;idle;true]**
    Dnd: **$membersCount[$guildID;dnd;true]**
    Offline: **$membersCount[$guildID;offline;true]**
    ;true]
    
    $addField[Members:;
    Total: **$membersCount[$guildID;all;true]**
    Members: **$membersCount[$guildID;all;false]**
    Bots: **$guildBotCount[$guildID]**
    ;true]
    
    $color[$getGuildVar[color]]
    $footer[Used the command ~ $username;$authorAvatar]
    $addTimestamp
    
    $let[icon;$replaceText[$replaceText[$checkCondition[$guildIcon==];false;$guildIcon];true;$userAvatar[$clientID]]]
    $let[verifylevel;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$GuildVerificationLevel;1;Low];2;Medium];3;high];4;Very high];0;None]]`
}]