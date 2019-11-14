import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Container, Icon, Text } from './styles';

import icon from '~/assets/images/icon.png';

export default function Header() {
  return (
    <Container>
      <Icon source={icon} />
      <TouchableOpacity>
        <Text>TV Shows</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Movies</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>My List</Text>
      </TouchableOpacity>
    </Container>
  );
}
