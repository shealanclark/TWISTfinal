exports.login = function(req, res, next){
  sess = req.sesssion;
  if(req.body.user === 'admin' && req.body.pass == 'admin'){
    login = true;
    return next();
  }else{
    res.render('login/login');
  }
}

exports.isAuth = function(req, res, next){
  console.log('Something is sort of fucked');
  if(login === true){
    console.log('Something is fucked');
    return next();
  }else{
    console.log('something else is fucked')
    res.redirect('login/login');
  }
}