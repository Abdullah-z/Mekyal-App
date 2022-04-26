import {TextInput, View} from 'react-native';
import React from 'react';
import {Block, Button, Input, Text} from '../components';
import {useData, useTheme, useTranslation} from '../hooks/';
import {ScrollView} from 'react-native-gesture-handler';
import Popup from '../components/Popup';

const TransactionHistory = () => {
  const {t} = useTranslation();
  const {assets, colors, fonts, gradients, sizes} = useTheme();
  return (
    <>
      <ScrollView>
        <Block color={'#f8f9fa'} align={'center'} >
          <Block
            width={'95%'}
            card
            align="center"
            color={colors.primary}
            marginHorizontal={sizes.sm}
            marginVertical={sizes.sm}>
            <Text h5 color={'white'} marginTop={sizes.sm}>
              Total Balance
            </Text>
            <Block row align="center">
              <Text semibold h3 color={'white'}>
                500004
              </Text>
              <Text h5 color={'white'}>
                {' '}
                SAR
              </Text>
            </Block>

            <Text marginTop={sizes.sm} h5 color={'white'}>
              SA9430100979001208115974
            </Text>
            <Text h5 color={'white'} marginBottom={sizes.sm}>
              Arab National Bank
            </Text>
          </Block>
          <Block>
            <Popup />
          </Block>

          <Block
            card
            align="center"
            marginHorizontal={sizes.sm}
            width={'95%'}
            marginVertical={sizes.sm}>
            <Text h5 marginTop={sizes.sm} color={colors.primary}>
              Transaction History
            </Text>
            <Block width={'100%'}></Block>
          </Block>
        </Block>
      </ScrollView>
    </>
  );
};

export default TransactionHistory;
