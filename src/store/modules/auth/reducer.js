const INITIAL_STATE = {
  user: null,
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGN_IN':
      return {
        ...state,
        user: {
          email: action.payload.email,
          password: action.payload.password,
        },
      };
    case '@auth/SIGN_OUT':
      return { ...state, user: null };
    default:
      return state;
  }
}
