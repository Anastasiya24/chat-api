import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

export const User = model('users', UserSchema);
