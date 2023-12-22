module.exports = [{
    name: "stats",
    aliases: ["bot-info", "bot info", "bot", "boti", "info-bot", "info bot"],
    code: `
$author[]
$addField[1;CPU Info;\`\`\`js
Model CPU: $djsEval[require ('os').cpus()[0].model;true]
Platform CPU: $djsEval[require ('os').platform();true]
\`\`\`;true]

$addField[1;User;\`\`\`js
CPU: $cpu/25.00% 
RAM: $abbreviate[$truncate[$ram]]mb/$maxrammb
Memory: $djsEval[process.memoryUsage().rss / 1024 / 1024;true] MB
\`\`\`;true]

  $addField[1;Uptime;\`\`\`fix
$djsEval[Math.floor(client.uptime / 86400000);;true] Day(s), $djsEval[Math.floor(client.uptime / 3600000) % 24;;true] Hour(s), $djsEval[Math.floor(client.uptime / 60000) % 60;;true] Minute(s), $djsEval[Math.floor(client.uptime / 1000) % 60;;true] Second(s)\`\`\`;true]

$addField[1;Other;\`\`\`fix
Server(s): $guildCount
Member(s): $allMembersCount\`\`\`;true]

$addField[1;Ping(s);\`\`\`fix
Api: $pingms
Message: $messagePingms
$if[$hasPlayer==true]
Voice Ping: $voicePing[ws]ms
$endif\`\`\`;true]

$color[$getGuildVar[color]]
$footer[Developer - $username[$clientOwnerIDs];$userAvatar[$clientOwnerIDs]]
$addTimestamp`
}]