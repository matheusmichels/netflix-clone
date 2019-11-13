import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  padding: 10px;
`;

export const Banner = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 100%;
  height: 400px;
`;

export const WatchButton = styled(RectButton)``;
