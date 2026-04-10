const app = require("./src/app.js");

const PORT = 3055

const server = app.listen(PORT, ()=>{
    console.log(`Server start with port = ${PORT}`)
})

process.on('SIGINT', () => {
    server.close( () => console.log("Exits server") )
})