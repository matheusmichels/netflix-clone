import React from 'react';
import { TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';

import { Container, Title, ScrollView, Cover } from './styles';

function MoviesList({ title, movies, navigation }) {
  return (
    <Container>
      <Title>{title}</Title>

      <ScrollView>
        {movies.map(movie => (
          <TouchableOpacity
            key={movie.id}
            activeOpacity={0.6}
            onPress={() => navigation.navigate('Player', { movie })}
          >
            <Cover source={movie.image} />
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
