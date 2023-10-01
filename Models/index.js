const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize('expressdb','root','12345',{
    host:'localhost',
    dialect : 'mysql'
}) 


try{
sequelize.authenticate()
console.log('connection established successfully')
}catch(err){
    console.log(err)
}

var db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.sequelize.sync({force:false})

db.inventry = require('./inventry')(sequelize,DataTypes)

module.exports = db