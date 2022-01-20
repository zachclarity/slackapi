const { App } = require("@slack/bolt");
require("dotenv").config();

const agent = require("./answerAgent")

// Initializes your app with your bot token and signing secret
const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
});

app.event('message', async ({ event, client, context }) => {
    try {
        if ( event.channel === process.env.SRE_SUPPORT_CHANNEL && event.thread_ts === undefined) {
            console.log("from:(" + `<@${event.user}>` + ") Msg:(" + event.type + ")")
            const result = await client.chat.postMessage({
                thread_ts: event.ts,
                channel: process.env.SRE_SUPPORT_CHANNEL,
                text: `Welcome to SRE Support Answers Bot, <@${event.user}>!  We will have an answer for you in a few minutes. :hourglass_flowing_sand:`
            });
            const answer = await agent.answerAgent(event.text)
            console.log(answer + " kdkd")
            const result2 = await client.chat.postMessage({
                thread_ts: event.ts,
                channel: process.env.SRE_SUPPORT_CHANNEL,
                text:  `ANSWER: 🎉 : ` + answer
            });
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
