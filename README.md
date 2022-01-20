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


<pre>
Example Event Data

Message

{
  client_msg_id: '1914b17b-3937-4789-a0ce-e76449df2c6b',
  type: 'message',
  text: ' all more',
  user: 'mem meme',
  ts: '164051.017600',
  team: 'T3ZEK0Q9G',
  blocks: [ { type: 'rich_text', block_id: '2Zw8o', elements: [Array] } ],
  channel: 'C02U4BEJ1HD',
  event_ts: '1642717e1.017600',
  channel_type: 'channel'
}


Thread

  text: 'more',
  user: 'UeerreV3RUZL6',
  ts: '16427196.018100',
  team: 'TeK0Q9G',
  blocks: [ { type: 'rich_text', block_id: '9gy=D', elements: [Array] } ],
  thread_ts: '16e717051.017600',
  parent_user_id: 'UTer3RUZL6',
  channel: 'C02U4BEeeHD',
  event_ts: '1642717ee96.018100',
  channel_type: 'channel'
}

