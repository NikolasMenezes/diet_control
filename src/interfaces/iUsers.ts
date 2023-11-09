export interface User {
  name: string,
  password: any,
  email: string,
  isPremium?: boolean
}

export interface UserBasics {
  height: number,
  weight: number,
  age: number,
  gender: string
}