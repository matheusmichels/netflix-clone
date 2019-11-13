import React from 'react';
import { useDispatch } from 'react-redux';
import { TouchableOpacity, Text } from 'react-native';

import { TabIcon } from '~/components';

import { signOut } from '~/store/modules/auth/actions';

import { Container } from './styles';

export default function Profile() {
  const dispatch = useDispatch();

  return (
    <Container>
      <TouchableOpacity onPress={() => dispatch(signOut())}>
        <Text style={{ color: '#fff' }}>Sair</Text>
      </TouchableOpacity>
    </Container>
  );
}

Profile.navigationOptions = {
  title: 'Perfil',
  tabBarIcon: props => <TabIcon name="account-outline" {...props} />,
};
