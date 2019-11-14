import styled from 'styled-components/native';
import { SafeAreaView } from 'react-navigation';
import { RectButton } from 'react-native-gesture-handler';

import { colors } from '~/styles';

export const Container = styled(SafeAreaView).attrs({
  forceInset: { bottom: 'never' },
})`
  background-color: ${colors.accent};
  flex: 1;
  justify-content: center;
`;

export const Form = styled.View`
  margin: 0 5%;
  align-items: center;
`;

export const Logo = styled.Image.attrs({
  resizeMode: 'contain',
})`
  align-self: center;
  height: 100px;
  width: 200px;
  margin-bottom: 20%;
`;

export const SendButton = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  width: 100%;
  border: 2px solid ${colors.grey};
  border-radius: 10px;
  margin: 25px 0;
`;

export const Wave = styled(RectButton)`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 15px;
`;

export const Text = styled.Text`
  color: ${colors.light};
  font-size: ${props => props.size || 16};
`;
