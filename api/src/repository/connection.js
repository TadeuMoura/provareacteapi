import mysql2 from 'mysql2/promise'

const con = await mysql2.createConnection({
    host:process.env.MY_SQL_HOST,
    user:process.env.MY_SQL_USER,
    password:process.env.MY_SQL_PWD,
    database:process.env.MY_SQL_DB,

    typeCast:(field, next) =>{
        if (field === 'TINY' && field.lenght===1){
            return (field.string==='1');
        } else {
            return next();
        }
    
    }
    
})

console.log('BD CONECTADO');

export { con }