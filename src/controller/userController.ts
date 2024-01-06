import UserModel from '../models/userModel';
import AuthService from '../service/authService';
import { Request, Response } from 'express';
import { User } from '../interfaces/iUsers';

const userModel = new UserModel();
const authService = new AuthService();

class UserController {
  async postUser(req: Request, res: Response) {

    try {
      const userData: User = req["body"];

      const newPassword = await authService.generateHashPassword(userData['password'])

      userData['password'] = newPassword

      await userModel.createUser(userData);

      return res.status(201).json([]);
    }
    catch (e: any) {
      if (e['code'] === "ER_DUP_ENTRY") {
        return res.status(400).json({ 'error': 'email already registred' })
      }
      return res.status(500).json({ 'error': e });
    }
  }

  async getUsers(req: Request, res: Response) {

    try {
      const users = await userModel.selectUsers();

      return res.status(200).json(users);
    }
    catch (e: any) {
      return res.status(500).json({ 'error': e });
    }
  }

  async getUserById(req: Request, res: Response) {

    try {
      const id = req['params']['id']

      const user = await userModel.selectUserById(id);

      return res.status(200).json(user);
    }
    catch (e: any) {
      return res.status(500).json({ 'error': e });
    }
  }

  async putUser(req: Request, res: Response) {

    try {
      const id = req['params']['id']
      const userData: User = req["body"];

      const newPassword = await authService.generateHashPassword(userData['password'])

      userData['password'] = newPassword

      await userModel.updateUser(id, userData);

      return res.status(200).json([]);
    }
    catch (e: any) {
      return res.status(500).json({ 'error': e });
    }

  }

  async deleteUser(req: Request, res: Response) {

    try {
      const id = req['params']['id']

      await userModel.removeUser(id);

      return res.status(200).json([]);
    }
    catch (e: any) {
      return res.status(500).json({ 'error': e });
    }
  }
}

export const userController = new UserController() 