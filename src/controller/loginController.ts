import LoginModel from '../models/loginModel';
import AuthService from '../service/authService';
import TokenService from '../service/tokenService';
import { Login } from '../interfaces/iLogin';
import { Request, Response } from 'express';

import { SECRET_KEY } from '../constants';

const loginModel = new LoginModel()
const authService = new AuthService()
const tokenService = new TokenService()

class LoginController {

  async authenticate(req: Request, res: Response) {
    try {
      const body: Login = req.body;

      const password = await loginModel.getUserInfo(body.email)

      if (password.length <= 0) {
        return res.status(401).json({ status: "Unauthorized" })
      }

      const passwordIsCorrect = await authService.verifyPassword(body.password, String(password[0].password))

      if (!passwordIsCorrect) {
        return res.status(401).json({ status: "Unauthorized" })
      }

      const token = await tokenService.generate(body, String(SECRET_KEY))

      return res.status(200).json({ status: "success", token: token })
    } catch (e: any) {
      return res.status(500).json({ 'error': e })
    }

  }


}

export const loginController = new LoginController()