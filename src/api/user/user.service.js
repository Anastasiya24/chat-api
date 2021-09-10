import { User } from '../../models/user.model';

async function getUserInfo(id) {
  if (id && id !== 'null') {
    let user = await User.findById(id);
    return user;
  }
  return { _id: '', name: '' };
}

async function editUserName(id, newName) {
  if (id && id !== 'null') {
    await User.findByIdAndUpdate(
      { _id: id },
      {
        name: newName,
      }
    );
    return { id, name: newName };
  } else {
    const user = await User({
      name: newName,
    });
    const info = await user.save();
    return { id: info._id, name: newName };
  }
}

export default {
  getUserInfo,
  editUserName,
};
