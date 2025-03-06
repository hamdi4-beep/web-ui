import { createWriteStream } from 'fs'
import { createServer } from 'net'
import { Readable } from 'stream'

const server = createServer()

server.listen(8000, () => {
    console.log('Listening in on port', 8000)
})

server
    .on('error', err => console.error(err))
    .on('connection', socket => {
        Readable.from('Who are you?')
            .pipe(socket)
            .pipe(createWriteStream('response.md'))
    })