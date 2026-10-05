// import json server
const jsonServer=require('json-server')
// create server for running json file
const server =jsonServer.create()
// set up route/path for json file
 const router=jsonServer.router('db.json')
//  create middleware :datane convert cheyan vendi  use cheynne ann
const middleware=jsonServer.defaults()
// middleware work cheyennel usenn parana method use cheya
server.use(middleware)
// db.json illott serverne ridirect cheyan 
server.use(router)
// create server port number
const PORT=3000
// e port run avan vendi listen
server.listen(PORT,()=>{
console.log(`server running at ${PORT}`);
})

