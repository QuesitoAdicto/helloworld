const cors = {req,res,next}=> {
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Request-With, Content-rtype,Accept, Authorization");
  if(req.method==='options'){
    res.header('Access-Control-Allow-Methods','PUT, POST, PATCH, DELETE,GET');
    return res.status(200).json({});
  }
  next();
}
