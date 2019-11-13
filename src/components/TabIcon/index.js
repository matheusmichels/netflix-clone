import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

export default function TabIcon({ name, tintColor }) {
  return <Icon name={name} size={24} color={tintColor} />;
}

TabIcon.propTypes = {
  name: PropTypes.string.isRequired,
  tintColor: PropTypes.string.isRequired,
};
