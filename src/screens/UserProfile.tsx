import {View, ScrollView} from 'react-native';
import React from 'react';
import {Block, Text} from '../components';
import {useTheme, useTranslation} from '../hooks/';
import {Center} from 'native-base';
import {Ionicons} from '@expo/vector-icons';

const UserProfile = () => {
  const {assets, colors, fonts, gradients, sizes} = useTheme();
  const {t} = useTranslation();
  return (
    <ScrollView>
      <Block align={'center'} >
        <Block card color={colors.primary} margin={sizes.sm} width={'95%'}>
          <View>
            <Text semibold h4 color={'white'}>
              User Name
            </Text>
            <Text h5 color={'white'}>
              Investor
            </Text>
          </View>

          <View style={{alignItems: 'center'}}>
            <Text h5 color={'white'} marginTop={sizes.sm}>
              {t('common.totalbalance')}
            </Text>
            <Block row align="center">
              <Text semibold h3 color={'white'}>
                500004
              </Text>
              <Text h5 color={'white'}>
                {' '}
                {t('common.SAR')}
              </Text>
            </Block>

            <Text marginTop={sizes.sm} h5 color={'white'}>
              SA9430100979001208115974
            </Text>
            <Text h5 color={'white'} marginBottom={sizes.sm}>
              Arab National Bank
            </Text>
          </View>
        </Block>
        <Block card width={'95%'} marginBottom={sizes.sm}>
          <Text h5 marginVertical={sizes.sm}>
            <Ionicons size={20} name="person" color={colors.black} /> Account
          </Text>
          <Text h5 marginBottom={sizes.sm}>
            <Ionicons size={20} name="key" color={colors.black} /> Change
            Password
          </Text>
          <Text h5 marginBottom={sizes.sm}>
            <Ionicons size={20} name="headset" color={colors.black} /> Help and
            Support
          </Text>
          <View style={{alignItems: 'center', marginTop: sizes.md}}>
            <Text h5 marginBottom={sizes.sm} color={'red'}>
              <Ionicons size={20} name="power" color={'red'} /> Logout
            </Text>
          </View>
        </Block>
      </Block>
    </ScrollView>
  );
};

export default UserProfile;
