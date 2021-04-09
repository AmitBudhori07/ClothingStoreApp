/* eslint-disable import/prefer-default-export */
import User from '../../../../models/user.model';

export const checkUserAlreadyExists = async (userEmail) => {
  if (userEmail) {
    const userData = await User.find().where('userEmail').equals(userEmail);
    if (userData) {
      return true;
    }
    return false;
  }
};
