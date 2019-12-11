exports.hasAuth = (req.body.user == 'admin' && req.body.pass == 'admin' ? auth=true : auth=false);
exports.isAuth = ()=> (auth == true ? return next() : res.redirect('/login'));