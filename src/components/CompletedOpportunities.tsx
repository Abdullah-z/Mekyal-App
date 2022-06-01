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
import {t} from 'i18n-js';

const CompletedOpportunities = () => {
  const {assets, colors, gradients, sizes} = useTheme();
  const navigation = useNavigation();
  return (
    <ScrollView style={{width: '100%'}}>
      <Block paddingHorizontal={sizes.padding}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('Details')}>
          <Block card marginBottom={sizes.sm}>
            <View style={{alignItems: 'center'}}>
              <Image
                resizeMode="stretch"
                source={{
                  uri: 'https://images.template.net/wp-content/uploads/2017/03/22122756/Abstract-Modern-Fitness-Logo1.jpg',
                }}
                width={'100%'}
                height={200}
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
                <Text>
                  {t('common.raisedamount')} ({t('common.SAR')})
                </Text>
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
                <Text>{t('common.valuation')}</Text>
              </Block>
              <Block align="center">
                <Text h5>4,999,948</Text>
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
                  <Text h5>17,241</Text>
                  <Text> {t('common.average')}</Text>
                </Block>
                <Block align="center">
                  <Text h5>499,960</Text>
                  <Text> {t('common.highest')}</Text>
                </Block>
                <Block align="center">
                  <Text h5>1,044</Text>
                  <Text> {t('common.lowest')}</Text>
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
          </Block>
        </TouchableWithoutFeedback>
        <Block card marginBottom={sizes.sm}>
          <View style={{alignItems: 'center'}}>
            <Image
              resizeMode="stretch"
              source={{
                uri: 'https://t4.ftcdn.net/jpg/01/03/93/99/360_F_103939904_504aq3PIe3pH6HGEa4W6JaoBueVve8da.jpg',
              }}
              width={'100%'}
              height={200}
            />
          </View>
          <Text
            h4
            bold
            center
            transform="uppercase"
            color={colors.primary}
            marginTop={sizes.sm}>
            Oil and Gas Company
          </Text>

          <Block row marginVertical={sizes.sm}>
            <Block align="center">
              <Text h5>4,999,948</Text>
              <Text>
                {t('common.raisedamount')} ({t('common.SAR')})
              </Text>
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
              <Text>{t('common.valuation')}</Text>
            </Block>
            <Block align="center">
              <Text h5>4,999,948</Text>
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
                <Text h5>17,241</Text>
                <Text> {t('common.average')}</Text>
              </Block>
              <Block align="center">
                <Text h5>499,960</Text>
                <Text> {t('common.highest')}</Text>
              </Block>
              <Block align="center">
                <Text h5>1,044</Text>
                <Text> {t('common.lowest')}</Text>
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
        </Block>
      </Block>
    </ScrollView>
  );
};

export default CompletedOpportunities;
