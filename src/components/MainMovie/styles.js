import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import { colors } from '~/styles';

export const Container = styled.View`
  padding: 10px;
`;

export const Banner = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 100%;
  height: 400px;
`;

export const Genres = styled.View`
  flex-flow: row;
  justify-content: center;
  margin-top: 15px;
`;

export const BottomBar = styled.View`
  height: 70px;
  flex-flow: row;
  justify-content: space-evenly;
  padding: 10px 0;
`;

export const ActionButton = styled.TouchableOpacity`
  align-items: center;
`;

export const WatchButton = styled(RectButton)`
  align-self: center;
  border-radius: 4px;
  background-color: ${colors.light};
  padding: 0 5px;
`;

export const WatchWrapper = styled.TouchableOpacity`
  padding: 5px 15px 5px 5px;
  flex-flow: row;
  align-items: center;
`;

export const Text = styled.Text`
  color: ${props => props.color || colors.light};
  font-size: ${props => props.size || 13};
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
`;
