import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Container, Icon, Text } from './styles';

import icon from '~/assets/images/icon.png';

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
        <Text>Minha lista</Text>
      </TouchableOpacity>
    </Container>
  );
}
