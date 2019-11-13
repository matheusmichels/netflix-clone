import React from 'react';

import { Container, Banner } from './styles';

import strangerThings from '~/assets/movies/strangerthings.jpg';

export default function MainMovie() {
  return (
    <Container>
      <Banner source={strangerThings} />
    </Container>
  );
}
