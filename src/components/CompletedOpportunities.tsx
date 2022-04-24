import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import Block from './Block';
import Image from './Image';
import Text from './Text';
import {useTheme} from '../hooks';
import {
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import Button from './Button';
import {useNavigation} from '@react-navigation/native';

const CompletedOpportunities = () => {
  const {assets, colors, gradients, sizes} = useTheme();
  const navigation = useNavigation();
  return (
    <ScrollView style={{width: '100%'}}>
      <Block marginTop={sizes.m} paddingHorizontal={sizes.padding}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('Details')}>
          <Block card marginTop={sizes.sm}>
            <View style={{alignItems: 'center'}}>
              <Image
                source={{
                  uri: 'https://dcassetcdn.com/design_img/2646814/76227/76227_14317767_2646814_273806c8_image.png',
                }}
                width={'100%'}
                height={200}
                marginVertical={sizes.sm}
              />
            </View>
            <Text
              h4
              bold
              center
              transform="uppercase"
              color={colors.primary}
              marginTop={sizes.sm}>
              Fitness Star
            </Text>

            <Block row marginVertical={sizes.sm}>
              <Block align="center">
                <Text h5>4,999,948</Text>
                <Text>Raised Amount (SAR)</Text>
              </Block>
            </Block>

            <Block
              row
              paddingVertical={sizes.sm}
              marginVertical={sizes.sm}
              style={{
                borderBottomWidth: 1,
                borderTopWidth: 1,
                borderColor: '#D3D3D3',
              }}>
              <Block align="center">
                <Text h5>23,200,000</Text>
                <Text>Valuation</Text>
              </Block>
              <Block align="center">
                <Text h5>4,999,948</Text>
                <Text>Max Target</Text>
              </Block>
              <Block align="center">
                <Text h5>116</Text>
                <Text>Share Price</Text>
              </Block>
            </Block>

            <Block style={{borderBottomWidth: 1, borderColor: '#D3D3D3'}}>
              <Text h5 color={colors.primary} center>
                Subscriptions
              </Text>

              <Block row marginVertical={sizes.sm}>
                <Block align="center">
                  <Text h5>17,241</Text>
                  <Text>Average</Text>
                </Block>
                <Block align="center">
                  <Text h5>499,960</Text>
                  <Text>Highest</Text>
                </Block>
                <Block align="center">
                  <Text h5>1,044</Text>
                  <Text>Lowest</Text>
                </Block>
              </Block>
            </Block>
            <Block row marginVertical={sizes.sm}>
              <Block align="center">
                <Text h5>01-Jun-2021</Text>
                <Text>From</Text>
              </Block>
              <Block align="center">
                <Text h5>31-Jul-2021</Text>
                <Text>To</Text>
              </Block>
            </Block>
          </Block>
        </TouchableWithoutFeedback>
        <Block card marginTop={sizes.sm}>
          <View style={{alignItems: 'center'}}>
            <Image
              source={{
                uri: 'https://i.pinimg.com/originals/86/68/73/8668736548784a8c4a62743978112de5.jpg',
              }}
              width={'100%'}
              height={200}
              marginVertical={sizes.sm}
            />
          </View>
          <Text
            h5
            bold
            transform="uppercase"
            color={colors.primary}
            marginTop={sizes.sm}>
            Gas Company
          </Text>

          <Block row marginVertical={sizes.sm}>
            <Block align="center">
              <Text h5>4,999,948</Text>
              <Text>Raised Amount (SAR)</Text>
            </Block>
          </Block>

          <Block row marginVertical={sizes.sm}>
            <Block align="center">
              <Text h5>23,200,000</Text>
              <Text>Valuation</Text>
            </Block>
            <Block align="center">
              <Text h5>4,999,948</Text>
              <Text>Max Target</Text>
            </Block>
            <Block align="center">
              <Text h5>116</Text>
              <Text>Share Price</Text>
            </Block>
          </Block>

          <Block row marginVertical={sizes.sm}>
            <Block align="center">
              <Text h5>01-Jun-2021</Text>
              <Text>From</Text>
            </Block>
            <Block align="center">
              <Text h5>31-Jul-2021</Text>
              <Text>To</Text>
            </Block>
          </Block>
        </Block>
      </Block>
    </ScrollView>
  );
};

export default CompletedOpportunities;
