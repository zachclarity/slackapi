const { App } = require("@slack/bolt");
require("dotenv").config();
// Initializes your app with your bot token and signing secret
const app = new App({
    token: process.env.SLACK_APP_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
});

app.event('message', async ({ event, client, context }) => {
    try {
        if ( event.channel === process.env.SRE_SUPPORT_CHANNEL) {
            console.log("from:(" +`<@${event.user}>`+ ") Msg:(" + event.text + ")")
            const result = await client.chat.postMessage({
                channel: process.env.SRE_SUPPORT_CHANNEL,
                text: `Welcome to SRE Support Answers Bot, <@${event.user}>! 🎉 We will have an answer for you in a few minutes.`          });
        }
    } catch (error) {
        console.log(error)
    }
});


(async () => {
    const port = 3000
    // Start your app
    await app.start(process.env.PORT || port);
    console.log(`⚡️ Slack Bolt app is running on port ${port}!`);
})();
