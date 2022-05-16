import React from 'react';
import Block from './Block';
import {useTheme} from '../hooks/';
import Text from './Text';
import * as Progress from 'react-native-progress';
import {t} from 'i18n-js';

const TabDetail = () => {
  const {colors, sizes} = useTheme();
  return (
    <Block card marginVertical={sizes.sm} width={'95%'}>
      <Block marginTop={sizes.sm} row align="center">
        <Block align="center">
          <Text h5>4.9M</Text>
          <Text>{t('common.raisedamount')}</Text>
        </Block>
        <Block align="center">
          <Text h5>0</Text>
          <Text>{t('common.raisedamount')}</Text>
        </Block>
      </Block>
      <Block align="center" marginVertical={sizes.sm}>
        <Progress.Bar
          progress={0.9}
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
          <Text>{t('common.valuation')}</Text>
        </Block>
        <Block align="center">
          <Text h5>4.9M</Text>
          <Text>{t('common.maxtarget')}</Text>
        </Block>
        <Block align="center">
          <Text h5>116</Text>
          <Text>{t('common.shareprice')}</Text>
        </Block>
      </Block>

      <Block style={{borderBottomWidth: 1, borderColor: '#D3D3D3'}}>
        <Text h5 color={colors.primary} center>
          {t('common.subscriptions')}
        </Text>

        <Block row marginVertical={sizes.sm}>
          <Block align="center">
            <Text h5>17.2k</Text>
            <Text>{t('common.average')}</Text>
          </Block>
          <Block align="center">
            <Text h5>499k</Text>
            <Text>{t('common.highest')}</Text>
          </Block>
          <Block align="center">
            <Text h5>1.04k</Text>
            <Text>{t('common.lowest')}</Text>
          </Block>
        </Block>
      </Block>
      <Block
        marginTop={sizes.sm}
        style={{borderBottomWidth: 1, borderColor: '#D3D3D3'}}>
        <Text h5 color={colors.primary} center>
          {t('common.sharesallowed')}
        </Text>

        <Block row marginVertical={sizes.sm}>
          <Block align="center">
            <Text h5>9</Text>
            <Text>{t('common.minimum')}</Text>
          </Block>
          <Block align="center">
            <Text h5>172</Text>
            <Text>{t('common.maximum')}</Text>
          </Block>
        </Block>
      </Block>

      <Block style={{borderBottomWidth: 1, borderColor: '#D3D3D3'}}>
        <Block row marginVertical={sizes.sm}>
          <Block align="center">
            <Text h5>14</Text>
            <Text>{t('common.currentinvestors')}</Text>
          </Block>
        </Block>
      </Block>

      <Block row marginVertical={sizes.sm}>
        <Block align="center">
          <Text h5>01-Jun-2021</Text>
          <Text>{t('common.from')}</Text>
        </Block>
        <Block align="center">
          <Text h5>31-Jul-2021</Text>
          <Text>{t('common.to')}</Text>
        </Block>
      </Block>
      <Block row marginVertical={sizes.sm}>
        <Block align="center">
          <Text h5 color={'red'}>
            {t('common.closed')}
          </Text>
        </Block>
      </Block>
    </Block>
  );
};

export default TabDetail;
