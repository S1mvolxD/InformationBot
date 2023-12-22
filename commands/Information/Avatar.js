module.exports = [{
    name: "avatar",
    aliases: "ava",
    code: `
    $author[User Avatar ~ $username[$get[id]];$userAvatar[$get[id]]]
    
    $image[$userAvatar[$get[id];2048;true;png]]

    $addTimestamp
    $color[$getGuildVar[color]]
    $footer[Used the command ~ $username;$authorAvatar]

    $onlyIf[$userExists[$get[id]]==true;{newEmbed:{title:User Error}{description:**User not found**}{color:Red}{footer:Error ~ $username:$authorAvatar}}]
    
    $let[id;$findUser[$message[1];true]]

    $suppressErrors[{newEmbed:{title:Error}{description:**I'm sorry, but it seems that's not how you do it!**}{color:Red}{footer:Error ~ $username:$authorAvatar}}]`
}]