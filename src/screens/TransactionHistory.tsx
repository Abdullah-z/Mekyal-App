import {TextInput, View} from 'react-native';
import React from 'react';
import {Block, Button, Input, Text} from '../components';
import {useData, useTheme, useTranslation} from '../hooks/';
import {ScrollView} from 'react-native-gesture-handler';

const TransactionHistory = () => {
  const {t} = useTranslation();
  const {assets, colors, fonts, gradients, sizes} = useTheme();
  return (
    <>
      <ScrollView>
        <Block color={'#f8f9fa'} align={'center'} flex={4}>
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

          <Block card align="center" marginHorizontal={sizes.sm} width={'95%'}>
            <Text h5 marginTop={sizes.sm} color={colors.primary}>
              Withdraw Request
            </Text>
            <Block width={'100%'}>
              <Input
                marginVertical={sizes.sm}
                autoCapitalize="none"
                keyboardType="number-pad"
                placeholder="Amount"
              />
              <Input
                marginBottom={sizes.sm}
                autoCapitalize="none"
                keyboardType="default"
                placeholder="Message"
              />

              <Button
                width={'50%'}
                primary
                solid
                marginVertical={sizes.s}
                marginHorizontal={'25%'}>
                <Text bold primary transform="uppercase" color={'#fff'}>
                  Submit
                </Text>
              </Button>
            </Block>
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
