import connection from "./connection";

import { ResultSetHeader } from "mysql2/promise";

export default class LoginModel {

  async getUserInfo(email: string): Promise<ResultSetHeader> {
    
    const query = "SELECT password FROM users WHERE email = ?"

    const [password] = await connection.execute(query, [email])

    return password as ResultSetHeader

  }


}