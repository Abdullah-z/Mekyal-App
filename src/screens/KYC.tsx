import {View} from 'react-native';
import React from 'react';
import {Block, Text, Input, Button} from '../components';
import {useData, useTheme, useTranslation} from '../hooks/';
import {ScrollView} from 'react-native-gesture-handler';
import {
  Center,
  CheckIcon,
  FormControl,
  NativeBaseProvider,
  Radio,
  Select,
  WarningOutlineIcon,
} from 'native-base';

import {useNavigation} from '@react-navigation/core';

const KYC = () => {
  const {colors, sizes} = useTheme();
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={{margin: (S = sizes.sm)}}>
        <View style={{justifyContent: 'center'}}>
          <Text h4 color={'grey'} align="center">
            Begin your ID-Verification
          </Text>
          <Text h5 color={'grey'} align="center">
            Verify your identity to participate in Mekyal Crowd Funding
          </Text>
        </View>
        <Block card marginTop={sizes.sm}>
          <View style={{borderBottomWidth: 1, borderBottomColor: 'grey'}}>
            <Text
              h4
              color={colors.primary}
              align="center"
              marginBottom={sizes.sm}>
              Personal Information
            </Text>
            <Text>
              Your simple perosnal information is required for identification
            </Text>
          </View>
          <View>
            <Text color={'grey'} marginTop={sizes.sm}>
              Please type carefully and fill out the form with your personal
              details. Your can’t edit these details once you submitted the
              form.
            </Text>
            <View style={{marginTop: sizes.sm}}>
              <Input
                secureTextEntry
                autoCapitalize="none"
                marginBottom={sizes.m}
                label="ID"
                placeholder="ID"
                // onChangeText={(value) => handleChange({password: value})}
              />
              <Text size={12} color={colors.primary}>
                * Identity Number must be a numeric with maximum number of 10.
              </Text>
              <Text size={12} color={colors.primary} marginBottom={sizes.sm}>
                * Saudi Nationals are allowed to Register
              </Text>
              <Input
                secureTextEntry
                autoCapitalize="none"
                marginBottom={sizes.m}
                label="ID Expiry Date(Hijri)"
                placeholder=""
                // onChangeText={(value) => handleChange({password: value})}
              />
              <Input
                secureTextEntry
                autoCapitalize="none"
                marginBottom={sizes.m}
                label="Date of Birth(G)"
                placeholder=""
                // onChangeText={(value) => handleChange({password: value})}
              />
              <Input
                secureTextEntry
                autoCapitalize="none"
                marginBottom={sizes.m}
                label="Name"
                placeholder=""
                // onChangeText={(value) => handleChange({password: value})}
              />

              <Text bold>Gender</Text>
              <NativeBaseProvider>
                <Radio.Group
                  defaultValue="1"
                  name="myRadioGroup"
                  color={colors.primary}
                  accessibilityLabel="Pick your favorite number">
                  <Radio value="1" my={1}>
                    Male
                  </Radio>
                  <Radio value="2" my={1}>
                    Female
                  </Radio>
                </Radio.Group>
              </NativeBaseProvider>
              {/* <Text bold>Country of Birth</Text> */}
              <NativeBaseProvider>
                <FormControl w="3/4" maxW="340" isRequired>
                  <FormControl.Label>Country of Birth</FormControl.Label>
                  <Select
                    minWidth="340"
                    accessibilityLabel="Country of Birth"
                    placeholder="Country of Birth"
                    _selectedItem={{
                      bg: 'teal.600',
                      endIcon: <CheckIcon size={5} />,
                    }}
                    mt="1">
                    <Select.Item label="Pakistan" value="ux" />
                    <Select.Item label="Saudi Arabia" value="web" />
                    <Select.Item label="UAE" value="cross" />
                    <Select.Item label="Turkey" value="ui" />
                    <Select.Item label="Qatar" value="backend" />
                  </Select>
                  <FormControl.ErrorMessage
                    leftIcon={<WarningOutlineIcon size="xs" />}>
                    Please make a selection!
                  </FormControl.ErrorMessage>
                </FormControl>
              </NativeBaseProvider>

              <Button
                onPress={() => navigation.navigate('KYC2')}
                width={'50%'}
                primary
                solid
                marginVertical={sizes.s}
                marginHorizontal={'25%'}>
                <Text bold primary transform="uppercase" color={'#fff'}>
                  Proceed
                </Text>
              </Button>
            </View>
          </View>
        </Block>
      </View>
    </ScrollView>
  );
};

export default KYC;
