module.exports = {
  "development": {
    "username": process.env.MYSQL_USERNAME,
    "password": process.env.MYSQL_PASSWORD,
    "database": process.env.MYSQL_DATABASE,
    "host": process.env.MYSQL_HOST,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "use_env_variable": "mysql://i2l9aosfyvs44l3k:yi26o28rneqqrxio@m7wltxurw8d2n21q.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/w5y7mlekr9jcvojc",
    "dialect": "mysql"
  }
}
