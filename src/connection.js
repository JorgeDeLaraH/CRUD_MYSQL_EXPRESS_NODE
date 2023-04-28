const mysql=require('mysql');
const {mysql_database} =require('./config');
const connection=mysql.createConnection(mysql_database);
connection.connect((err,conn)=>{
    if(err){
        console.log('A ocurrido un error');
    }
    else{
        console.log('conexion exitosa');
        return conn;
    }
});
module.exports=connection;