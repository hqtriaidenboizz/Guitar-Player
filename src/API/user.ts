import { SignInFormData } from '../screens/auth/SignIn';
import axiosRequest from './_index';

export const signInUser = async (Data: SignInFormData) => {
  const url = 'auth/v1/token?grant_type=password';
  return await axiosRequest.post(url, Data);
};

export const fetchUserData = async (id: string | undefined) => {
  const url = `rest/v1/userInfo?id=eq.${id}&select=*`;
  return await axiosRequest.get(url)
}