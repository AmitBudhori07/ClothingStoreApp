/* eslint-disable no-underscore-dangle */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import User from '../../../../models/user.model';
import { checkUserAlreadyExists } from '../utils';
import connectDB from '../../../../config/dbConnection';

export default async (req, res) => {
  if (req.method === 'POST') {
    connectDB();
    const { userEmail } = req.body;
    if (userEmail) {
      // check if the user is not already present in the

      const checkUserExistance = await checkUserAlreadyExists(userEmail);
      if (checkUserExistance === true) {
        return res.status(200).json({ message: 'Successfully Logged In with email!' });
      }
      const insertUser = new User({
        userEmail,
      });

      console.log(insertUser);

      const _insertUser = await insertUser.save();

      console.log(_insertUser);
      if (_insertUser) return res.status(200).json({ message: 'Successfully Logged In!' });
      return res.status(500).json({ message: 'Something Went Wrong!' });
    }

    return res.status(404).json({ message: 'Please Provide the user email!' });
  }
  return res.status(405).json({ message: 'Unexpected request method!!' });
};
