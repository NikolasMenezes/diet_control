import UserModel from '../models/userModel';
import AuthService from '../service/authService';
import { Request, Response } from 'express';
import { User } from '../interfaces/iUsers';

const userModel = new UserModel();
const authService = new AuthService();

export async function postUser(req: Request, res: Response) {

  try {
    const userData: User = req["body"];

    const newPassword = await authService.generateHashPassword(userData['password'])

    userData['password'] = newPassword['hash']

    const newUser = userModel.createUser(userData);

    return res.status(201).json(newUser);
  }
  catch (e: any) {
    return res.status(500).json({ 'error': e });
  }
}

export async function getUsers(req: Request, res: Response) {

  try {
    const users = await userModel.selectUsers();

    return res.status(200).json(users);
  }
  catch (e: any) {
    return res.status(500).json({ 'error': e });
  }
}

export async function getUserById(req: Request, res: Response) {

  try {
    const id = req['params']['id']

    const user = await userModel.selectUserById(id);

    return res.status(200).json(user);
  }
  catch (e: any) {
    return res.status(500).json({ 'error': e });
  }
}

export async function putUser(req: Request, res: Response) {

  try {
    const id = req['params']['id']
    const userData: User = req["body"];

    const newPassword = await authService.generateHashPassword(userData['password'])

    userData['password'] = newPassword['hash']

    await userModel.updateUser(id, userData);

    return res.status(200).json([]);
  }
  catch (e: any) {
    return res.status(500).json({ 'error': e });
  }

}

export async function deleteUser(req: Request, res: Response) {

  try {
    const id = req['params']['id']

    await userModel.removeUser(id);

    return res.status(200).json([]);
  }
  catch (e: any) {
    return res.status(500).json({ 'error': e });
  }
}