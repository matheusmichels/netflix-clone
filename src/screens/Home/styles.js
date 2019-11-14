import styled from 'styled-components/native';
import { SafeAreaView } from 'react-navigation';

import { colors } from '~/styles';

export const Container = styled(SafeAreaView).attrs({
  forceInset: { bottom: 'never' },
})`
  background-color: ${colors.accent};
  flex: 1;
`;

export const ScrollView = styled.ScrollView.attrs({
  keyboardShouldPersistTaps: 'always',
  contentContainerStyle: {
    paddingTop: 75,
  },
})``;
