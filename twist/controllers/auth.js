exports.hasAuth = function(req, res, next){
  if(req.body.user == 'admin' && req.body.pass == 'admin'){
    auth = true;
    return next();
  }else{
    res.render('login/login');
  }
}


exports.isAuth = function(req, res, next){
  if(auth == true){
    return next();
  }else{
    res.redirect('login/login');
  }
}