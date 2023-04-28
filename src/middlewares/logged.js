const isLogged = (req, res, next) => {
    let logged = false
    if (logged) {
        next()
    }else{
        res.send('No puede acceder, debe loguearse')
    }
}

exports.isLogged = isLogged