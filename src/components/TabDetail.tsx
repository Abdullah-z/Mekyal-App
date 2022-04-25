import {View} from 'react-native';
import React from 'react';
import Block from './Block';
import Image from './Image';
import {useTheme} from '../hooks/';
import Text from './Text';
import * as Progress from 'react-native-progress';

<Progress.Bar progress={0.3} width={200} />;

const TabDetail = () => {
  const {assets, colors, gradients, sizes} = useTheme();
  return (
    <Block card marginTop={sizes.sm} width={'95%'}>
      <Block marginTop={sizes.sm} row align="center">
        <Block align="center">
          <Text h5>4.9M</Text>
          <Text>Raised Amount</Text>
        </Block>
        <Block align="center">
          <Text h5>0</Text>
          <Text>Remaing Amount</Text>
        </Block>
      </Block>
      <Block align="center" marginVertical={sizes.sm}>
        <Progress.Bar
          progress={0.85}
          width={250}
          height={10}
          color={colors.primary}
        />
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
          <Text h5>23.2M</Text>
          <Text>Valuation</Text>
        </Block>
        <Block align="center">
          <Text h5>4.9M</Text>
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
            <Text h5>17.2k</Text>
            <Text>Average</Text>
          </Block>
          <Block align="center">
            <Text h5>499k</Text>
            <Text>Highest</Text>
          </Block>
          <Block align="center">
            <Text h5>1.04k</Text>
            <Text>Lowest</Text>
          </Block>
        </Block>
      </Block>
      <Block
        marginTop={sizes.sm}
        style={{borderBottomWidth: 1, borderColor: '#D3D3D3'}}>
        <Text h5 color={colors.primary} center>
          Shares Allowed
        </Text>

        <Block row marginVertical={sizes.sm}>
          <Block align="center">
            <Text h5>9</Text>
            <Text>Minimum</Text>
          </Block>
          <Block align="center">
            <Text h5>172</Text>
            <Text>Maximum</Text>
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
      <Block row marginVertical={sizes.sm}>
        <Block align="center">
          <Text h5 color={'red'}>
            Closed
          </Text>
        </Block>
      </Block>
    </Block>
  );
};

export default TabDetail;
