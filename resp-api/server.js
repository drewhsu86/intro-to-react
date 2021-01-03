const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(logger('dev'))
app.use(bodyParser.json({ limit: '10mb', type: 'application/json' }))
app.use(cors())

// routes 
app.get('/', (req,res) => { 
    res.send('ROOT HERE')
})
app.post('/testpost', (req, res) => {
    try {
        console.log(req.body)

        res.status(200).json(
            {
                message: 'Successfully received POST request.',
                
                reqBody: req.body
            }
        )
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
})

// set port and listener
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log('listening to port ' + PORT))