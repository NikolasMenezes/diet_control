import * as bcrypt from 'bcryptjs';

export default class AuthService {
  async generateHashPassword(password: string): Promise<{ salt: string, hash: string }> {
    const sal = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, sal);
    return { salt: sal, hash };
  }

  async verifyPassword(password: string, sal: string, hash: string): Promise<boolean> {
    const newHash = await bcrypt.hash(password, sal);
    return newHash === hash;
  }
}