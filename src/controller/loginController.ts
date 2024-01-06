import { Login } from '../interfaces/iLogin';
import LoginModel from '../models/loginModel';
import AuthService from '../service/authService';
import { Request, Response } from 'express';

const loginModel = new LoginModel()
const authService = new AuthService()

class LoginController {

  async authenticate(req: Request, res: Response) {
    try {
      const body: Login = req.body;

      const password = Array(await loginModel.getUserInfo(body.email))

      if (password.length <= 0) {
        return res.status(401).json({ status: "Unauthorized" })
      }

      const passwordIsCorrect = await authService.verifyPassword(body.password, String(password[0].password))

      if (!passwordIsCorrect) {
        return res.status(401).json({ status: "Unauthorized" })
      }

      return res.status(200).json({ status: "success" })
    } catch (e: any) {
      return res.status(500).json({ 'error': e })
    }

  }


}

export const loginController = new LoginController()