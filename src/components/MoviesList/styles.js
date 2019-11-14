import styled from 'styled-components/native';

import { colors } from '~/styles';

export const Container = styled.View`
  width: 100%;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: ${colors.light};
  font-weight: bold;
  margin-left: 15px;
`;

export const ScrollView = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  keyboardShouldPersistTaps: 'always',
  contentContainerStyle: {
    padding: 10,
  },
})``;

export const Cover = styled.Image.attrs({
  resizeMode: 'contain',
})`
  height: 175px;
  width: 125px;
`;
