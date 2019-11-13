import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Container, Icon, Text } from './styles';

import icon from '~/assets/icon.png';

export default function Header() {
  return (
    <Container>
      <Icon source={icon} />
      <TouchableOpacity>
        <Text>Séries</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Filmes</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Minha Lista</Text>
      </TouchableOpacity>
    </Container>
  );
}
