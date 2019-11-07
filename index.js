const express = require('express')
const app = express()
const port = 3000

app.use(express.static('.'))

app.get('/manifest', (req, res) => res.json(createmanifest()))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


function createmanifest() {
    return {
            "licenseKey": "contract_identifier",
            "splashScreenImage": `http://localhost:3000/splash.jpg?buster=${Math.random()*10000}`,
            "runtime": {
                "version": "stable"
            },
            "startup_app": {
                "name": "MyApp",
                "uuid": "33aa9062-9eb0-4875-b819-c90f38ef03ea",
                "url": "https://google.com",
                "autoShow": true,
                "defaultWidth": 500,
                "defaultHeight": 500,
            }
    }
}