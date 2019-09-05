import { RESPONSE_LOGIN_GOOGLE } from "../actions/login";

const INITIAL_STATE = {
  googleResponse: {}
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case RESPONSE_LOGIN_GOOGLE:
      return responseGoogleLogin(state, action.payload);
    default:
      return state;
  }
}

//respponse google login
function responseGoogleLogin(state, data) {
  return Object.assign({}, state, { googleResponse: data });
}
