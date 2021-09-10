const tmpMessagesList = [
  {
    id: '62fbab18-99f7-497a-8005-1da959d58b8b',
    senderId: '1',
    text: 'Hi!',
    time: '17:09',
  },
  {
    id: '4a75456f-b0de-4116-922e-66024666f760',
    senderId: '1',
    text: 'Hello',
    time: '17:09',
  },
];

async function getMessagesList(id) {
  // TODO find by sender id
  return tmpMessagesList;
}

async function addNewMessage(id, message) {
  // TODO create message and return it
  const list = Array.from(tmpMessagesList);
  list.push(message);
  return list;
}

export default {
  getMessagesList,
  addNewMessage,
};
