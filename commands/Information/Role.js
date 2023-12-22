module.exports = [{
    name: "role",
    aliases: ["role-info", "role info", "info-role", "info role"],
    code: `
    $author[Role Information ~ $roleName[$get[id]]]
    
    $addField[Permissions;
    \`$rolePerms[$get[id];, ;$guildID]\`
    ;true]
    $addField[Main;
    Name: <@&$get[id]> \`($roleName[$get[id]] / $get[id])\`
    Position: \`$rolePosition[$get[id];$guildID]\`
    Member(s) Count: \`$roleMembersCount[$get[id];$guildID]\`
    ;true]
    
    $color[$getGuildVar[color]]
    $footer[Used the command ~ $username;$authorAvatar]
    $addTimestamp

    $onlyIf[$roleExists[$get[id];$guildID]==true;{newEmbed:{title:Role Error}{description:**Role not found**}{color:Red}{footer:Error ~ $username:$authorAvatar}}]
    
    $let[id;$findRole[$message[1];$guildID]]

    $suppressErrors[{newEmbed:{title:Error}{description:**I'm sorry, but it seems that's not how you do it!**}{color:Red}{footer:Error ~ $username:$authorAvatar}}]`
}]