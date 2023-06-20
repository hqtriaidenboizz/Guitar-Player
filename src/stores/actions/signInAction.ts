import { SignInFormData } from "../../screens/auth/SignIn";
import { SignInFailure, SignInFailurePayload, SignInRequest, SignInSuccess, SignInSuccessPayload } from "../../types/user";

export const signInRequest = (formData: SignInFormData): SignInRequest => ({
  type: 'SIGNIN_REQUEST',
  formData: formData,
});

export const signInSuccess = (payload: SignInSuccessPayload) : SignInSuccess => ({
  type:'SIGNIN_SUCCESS',
  payload,
})

export const signInFailure = (payload: SignInFailurePayload): SignInFailure =>({
  type:'SIGNIN_FAILURE',
  payload,
})