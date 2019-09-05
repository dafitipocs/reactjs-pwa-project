export const SAVE_USER_LOGGED_INFORMATION = "SAVE_USER_LOGGED_INFORMATION";

//RESPONSE LOGIN GOOGLE
export function saveUserLoggedInformation(data) {
  return {
    type: SAVE_USER_LOGGED_INFORMATION,
    payload: data
  };
}
