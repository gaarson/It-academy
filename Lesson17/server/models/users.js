const db = require('../database.js');

exports.getUsers = () => {
  return new Promise((resolve, reject) => {
    db.get().query('select * from users', (err, rows) => {
      if(err) reject(err)

      console.log(rows);

      resolve(rows);
    })
  })
}

exports.newUser = (user) => {
  console.log(user, 'check');
  return new Promise((resolve, reject) => {
    db.get().query(
      "insert into users set ?",
      user, 
      (err, rows) => {
        if(err) reject(err);

        console.log('rows', rows);

        resolve({staus: 'ok'});
      })
  })
}
