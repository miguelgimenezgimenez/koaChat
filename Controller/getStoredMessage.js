const Message = require('../Models/Message.js');

exports.getStoredMessages = function* () {
  this.body =  Message.getAllMessages();

};
exports.storeMessage = function* () {
  Message.storeMessage(this.request.body);
};
