const Sequelize = require("sequelize");

//"1234"
const sequelize = new Sequelize("socialapp", "root", "1234", {
  dialect: "mysql",
  host: "localhost",
  port: 3306,
});

module.exports = sequelize; 