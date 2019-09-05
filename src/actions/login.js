export const RESPONSE_LOGIN_GOOGLE = "RESPONSE_LOGIN_GOOGLE";

//RESPONSE LOGIN GOOGLE
export function responseGoogleLogin(data) {
  return {
    type: RESPONSE_LOGIN_GOOGLE,
    payload: data
  };
}
