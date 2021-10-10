module.exports = {
  Admins: ["695524379618181193", "562283630219755520"], //Admins of the bot
  ExpressServer: true,//If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || "s!", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/sbySMS7m3v", //Support Server Link
  Token: process.env.Token || "ODk2Njk3OTE2NDY1NDkyMDI4.YWK5Aw.Cgxz1y2o9jQSnoGRh4F-MrF1oEs", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "896697916465492028", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "-TuI6ef04AXQKwRro4Wc44nTNc42WxIX", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": true, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Pikachu is cute", //A Secret like a password
  IconURL:
    "https://github.com/rudraksharora2007/rudraksharora2007/blob/main/CautiousMetallicBluefintuna-size_restricted.gif?raw=true", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  EmbedColor: "RANDOM", //Color of most embeds | Dont edit unless you want a specific color instead of a random one each time
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: process.env.Website || "http://localhost", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  //Lavalink
   Lavalink: {
    id: "Main",
    host: "lavalink-replit-1.rudraksharora.repl.co",
    port: 443,
    pass: "boring", 
    secure: true, // Set this to true if you're self-hosting lavalink on replit.
  },


  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "5a6e9fd2c73645c7ae53dea49dc0e1b4", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "d903c71efc1147bda1c4dbc76ba28539", //Spotify Client Secret
  },
};
