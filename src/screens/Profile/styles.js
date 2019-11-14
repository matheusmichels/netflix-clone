import styled from 'styled-components/native';
import { SafeAreaView } from 'react-navigation';
import { RectButton } from 'react-native-gesture-handler';

import { colors } from '~/styles';

export const Container = styled(SafeAreaView).attrs({
  forceInset: { bottom: 'never' },
})`
  background-color: ${colors.accent};
  flex: 1;
`;

export const Form = styled.View`
  margin: 5%;
`;

export const SaveButton = styled(RectButton)`
  width: 100%;
  background-color: ${colors.light};
  margin-top: 10px;
  border-radius: 4px;
  padding: 10px;
  align-items: center;
  justify-content: center;
`;

export const SaveText = styled.Text`
  font-size: 18px;
  color: ${colors.dark};
  font-weight: bold;
`;

export const Text = styled.Text`
  font-size: ${props => props.size || 14};
  color: ${props => props.color || colors.light};
  margin-left: 5px;
  margin-top: ${props => (props.top ? 20 : 0)};
  margin-bottom: 20px;
`;
