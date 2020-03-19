const server = require('./api/server.js')

const PORT = process.env.PORT || 5400

server.listen(PORT,() => {
    console.log(`Server is listening on port ${PORT}`)
})