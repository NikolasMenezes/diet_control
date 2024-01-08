import { Request, Response } from 'express';
import { SECRET_KEY } from '../constants';
import FoodGenericsModel from '../models/foodGenerics';
import TokenService from '../service/tokenService';

const tokenService = new TokenService()
const foodGenericsModel = new FoodGenericsModel()

class FoodGenericsController {
  async getAll(req: Request, res: Response) {
    try {
      const info = await foodGenericsModel.getAll()

      return res.status(200).json(info)
    } catch (e: any) {
      return res.status(500).json(e.message)
    }
  }
  async getByGroup(req: Request, res: Response) {
    try {
      const sentGroup = req.query.group as string

      const foodInfo = await foodGenericsModel.getByGroup(sentGroup)

      return res.status(200).json(foodInfo)
    } catch (e: any) {
      return res.status(500).json({ error: e.message })
    }


  }
}

export const foodGenericsController = new FoodGenericsController()