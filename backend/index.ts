import { connect } from 'net'

const socket = connect(8000)

socket.on('connect', () => {
    socket.write('Who are you exactly?')
    socket.end()
})

socket
    .on('error', console.error)
    .on('data', data => {
        console.log(data.toString())
    })