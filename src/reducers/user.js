import { SAVE_USER_LOGGED_INFORMATION } from "../actions/user";

const INITIAL_STATE = {
  userLogged: {}
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SAVE_USER_LOGGED_INFORMATION:
      return saveUserLoggedInformation(state, action.payload);
    default:
      return state;
  }
}

//respponse google login
function saveUserLoggedInformation(state, data) {
  return Object.assign({}, state, { userLogged: data });
}
