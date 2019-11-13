export function signIn(email, password) {
  return {
    type: '@auth/SIGN_IN',
    payload: { email, password },
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
