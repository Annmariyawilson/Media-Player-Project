//importing json.server
const jsonserver=require("json-server")

//creating server
const mpServer=jsonserver.create()

//initializing middleware
const middleware=jsonserver.defaults()
//creating router instance for resources
const router=jsonserver.router("db.json")

//configuring middleware and router to server
mpServer.use(middleware)
mpServer.use(router)

//setting port number
const PORT = 3002 || process.env.PORT;

//calling listen methode with server for activating server
mpServer.listen(PORT,()=>{
    console.log("Server running at PORT:"+PORT);
    
})
