module.exports = [{
    name: "user",
    aliases: ["user-info", "user info", "info-user", "info user"],
    code: `
    $author[User Information ~ $username[$get[id]];$userAvatar[$get[id]]]
    
    $addField[Role;
    $userRoles[$get[id];$guildID;mention;, ]
    ;true]
    
    $addField[Data;
    Joined date: <t:$round[$math[$memberJoinDate[$get[id];$guildID]/1000]]:D> (<t:$round[$math[$memberJoinDate[$get[id];$guildID]/1000]]:R>)
    Create date: <t:$round[$math[$creationDate[$get[id];$guildId;ms]/1000]]:D> (<t:$round[$math[$creationDate[$get[id];$guildId;ms]/1000]]:R>)
    ;true]

    $addField[Main;
    Nickname: <@$get[id]> \`($userTag[$get[id]] / $get[id])\`
    Platform: \`$replaceText[$replaceText[$replaceText[$replaceText[$userPlatform[$get[id];$guildID;, ];web;Web];mobile;Mobile];desktop;Desktop];none;None]\`
    Status: \`$replaceText[$replaceText[$replaceText[$replaceText[$userStatus[$guildID;$get[id]];online;Online];idle;Idle];dnd;Dnd];offline;Offline]\`
    Badges: \`$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$userBadges[$get[id];, ];none;None];ActiveDeveloper;Active Developer];HypeSquadOnlineHouse1;HypeSquad Bravery];HypeSquadOnlineHouse2;HypeSquad Brilliance];HypeSquadOnlineHouse3;HypeSquad Balance]\`
    Activity: \`$userActivity[$guildID;$get[id]]\`
    ;true]

        
    $addTimestamp
    $color[$getGuildVar[color]]
    $footer[Used the command ~ $username;$authorAvatar]

    $onlyIf[$userExists[$get[id]]==true;{newEmbed:{title:User Error}{description:**User not found**}{color:Red}{footer:Error ~ $username:$authorAvatar}}]
    
    $let[id;$findUser[$message[1];true]]

    $suppressErrors[{newEmbed:{title:Error}{description:**I'm sorry, but it seems that's not how you do it!**}{color:Red}{footer:Error ~ $username:$authorAvatar}}]
    `
}]