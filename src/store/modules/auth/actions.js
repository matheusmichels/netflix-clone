export function signIn(email, password) {
  return {
    type: '@auth/SIGN_IN',
    payload: { user: { email, password } },
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
