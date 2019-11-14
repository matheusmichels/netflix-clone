import styled from 'styled-components/native';
import Slider from '@react-native-community/slider';

import { colors } from '~/styles';

export const Overlay = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  opacity: ${props => (props.hide ? 0 : 1)};
`;

export const Header = styled.View`
  padding: 10px;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity`
  opacity: ${props => (props.hide ? 0 : 1)};
  align-self: ${props => (props.center ? 'center' : 'flex-start')};
`;

export const Bar = styled.View`
  flex-flow: row;
  padding: 0 25px;
  align-items: center;
  justify-content: space-between;
`;

export const PlayerSlider = styled(Slider)`
  flex: 1;
  height: 40px;
`;

export const Text = styled.Text`
  color: ${colors.light};
  font-size: ${props => props.size || 14};
`;
