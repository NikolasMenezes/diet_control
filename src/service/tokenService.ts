import { sign } from 'jsonwebtoken'

export default class TokenService {

  async generate(payload: object, secretKey: string) {
    return sign(payload, secretKey, { expiresIn: '24h' })
  }
}