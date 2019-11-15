import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
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

  const user = useSelector(state => state.auth.user);
  const movie = navigation.getParam('movie');

  useEffect(() => {
    async function loadUserMovies() {
      let stored = await AsyncStorage.getItem(user.email);
      stored = JSON.parse(stored) || [];

      if (!stored.includes(movie.id)) {
        stored.push(movie.id);
      }

      await AsyncStorage.setItem(user.email, JSON.stringify(stored));
    }

    loadUserMovies();
  }, []);

  function handleLoad({ duration: mediaDuration }) {
    setDuration(mediaDuration);
  }

  function handleProgress({ currentTime: time }) {
    setCurrentTime(time);
  }

  function handleChangePosition(position) {
    if (hidePlayButton) setHidePlayButton(false);

    setCurrentTime(position);
    setCurrentPosition(position);
  }

  async function handleEnd() {
    setHidePlayButton(true);
    setCurrentTime(duration);

    let stored = await AsyncStorage.getItem(user.email);
    stored = JSON.parse(stored) || [];

    if (stored.includes(movie.id)) {
      const index = stored.indexOf(movie.id);
      stored.splice(index, 1);
    }

    await AsyncStorage.setItem(user.email, JSON.stringify(stored));
  }

  return (
    <Container>
      <Video
        source={video}
        style={{ flex: 1, backgroundColor: colors.dark }}
        resizeMode="contain"
        progressUpdateInterval={250}
        paused={paused}
        seek={currentPosition}
        onLoad={handleLoad}
        onProgress={handleProgress}
        onSeek={({ currentTime: time }) => setCurrentTime(time)}
        onEnd={handleEnd}
      />

      <MediaPlayer
        title={movie.title}
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
