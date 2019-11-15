import { Alert } from 'react-native';

import users from '~/services/users';

export function signIn(email, password) {
  const user = users.filter(
    u => u.email === email && u.password === password
  )[0];

  if (!user) {
    Alert.alert('Warning', 'Incorrect email or password');
  }

  return {
    type: '@auth/SIGN_IN',
    payload: {
      user,
    },
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
