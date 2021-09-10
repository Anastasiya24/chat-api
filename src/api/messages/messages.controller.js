import status from 'http-status';
import service from './messages.service';

const getMessagesList = async (req, res, next) => {
  try {
    const { id = null } = req.query;
    const result = await service.getMessagesList(id);

    return result
      ? res.status(status.OK).json(result)
      : res.status(status.BAD_REQUEST).json({ message: 'BAD REQUEST' });
  } catch (error) {
    next(error);
  }
};

const addNewMessage = async (req, res, next) => {
  try {
    const { id = null } = req.query;
    const { message } = req.body;

    const result = await service.addNewMessage(id, message);

    return result
      ? res.status(status.OK).json(result)
      : res.status(status.BAD_REQUEST).json({ message: 'BAD REQUEST' });
  } catch (error) {
    next(error);
  }
};

export default {
  getMessagesList,
  addNewMessage,
};
