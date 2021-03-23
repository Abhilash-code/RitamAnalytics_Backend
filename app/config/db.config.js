module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "ritam",
    PORT: "3306",
    dialect: "mysql", 
    pool: {
        max: 5,
        min: 0,
        idle: 10000,
        acquire: 30000
    }
};
