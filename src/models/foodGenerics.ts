import connection from './connection'
import { FoodGenerics } from '../interfaces/iFoodGenerics'

export default class FoodGenericsModel {

  async getAll(): Promise<FoodGenerics[]> {

    const query = "SELECT * FROM food_generics"

    const [food_generics] = await connection.execute(query)

    return food_generics as FoodGenerics[]
  }

  async getByGroup(group: string): Promise<FoodGenerics[]> {

    const query = "SELECT * FROM food_generics where group = ?"

    const [food_generics] = await connection.execute(query, [group])

    return food_generics as FoodGenerics[]
  }

}