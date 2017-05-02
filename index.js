const micro = require('micro')

const port = process.env.PORT || 3000

const server = micro(async () => 'Hello world')
server.listen(port, () => console.log(`Listening on port ${port}`))
