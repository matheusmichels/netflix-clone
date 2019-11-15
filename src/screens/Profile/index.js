import React from 'react';
import {
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { signOut } from '~/store/modules/auth/actions';

import { TabIcon, Input } from '~/components';
import { Container, Form, Text, SaveButton, SaveText } from './styles';
import { colors } from '~/styles';

export default function Profile() {
  const dispatch = useDispatch();

  const { name, email, phone, address } = useSelector(state => state.auth.user);

  return (
    <Container>
      <KeyboardAvoidingView enabled={Platform.OS === 'ios'} behavior="padding">
        <ScrollView keyboardShouldPersistTaps="always">
          <Form>
            <Text size={22}>Account Information</Text>

            <Input placeholder="Full Name" value={name} />
            <Input
              placeholder="Email"
              value={email}
              keyboardType="email-address"
            />
            <Input
              placeholder="Phone Number"
              value={phone}
              keyboardType="number-pad"
            />
            <Input placeholder="Address" value={address} />

            <SaveButton>
              <SaveText color={colors.dark}>Save</SaveText>
            </SaveButton>

            <TouchableOpacity>
              <Text size={18} top>
                Payment Info
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text size={18}>Change Password</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text size={18}>Language</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text size={18}>Terms & Conditions</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text size={18}>Help</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => dispatch(signOut())}>
              <Text size={20}>Exit</Text>
            </TouchableOpacity>
          </Form>
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
}

Profile.navigationOptions = {
  tabBarIcon: props => <TabIcon name="account-outline" {...props} />,
};
