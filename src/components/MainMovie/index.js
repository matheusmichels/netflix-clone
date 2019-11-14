import React from 'react';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

import {
  Container,
  Banner,
  Genres,
  BottomBar,
  WatchButton,
  Text,
  WatchWrapper,
  ActionButton,
} from './styles';

import { colors } from '~/styles';

import strangerThings from '~/assets/images/movies/strangerthings.jpg';

function MainMovie({ navigation }) {
  return (
    <Container>
      <Banner source={strangerThings} />

      <Genres>
        <Text>Thriller • Action • Horror</Text>
      </Genres>

      <BottomBar>
        <ActionButton>
          <Icon name="plus" size={25} color={colors.light} />
          <Text color={colors.grey} size={12}>
            My List
          </Text>
        </ActionButton>

        <WatchButton>
          <WatchWrapper onPress={() => navigation.navigate('Player')}>
            <Icon name="play" size={25} />
            <Text color={colors.dark} size={17} bold>
              Play
            </Text>
          </WatchWrapper>
        </WatchButton>

        <ActionButton>
          <Icon name="information-outline" size={25} color={colors.light} />
          <Text color={colors.grey} size={12}>
            Info
          </Text>
        </ActionButton>
      </BottomBar>
    </Container>
  );
}

MainMovie.propTypes = {
  navigation: PropTypes.object,
};

export default withNavigation(MainMovie);
