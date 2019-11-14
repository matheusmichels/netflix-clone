import React from 'react';

import { Header, TabIcon, MainMovie, MoviesList } from '~/components';

import { Container, ScrollView } from './styles';

export default function Home() {
  const movies = new Array(10);
  movies.fill(true);

  return (
    <Container>
      <Header />
      <ScrollView>
        <MainMovie />

        <MoviesList title="Popular on Netflix" movies={movies} />
        <MoviesList title="Trending Now" movies={movies} />
      </ScrollView>
    </Container>
  );
}

Home.navigationOptions = {
  tabBarIcon: props => <TabIcon name="home-outline" {...props} />,
};
