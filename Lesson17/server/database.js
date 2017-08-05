const mysql = require('mysql');

let state = {
  database: null
}

module.exports = {
  connect: (done) => {
  
    if(state.database) return done();

    let connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'rustislav',
      database: 'test'
    }) 

    state.database = connection;
    
    done();
  },
  get: () => (state.database)
}
