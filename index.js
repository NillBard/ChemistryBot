const express = require('express')
const config = require('config')
const { log } = require('console')

const app = express()

app.use('/api/auth', require('./routes/auth.routes'))
const PORT = config.get('port') || 5000


async function start(){
    try {
        await mongoose.connect(config.get('mongoUri'),{
            useNewUrlParse: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
    } catch(e) {
        console.log('Server error',e.message)
        process.exit(1)
    }
}

app.listen(PORT, () => console.log(`Bot started on ${PORT}...`))