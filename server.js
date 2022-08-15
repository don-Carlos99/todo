const express = require('express')
const app = express()
const port = 3000
// const cors = require('cors')


app.get('/gettodo', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.jsonp([{
        createdAt: "Mon Aug 01 2022 15:48:21 GMT+0500 (Pakistan Standard Time)",
        createdBy: "Ahmed Rana",
        header: "Web App",
        id: 1659350901623,
        status: "Edited",
        task: "FrontEnd Development Task Id #12312"
    },
    {
        createdAt: " Mon Aug 01 2022 15:49:02 GMT+0500 (Pakistan Standard Time)",
        createdBy: "Uzair Ashraf",
        header: "Node Server",
        id: 1659350901623,
        status: "Pending",
        task: "rest apis on express server"
    },
    ])
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})