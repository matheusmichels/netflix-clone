import styled from 'styled-components/native';

import { colors } from '~/styles';

const Input = styled.TextInput.attrs({
  placeholderTextColor: colors.grey,
  autoCapitalize: 'none',
  autoCorrect: false,
})`
  background-color: #333;
  font-size: 18px;
  color: ${colors.light};
  width: 100%;
  padding: 15px;
  margin-bottom: 5px;
  border-radius: 10px;
`;

export default Input;
