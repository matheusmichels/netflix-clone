import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { withNavigationFocus } from 'react-navigation';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { Header, TabIcon, MainMovie, MoviesList } from '~/components';
import { Container, ScrollView } from './styles';

import movies from '~/services/movies';

function Home({ isFocused }) {
  const [storedMovies, setStoredMovies] = useState([]);

  const user = useSelector(state => state.auth.user);

  useEffect(() => {
    async function loadUserMovies() {
      const stored = JSON.parse(await AsyncStorage.getItem(user.email));

      if (stored) {
        const filtered = movies.filter(movie => stored.includes(movie.id));
        setStoredMovies(filtered);
      }
    }

    loadUserMovies();
  }, [isFocused]);

  return (
    <Container>
      <Header />
      <ScrollView>
        <MainMovie />

        {storedMovies.length > 0 && (
          <MoviesList
            title={`Continue Watching for ${user.name}`}
            movies={storedMovies}
          />
        )}

        <MoviesList title="Popular on Netflix" movies={movies} />
        <MoviesList title="Trending Now" movies={movies} />
      </ScrollView>
    </Container>
  );
}

Home.propTypes = {
  isFocused: PropTypes.bool,
};

Home.navigationOptions = {
  tabBarIcon: props => <TabIcon name="home-outline" {...props} />,
};

export default withNavigationFocus(Home);
