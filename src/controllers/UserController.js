import User from '../models/User.js';

class UserController {
  /**
   *
   * @param {*} req
   * @param {*} res
   * create new user
   */
  static async createUser(req, res) {
    try {
      const newUser = new User(req.body);
      await newUser.save();
      res.status(201).json({
        status: true,
        message: 'User created successful',
        userData: newUser,
      });
    } catch (error) {
      res
        .status(500)
        .json({ status: false, message: `An error occured: ${error}` });
    }
  }
  /**
   *
   * @param {*} req
   * @param {*} res
   * fetch all users
   */
  static async getUsers(req, res) {
    try {
      const users = await User.find().exec();
      if (users) {
        res.status(200).json({
          status: true,
          message: 'Here are the users',
          userData: users,
        });
      }
    } catch (error) {
      res
        .status(404)
        .json({ status: false, message: `An error occured: ${error}` });
    }
  }
  /**
   *
   * @param {*} req
   * @param {*} res
   * update the user by id
   */
  static async updateUser(req, res) {
    const userId = req.params.userId;

    const updatedUser = await User.findOneAndUpdate(
      { _id: userId },
      { $set: req.body }
    ).exec();
    if (!updatedUser) {
      res.status(404).json({
        status: false,
        message: `No user found with this user ${userId}`,
      });
    }
    res.status(202).json({
      status: true,
      message: 'User date updated successufully',
      userData: updatedUser,
    });
  }

  /**
   *
   * @param {*} req
   * @param {*} res
   * delete a single user
   */
  static async deleteUser(req, res) {
    const userId = req.params.userId;
    const user = await User.findByIdAndDelete({ _id: userId });
    if (!user) {
      res.status(404).json({
        status: false,
        message: `No user found with this user ${userId}`,
      });
    }
    res.status(204).json({
      status: true,
      message: `User with this id ${userId} deleted successfully`,
    });
  }
}

export default UserController;
