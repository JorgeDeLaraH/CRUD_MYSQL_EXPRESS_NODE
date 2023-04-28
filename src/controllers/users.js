const conexion=require('../connection');



const getUsers = (req, res) => {
    const mysql='select * from users';
    conexion.query(mysql,(err,rows)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(rows);
            res.render('users', {users: rows} )
        }
    })
    
}

const getCreateUser = (req, res) => {
    
    res.render('create-user')
}

const getUpdateUser = (req, res) => {
    const param=req.params.id;
    conexion.query("select * from users where id=?",param,(err,rows)=>{
        if(err){
            console.log(err);
        }else{
            console.log(rows);
            res.render('update-user', {user: rows});
        }
    })
    
}

const getDeleteUser = (req, res) => {
    const param = req.params.id;
    const sql="delete from users where id=?";
    conexion.query(sql,param,(err,rows)=>{
        if(err){
            console.log(err);
        }else{
            console.log(rows);
        }
    })
    res.redirect("/users/all");
}

const createUser = (req, res)=>{
    const sql='insert into users SET ?';
    const data=req.body;
    conexion.query(sql,data,(err,rows)=>{
        if(err){
            console.log(err);
        }else{
            res.redirect('/users/all');
        }
    })
    console.log(req.body);
    //res.render('users', {users: users} )

}

const updateUser = (req, res)=>{
    const param = {}
    param.id=req.params.id;
    param.name=req.body.name;
    param.age=req.body.age;
    console.log(param);
    const sql="update users set name=?, age=? where id=?";
    conexion.query(sql,[param.name, param.age, param.id],(err,rows)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(rows);
        }
    })
    res.redirect("/users/all");

}

const deleteUser = (req, res)=>{
    
}

module.exports = { 
    getUsers, 
    getCreateUser, 
    getUpdateUser, 
    getDeleteUser,
    createUser, 
    updateUser,
    deleteUser
}