import React from 'react';
import { ScrollView } from 'react-native';

import { Header, TabIcon, MainMovie } from '~/components';

import { Container } from './styles';

export default function Movies() {
  return (
    <Container>
      <ScrollView
        keyboardShouldPersistTaps="always"
        contentContainerStyle={{ flex: 1 }}
      >
        <Header />
        <MainMovie />
      </ScrollView>
    </Container>
  );
}

Movies.navigationOptions = {
  title: 'Início',
  tabBarIcon: props => <TabIcon name="home-outline" {...props} />,
};
