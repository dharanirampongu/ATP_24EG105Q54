//CReate a custom middleware
function middleware2(req,res,next){
  //send res from middleware
  // res.jso({message:"this res from middleware2"})
  //for req to next
  console.log("middleware2 executed")
  next()
}

//CReate a custom middleware
function middleware1(req,res,next){
  //send res from middleware
  // res.jso({message:"this res from middleware1"})
  //for req to next
  console.log("middleware1 executed")
  next()
}
  //use middleware1
app.use(middleware1);
app.use(middleware2);