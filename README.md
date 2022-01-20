# slackapi demo support Bot.

## Description

A simple Slack API BOLT demo template app.

The support bot initial template is below

Includes a simple testPostServer.js to simulate the back end for the NLP process

<pre>

Environment Variables

========
Required
========
export SLACK_SIGNING_SECRET=< Slack Signing Secret >
export SLACK_BOT_TOKEN= <BOT OAUTH Token>
export SRE_SUPPORT_CHANNEL=< Channel to Listen to. >
export SLACK_SUPPORT_AGENT= < NLP Support Answer Agent >
export SLACK_CLIENT_ID=< CLIENT ID >

===========================
Optional not used currently
============================
export SLACK_APP_TOKEN= < Slack App Token >
export SLACK_USER_TOKEN=< User OAUTH Token ?>

</pre>

Key tools used.

yarn install
yarn dev

Open a separate window and run ngrok for testing.

https://ngrok.com/

ngrok http 3000


