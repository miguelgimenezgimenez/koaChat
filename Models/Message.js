'use strict';

const fs = require('fs');
const dbFilePath = __dirname + '/db.json';
const db = JSON.parse(fs.readFileSync(dbFilePath, 'utf8'));

const Message = {};
Message.getAllMessages = function  () {
  return db.msgs;
};
Message.storeMessage = function (content) {
  db.msgs.push(content);
  fs.writeFile(dbFilePath, JSON.stringify(db));
};
module.exports = Message;
