var fs = require('fs');
var mysql = require('mysql');

/**
 * MySQL connection object.
 * @type {import('mysql').Connection}
 */

const database = mysql.createConnection({
  host: "localhost",
  user: "fjdlsajfel",
  password: "fjdsaljfksdla",
});

database.connect((err) => {
  if (err) throw err;
  console.log("Connected!");

  fs.readFile('script.sql', 'utf8', (err, data) => {
    if (err) throw err;
    /**
     * Array containing the commands obtained by splitting the data string.
     * @type {Array<string>}
     */
    var commands = data.split(';');

    commands.forEach((command) => {
      if (command.trim() !== '') {
        database.query(command, (err, result) => {
          if (err) throw err;
        });
      }
    });

    console.log("Script executed");
  });
});