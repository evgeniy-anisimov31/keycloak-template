import Router from 'express';
import UserController from "./UserController";

const userRouter = new Router();

userRouter.post('/')
userRouter.get('/', UserController.getUsers)
userRouter.get('/:id')
userRouter.put('/')
userRouter.delete('/:id')

export default userRouter