import React from 'react';

import { Header, TabIcon, MainMovie, MoviesList } from '~/components';

import { Container, ScrollView } from './styles';

export default function Movies() {
  const movies = new Array(10);
  movies.fill(true);

  return (
    <Container>
      <Header />
      <ScrollView>
        <MainMovie />

        <MoviesList title="Populares na Netflix" movies={movies} />
        <MoviesList title="Em alta" movies={movies} />
      </ScrollView>
    </Container>
  );
}

Movies.navigationOptions = {
  title: 'Início',
  tabBarIcon: props => <TabIcon name="home-outline" {...props} />,
};
