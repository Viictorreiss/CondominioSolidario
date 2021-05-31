const mysql = require("mysql2/promise")

async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;
 
    const connection = await mysql.createConnection("mysql://callegaz:1adf020b@db4free.net:3306/condsolidario")
    // const connection = await mysql.createConnection("mysql://root:riegert123@localhost:3306/condsolidario")
    global.connection = connection
    return connection
}

async function disconnect() {
    global.connection.disconnect();
}

module.exports = connect