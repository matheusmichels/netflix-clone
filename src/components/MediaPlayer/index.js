import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

import {
  Overlay,
  Container,
  Header,
  Button,
  Bar,
  PlayerSlider,
  Text,
} from './styles';

import { colors } from '~/styles';

export default function MediaPlayer({
  currentPosition,
  duration,
  paused,
  onBack,
  onChangePosition,
  onPause,
}) {
  const [time, setTime] = useState();

  useEffect(() => {
    const result = new Date(currentPosition * 1000).toISOString().substr(11, 8);
    setTime(result);
  }, [currentPosition]);

  return (
    <Overlay>
      <Container>
        <Header>
          <Button onPress={onBack}>
            <Icon name="arrow-left-thick" size={30} color={colors.light} />
          </Button>
          <Text size={18}>Stranger Things</Text>
          <Button>
            <Icon name="information-outline" size={30} color={colors.light} />
          </Button>
        </Header>

        <Button center onPress={() => onPause(!paused)}>
          <Icon
            name={paused ? 'play' : 'pause'}
            size={60}
            color={colors.light}
          />
        </Button>

        <Bar>
          <PlayerSlider
            step={1}
            value={currentPosition || 0}
            minimumValue={0}
            maximumValue={duration}
            onSlidingStart={() => onPause(true)}
            onSlidingComplete={value => onChangePosition(value)}
            thumbTintColor={colors.primary}
            maximumTrackTintColor={colors.light}
            minimumTrackTintColor={colors.primary}
          />
          <Text>{time}</Text>
        </Bar>
      </Container>
    </Overlay>
  );
}

MediaPlayer.propTypes = {
  currentPosition: PropTypes.number,
  duration: PropTypes.number,
  paused: PropTypes.bool,
  onBack: PropTypes.func,
  onChangePosition: PropTypes.func,
  onPause: PropTypes.func,
};
