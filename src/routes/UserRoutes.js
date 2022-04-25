const { Router } = require('express');
const UserController = require('../controllers/UserController');

const UserRouter = Router();

UserRouter.post('/', UserController.createUser);
UserRouter.get('/', UserController.getUsers);
UserRouter.patch('/update-user/:userId', UserController.updateUser);
UserRouter.delete('/remove-user/:userId', UserController.deleteUser);

module.exports = UserRouter;
