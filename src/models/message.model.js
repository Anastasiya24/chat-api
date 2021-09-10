import { Schema, model } from 'mongoose';

const MessageSchema = new Schema({
  senderId: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
});

export const Message = model('messages', MessageSchema);
