import { genSalt, hash, compare } from 'bcryptjs'

export default class AuthService {
  async generateHashPassword(password: string): Promise<string> {
    const sal = await genSalt(10);
    const hashedPassword = await hash(password, sal);
    return hashedPassword;
  }

  async verifyPassword(password: string, hashPassword: string): Promise<boolean> {
    return await compare(password, hashPassword)
  }
}
