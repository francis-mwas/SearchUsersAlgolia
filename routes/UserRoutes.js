import { Router } from 'express';
import UserController from '../controllers/UserController.js';

const UserRouter = Router();

UserRouter.post('/', UserController.createUser);
UserRouter.get('/', UserController.getUsers);
UserRouter.patch('/update-user/:userId', UserController.updateUser);
UserRouter.delete('/remove-user/:userId', UserController.deleteUser);

export default UserRouter;
