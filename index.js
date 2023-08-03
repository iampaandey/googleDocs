const { connectToDB } = require("./Db")
const { runSocket } = require("./controllers")
const {runServer} = require("./socketWork")

runServer()
connectToDB()
runSocket()