import { User } from "../types/user"
import { getValueFromAsyncStorage } from "./getValueAsyncStore"

export const handleGetUserInfo = async () => {
  const user_Info  = await getValueFromAsyncStorage('user_Info')  
  return user_Info
}