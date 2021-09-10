async function getUserInfo(id) {
  // TODO find by id
  return { id: '1', name: 'Nastya' };
}

async function editUserName(id, newName) {
  // TODO create of find and update by id
  return newName;
}

export default {
  getUserInfo,
  editUserName,
};
