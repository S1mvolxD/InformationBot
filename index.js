const { AoiClient } = require("aoi.js");

const client = new AoiClient({
  token: "XXX-XXX-XXX-XXX",
  prefix: "l!",
  intents: ["MessageContent", "Guilds", "GuildMessages", "GuildPresences"],
  events: ["onMessage", "onInteractionCreate"],
  database: {
    type: "aoi.db",
    db: require("@akarui/aoi.db"),
    dbType: "KeyValue",
    tables: ["main"],
    securityKey: "a-32-characters-long-string-here",
  }
});

client.loadCommands("./commands/", true);

require("./handler/variables.js")(client);