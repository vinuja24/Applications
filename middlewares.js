// ---------- Application level Middleware-----------

var express=require('express')
var app=express();
const port=2000

app.use((req,res,next)=>{
 
    console.log('request menthod is',req.method,'and',req.url,'url address page is running')
    next();
})

app.get('/',(req,res,next)=>{
    console.log("First page");
    res.send('Welcome to learn middlewares')
    next()
})
app.get('/exist',(req,res,next)=>{
    console.log("Second page");
    res.send('learn middlewares')
    next();
})

app.use((req,res)=>{
    console.log("end")
})
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});



// var express=require('express');

// var server =express();

// var passengerName;

// // server.use(airportTerminal);
// function airportTerminal(request,response,next){
//     var proof=request.query['proof'];
//     if(proof==='Aadhar')
//     next()
// else{
//     response.send("<h1>Without valid proof , we are not allowing</h1>")
// }

// }
// function getPassengerName(request,response,next){

//     passengerName=request.query['passenger'];
//     if(passengerName.length>=4)
//      next()
// else{
//     response.send("<h1>Enter Valid Name</h1>");
// }
// }

// server.get("/targetflight",airportTerminal,getPassengerName,(request,response)=>{

// response.send("<h1> welcome " +passengerName+ " !!!.Have a wonderful journey</h1>")

// })

// server.get("/viptargetflight",(request,response)=>{

// response.send("<h1> welcome " +"VIP"+ " !!!.Have a wonderful journey</h1>")

// })


// server.listen(5000,()=>{
//     console.log("express server is waiting for client connections")
// })
