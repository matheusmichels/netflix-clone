import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { useDispatch } from 'react-redux';

import { signIn } from '~/store/modules/auth/actions';

import { Container, Form, Logo, Input, SendButton, Wave, Text } from './styles';

import logo from '~/assets/images/logo.png';

export default function Login() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <Container>
      <KeyboardAvoidingView enabled={Platform.OS === 'ios'} behavior="padding">
        <Form>
          <Logo source={logo} />

          <Input
            placeholder="E-mail ou número de telefone"
            onChangeText={text => setEmail(text)}
            keyboardType="email-address"
          />
          <Input
            placeholder="Senha"
            onChangeText={text => setPassword(text)}
            secureTextEntry
          />

          <SendButton onPress={() => dispatch(signIn(email, password))}>
            <Wave>
              <Text size={18}>Entrar</Text>
            </Wave>
          </SendButton>

          <Text>Novo por aqui? Inscreva-se agora</Text>
        </Form>
      </KeyboardAvoidingView>
    </Container>
  );
}
