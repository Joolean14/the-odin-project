var fs = require('fs');

fs.appendFile('mynewfile1.txt', ' This is my updated custom text.', function (err) {
  if (err) throw err;
  console.log('Updated!');
}); 