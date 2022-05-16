import React, {useCallback, useEffect, useState} from 'react';
import {Linking, Platform, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import {useData, useTheme, useTranslation} from '../hooks/';
import * as regex from '../constants/regex';
import {Block, Button, Input, Image, Text, Checkbox} from '../components/';
import {ScrollView} from 'react-native-gesture-handler';
import MekyalLogo from '../components/MekyalLogo';

const isAndroid = Platform.OS === 'android';

interface IRegistration {
  name: string;
  email: string;
  password: string;
  agreed: boolean;
}
interface IRegistrationValidation {
  name: boolean;
  email: boolean;
  password: boolean;
  agreed: boolean;
}

const SignupInvestor2 = () => {
  const navigate = useNavigation();
  const {isDark} = useData();
  const {t} = useTranslation();
  const navigation = useNavigation();
  const {locale, setLocale} = useTranslation();

  const handleLanguageButton = () => {
    locale === 'en' ? setLocale('ar') : setLocale('en');
  };
  const [isValid, setIsValid] = useState<IRegistrationValidation>({
    name: false,
    email: false,
    password: false,
    agreed: false,
  });
  const [registration, setRegistration] = useState<IRegistration>({
    name: '',
    email: '',
    password: '',
    agreed: false,
  });
  const {assets, colors, gradients, sizes} = useTheme();

  const handleChange = useCallback(
    (value) => {
      setRegistration((state) => ({...state, ...value}));
    },
    [setRegistration],
  );

  const handleSignUp = useCallback(() => {
    if (!Object.values(isValid).includes(false)) {
      /** send/save registratin data */
      console.log('handleSignUp', registration);
    }
  }, [isValid, registration]);

  useEffect(() => {
    setIsValid((state) => ({
      ...state,
      name: regex.name.test(registration.name),
      email: regex.email.test(registration.email),
      password: regex.password.test(registration.password),
      agreed: registration.agreed,
    }));
  }, [registration, setIsValid]);

  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <Block safe marginTop={sizes.md}>
        <Block>
          <MekyalLogo />
          {/* <Block style={{alignItems: 'flex-end'}} marginHorizontal={sizes.sm}>
            <Button
              width={'25%'}
              primary
              outlined
              shadow={!isAndroid}
              marginVertical={sizes.s}
              onPress={() => handleLanguageButton()}>
              <Text bold primary transform="uppercase">
                {locale === 'en' ? 'عربي' : 'English'}
              </Text>
            </Button>
          </Block> */}
          <Block>
            <Block
              flex={0}
              radius={sizes.sm}
              marginHorizontal="8%"
              shadow={!isAndroid} // disabled shadow on Android due to blur overlay + elevation issue
            >
              <Block
                flex={0}
                radius={sizes.sm}
                overflow="hidden"
                justify="space-evenly"
                paddingVertical={sizes.sm}>
                {/* <Text h3 semibold color={colors.primary}>
                  {t('common.signupas')} {t('common.investor')}
                </Text> */}

                <Block
                  row
                  flex={0}
                  align="center"
                  justify="center"
                  marginBottom={sizes.sm}
                  paddingHorizontal={sizes.xxl}></Block>
                {/* form inputs */}
                <Block paddingHorizontal={sizes.sm}>
                  <Input
                    autoCapitalize="none"
                    marginBottom={sizes.m}
                    // label={t('common.email')}
                    keyboardType="email-address"
                    placeholder="ID"
                    success={Boolean(registration.email && isValid.email)}
                    danger={Boolean(registration.email && !isValid.email)}
                    onChangeText={(value) => handleChange({email: value})}
                  />
                  <Text
                    size={18}
                    color={colors.primary}
                    marginBottom={sizes.sm}>
                    Date of Birth (Hijri)
                  </Text>
                  <View
                    style={{
                      justifyContent: 'flex-start',
                      flexDirection: 'row',
                    }}>
                    <Input
                      autoCapitalize="none"
                      maxLength={2}
                      // label={t('common.email')}
                      keyboardType="phone-pad"
                      placeholder="Date"
                      onChangeText={(value) => handleChange({email: value})}
                      style={{width: '20%', marginRight: 5}}
                    />
                    <Input
                      autoCapitalize="none"
                      maxLength={2}
                      // label={t('common.email')}
                      keyboardType="phone-pad"
                      placeholder="Month"
                      onChangeText={(value) => handleChange({email: value})}
                      style={{width: '38%', marginRight: 5}}
                    />
                    <Input
                      autoCapitalize="none"
                      maxLength={4}
                      // label={t('common.email')}
                      keyboardType="phone-pad"
                      placeholder="Year"
                      onChangeText={(value) => handleChange({email: value})}
                      style={{width: '38%'}}
                    />
                  </View>
                </Block>

                <Block
                  align="center"
                  row
                  flex={0}
                  paddingHorizontal={sizes.sm}
                  marginVertical={sizes.sm}>
                  <Checkbox
                    marginRight={sizes.sm}
                    checked={registration?.agreed}
                    onPress={(value) => handleChange({agreed: value})}
                  />
                  <Text paddingRight={sizes.s}>
                    " I Hereby Authorize Mekyal Financial Technologies To Verify
                    My Personal Data With Elm"
                  </Text>
                </Block>

                <Button
                  width={'50%'}
                  primary
                  solid
                  shadow={!isAndroid}
                  marginVertical={sizes.s}
                  marginHorizontal={'25%'}
                  onPress={() => navigation.navigate('KYC')}>
                  <Text bold primary transform="uppercase" color={'#fff'}>
                    Proceed
                  </Text>
                </Button>
                <Block marginVertical={sizes.sm}>
                  <Text>
                    {t('common.alreadyuser')}{' '}
                    <Text
                      color={colors.primary}
                      semibold
                      onPress={() => {
                        navigation.navigate('Sign Up As');
                      }}>
                      {t('common.signinhere')}
                    </Text>
                  </Text>
                </Block>
              </Block>
            </Block>
          </Block>
        </Block>
      </Block>
    </ScrollView>
  );
};

export default SignupInvestor2;
