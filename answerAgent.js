require("dotenv").config();
const axios = require('axios')

exports.answerAgent = async function (supportRequest) {
    const axios = require("axios");
    const url = process.env.SLACK_SUPPORT_AGENT;
    console.log(supportRequest)
    const response = await axios
        .post(url, {
            data: supportRequest
        })
        .then(res => {
            console.log(`statusCode: ${res.status}`)
            console.log(res.data)
            return (res.data)
        })
        .catch(error => {
            console.error(error)
        })
    return response;
}

//answerAgent("works for me");
