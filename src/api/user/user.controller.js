import status from 'http-status';
import service from './user.service';

const getUserInfo = async (req, res, next) => {
  try {
    const { id } = req.query;
    const result = await service.getUserInfo(id);

    return result
      ? res.status(status.OK).json(result)
      : res.status(status.BAD_REQUEST).json({ message: 'BAD REQUEST' });
  } catch (error) {
    next(error);
  }
};

const editUserName = async (req, res, next) => {
  try {
    const { id } = req.query;
    const { newName = null } = req.body;

    const result = await service.editUserName(id, newName);

    return result
      ? res.status(status.OK).json(result)
      : res.status(status.BAD_REQUEST).json({ message: 'BAD REQUEST' });
  } catch (error) {
    next(error);
  }
};

export default {
  getUserInfo,
  editUserName,
};
