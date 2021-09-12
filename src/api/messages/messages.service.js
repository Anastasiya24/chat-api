import { Message } from '../../models/message.model';

async function getMessagesList(senderId) {
  if (senderId && senderId !== 'null') {
    const messages = await Message.find({ senderId });
    return messages;
  } else return [];
}

async function addNewMessage(message) {
  const info = new Message(message);
  const newMessage = await info.save();
  return newMessage;
}

export default {
  getMessagesList,
  addNewMessage,
};
