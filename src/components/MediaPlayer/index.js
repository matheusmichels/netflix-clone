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
  title,
  currentPosition,
  duration,
  paused,
  hidePlayButton,
  onBack,
  onChangePosition,
  onPause,
}) {
  const [hidePlayer, setHidePlayer] = useState(false);
  const [time, setTime] = useState();

  useEffect(() => {
    const result = new Date(currentPosition * 1000).toISOString().substr(11, 8);
    setTime(result);
  }, [currentPosition]);

  return (
    <Overlay onPress={() => setHidePlayer(!hidePlayer)}>
      {!hidePlayer && (
        <Container hide={hidePlayer}>
          <Header>
            <Button onPress={onBack}>
              <Icon name="arrow-left" size={30} color={colors.light} />
            </Button>
            <Text size={18}>{title}</Text>
            <Button>
              <Icon name="information-outline" size={30} color={colors.light} />
            </Button>
          </Header>

          <>
            {!hidePlayButton && (
              <Button
                center
                hide={hidePlayButton}
                onPress={() => onPause(!paused)}
              >
                <Icon
                  name={paused ? 'play' : 'pause'}
                  size={60}
                  color={colors.light}
                />
              </Button>
            )}
          </>

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
      )}
    </Overlay>
  );
}

MediaPlayer.propTypes = {
  title: PropTypes.string,
  currentPosition: PropTypes.number,
  duration: PropTypes.number,
  paused: PropTypes.bool,
  hidePlayButton: PropTypes.bool,
  onBack: PropTypes.func,
  onChangePosition: PropTypes.func,
  onPause: PropTypes.func,
};
