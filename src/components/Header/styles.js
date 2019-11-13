import styled from 'styled-components/native';
import { colors } from '~/styles';

export const Container = styled.View`
  height: 75px;
  flex-flow: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const Icon = styled.Image.attrs({
  resizeMode: 'contain',
})`
  height: 30px;
  width: 30px;
`;

export const Text = styled.Text`
  color: ${colors.light};
  font-size: 16px;
`;
