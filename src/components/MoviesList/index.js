import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { withNavigation } from 'react-navigation';
import { Container, Title, ScrollView, Cover } from './styles';

import strangerThings from '~/assets/images/movies/strangerthings.jpg';

function MoviesList({ title, movies, navigation }) {
  return (
    <Container>
      <Title>{title}</Title>

      <ScrollView>
        {movies.map(movie => (
          <TouchableOpacity
            key={String(Math.random())}
            activeOpacity={0.6}
            onPress={() => navigation.navigate('Player')}
          >
            <Cover movie={movie} source={strangerThings} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </Container>
  );
}

MoviesList.propTypes = {
  title: PropTypes.string,
  movies: PropTypes.array,
  navigation: PropTypes.object,
};

export default withNavigation(MoviesList);
