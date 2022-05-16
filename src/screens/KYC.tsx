import {View} from 'react-native';
import React from 'react';
import {Block, Text, Input} from '../components';
import {useData, useTheme, useTranslation} from '../hooks/';
import {ScrollView} from 'react-native-gesture-handler';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';

const KYC = () => {
  const {assets, colors, gradients, sizes} = useTheme();
  var radio_props = [
    {label: 'Male', value: 0},
    {label: 'Female', value: 1},
  ];
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
              h5
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
              <RadioForm
                buttonColor={colors.primary}
                radio_props={radio_props}
                initial={-1}
                onPress={(value) => {
                  this.setState({value: value});
                }}
              />
            </View>
          </View>
        </Block>
      </View>
    </ScrollView>
  );
};

export default KYC;
