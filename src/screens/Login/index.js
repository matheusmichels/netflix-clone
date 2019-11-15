import React, { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
  ScrollView,
} from 'react-native';
import { useDispatch } from 'react-redux';

import { signIn } from '~/store/modules/auth/actions';

import { Input } from '~/components';
import { Container, Form, Logo, SendButton, Wave, Text } from './styles';

import logo from '~/assets/images/logo.png';

export default function Login() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function handleLogin() {
    if (!email || !password) {
      Alert.alert('Warning', 'Please, fill in email and password fields');
      return;
    }

    dispatch(signIn(email, password));
  }

  return (
    <Container>
      <KeyboardAvoidingView enabled={Platform.OS === 'ios'} behavior="padding">
        <ScrollView keyboardShouldPersistTaps="always">
          <Form>
            <Logo source={logo} />

            <Input
              placeholder="Email or phone number"
              onChangeText={text => setEmail(text)}
              keyboardType="email-address"
            />
            <Input
              placeholder="Password"
              onChangeText={text => setPassword(text)}
              secureTextEntry
            />

            <SendButton onPress={handleLogin}>
              <Wave>
                <Text size={18}>Sign In</Text>
              </Wave>
            </SendButton>

            <TouchableOpacity>
              <Text>New to Netflix? Sign up now.</Text>
            </TouchableOpacity>
          </Form>
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
}
