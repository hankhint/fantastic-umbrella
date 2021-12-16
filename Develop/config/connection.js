require('dotenv').config();

const Sequelize = require('sequelize');


// if it exists we are in the heroku env, if it doesn't we are on the local machine
// validates that sequelize is not NULL
const sequelize = process.env.JAWSDB_URL
//if true set to process
  ? new Sequelize(process.env.JAWSDB_URL)
  // if false go to this branch
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

  var number = true ? 5: 10
 
  var number;
  // if input is false then number = 10
  // if input is true then number = 5
  if (false) 
  {
    number = 5;
  } else {
    number = 10;
  }

module.exports = sequelize;
