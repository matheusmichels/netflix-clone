import React, { useState } from 'react';
import Video from 'react-native-video';
import PropTypes from 'prop-types';

import { MediaPlayer } from '~/components';
import { Container } from './styles';

import { colors } from '~/styles';

import video from '~/assets/videos/broadchurch.mp4';

export default function Player({ navigation }) {
  const [currentTime, setCurrentTime] = useState(0);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [duration, setDuration] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hidePlayButton, setHidePlayButton] = useState(false);

  function handleLoad({ duration: mediaDuration }) {
    setDuration(mediaDuration);
  }

  function handleProgress({ currentTime: time }) {
    setCurrentTime(time);
  }

  function handleChangePosition(position) {
    if (hidePlayButton) setHidePlayButton(false);

    setCurrentPosition(position);
  }

  return (
    <Container>
      <Video
        source={video}
        style={{ flex: 1, backgroundColor: colors.dark }}
        resizeMode="contain"
        progressUpdateInterval={1000}
        paused={paused}
        seek={currentPosition}
        onLoad={handleLoad}
        onProgress={handleProgress}
        onSeek={({ currentTime: time }) => setCurrentTime(time)}
        onEnd={() => setHidePlayButton(true)}
      />

      <MediaPlayer
        currentPosition={currentTime}
        duration={duration}
        paused={paused}
        hidePlayButton={hidePlayButton}
        onBack={() => navigation.goBack()}
        onPause={pause => setPaused(pause)}
        onChangePosition={handleChangePosition}
      />
    </Container>
  );
}

Player.propTypes = {
  navigation: PropTypes.object,
};
