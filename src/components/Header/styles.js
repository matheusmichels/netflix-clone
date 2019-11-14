import styled from 'styled-components/native';
import { colors } from '~/styles';

export const Container = styled.View`
  position: absolute;
  top: 0;
  width: 100%;
  height: 75px;
  z-index: 1;
  flex-flow: row;
  align-items: center;
  justify-content: space-evenly;
  background-color: rgba(33, 31, 31, 0.7);
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
