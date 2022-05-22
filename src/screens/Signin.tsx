import React, {useCallback, useEffect, useState} from 'react';
import {Linking, Platform, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import {useData, useTheme, useTranslation} from '../hooks/';
import * as regex from '../constants/regex';
import {Block, Button, Input, Image, Text} from '../components/';
import {
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import MekyalLogo from '../components/MekyalLogo';
import Footer from '../components/Footer';

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

const Signin = () => {
  const {isDark} = useData();
  const {t} = useTranslation();
  const navigation = useNavigation();
  const {locale, setLocale} = useTranslation();

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
    <>
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
                onPress={() => navigation.navigate('Test')}>
                <Text bold primary transform="uppercase">
                  Test
                </Text>
              </Button>
            </Block> */}

            <Block
              flex={0}
              card
              margin={sizes.sm}
              shadow={!isAndroid} // disabled shadow on Android due to blur overlay + elevation issue
            >
              <Block
                flex={0}
                radius={sizes.sm}
                overflow="hidden"
                justify="space-evenly"
                paddingVertical={sizes.sm}>
                <Text h3 semibold color={colors.primary}>
                  {t('common.signin')}
                </Text>
                <Text p semibold>
                  {t('common.crowdfundingaccount')}
                </Text>

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
                    label={t('common.email')}
                    keyboardType="email-address"
                    placeholder={t('common.emailPlaceholder')}
                    success={Boolean(registration.email && isValid.email)}
                    danger={Boolean(registration.email && !isValid.email)}
                    onChangeText={(value) => handleChange({email: value})}
                  />
                  <Input
                    secureTextEntry
                    autoCapitalize="none"
                    marginBottom={sizes.m}
                    label={t('common.password')}
                    placeholder={t('common.passwordPlaceholder')}
                    onChangeText={(value) => handleChange({password: value})}
                    success={Boolean(registration.password && isValid.password)}
                    danger={Boolean(registration.password && !isValid.password)}
                  />
                </Block>
                {/* checkbox terms */}
                <Block
                  row
                  flex={0}
                  align="center"
                  marginBottom={sizes.sm}
                  paddingHorizontal={sizes.sm}>
                  <Text
                    color={colors.primary}
                    semibold
                    onPress={() => {
                      Linking.openURL('https://www.creative-tim.com/terms');
                    }}>
                    {t('common.forgetpassword')}
                  </Text>
                </Block>

                <Button
                  width={'50%'}
                  primary
                  solid
                  shadow={!isAndroid}
                  marginVertical={sizes.s}
                  marginHorizontal={'25%'}
                  onPress={() => navigation.navigate('Home')}>
                  <Text bold primary transform="uppercase" color={'#fff'}>
                    {t('common.signin')}
                  </Text>
                </Button>
                <Block marginVertical={sizes.sm}>
                  <Text>
                    {t('common.donthaveaccount')}{' '}
                    <Text
                      color={colors.primary}
                      semibold
                      onPress={() => {
                        navigation.navigate('Sign Up As');
                      }}>
                      {t('common.signuphere')}
                    </Text>
                  </Text>
                </Block>
              </Block>
            </Block>
          </Block>
        </Block>

        <Footer />
      </ScrollView>
    </>
  );
};

export default Signin;
