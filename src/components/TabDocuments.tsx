import React from 'react';
import Block from './Block';
import {useTheme, useTranslation} from '../hooks';
import Text from './Text';
import {View, Linking} from 'react-native';
import {
  Box,
  Center,
  HStack,
  Icon,
  NativeBaseProvider,
  Pressable,
} from 'native-base';
import {Ionicons} from '@expo/vector-icons';

const TabAboutCompany = () => {
  const {t} = useTranslation();
  const {assets, colors, fonts, gradients, sizes} = useTheme();
  return (
    <Block
      card
      marginHorizontal={sizes.sm}
      width={'95%'}
      marginVertical={sizes.sm}>
      <NativeBaseProvider>
        <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
          <Icon
            mr={2}
            mb="1"
            as={<Ionicons name={'document'} />}
            color={'black'}
            size="lg"></Icon>
          <Text
            semibold
            h5
            marginTop={sizes.sm}
            onPress={() => {
              Linking.openURL(
                'https://drive.google.com/file/d/1nw8AQ8PsdL7MyF7e4Qir4bcvrm4DgCtZ/view',
              );
            }}>
            {t('common.aboutcompany')}
          </Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
          <Icon
            mr={2}
            mb="1"
            as={<Ionicons name={'document'} />}
            color={'black'}
            size="lg"></Icon>
          <Text semibold h5 marginTop={sizes.sm}>
            {t('common.financialratios')}
          </Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
          <Icon
            mr={2}
            mb="1"
            as={<Ionicons name={'document'} />}
            color={'black'}
            size="lg"></Icon>
          <Text semibold h5 marginTop={sizes.sm}>
            {t('common.risks')}
          </Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
          <Icon
            mr={2}
            mb="1"
            as={<Ionicons name={'document'} />}
            color={'black'}
            size="lg"></Icon>
          <Text semibold h5 marginTop={sizes.sm}>
            {t('common.otherdocuments')}
          </Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
          <Icon
            mr={2}
            mb="1"
            as={<Ionicons name={'document'} />}
            color={'black'}
            size="lg"></Icon>
          <Text semibold h5 marginTop={sizes.sm}>
            {t('common.prospectus')}
          </Text>
        </View>
      </NativeBaseProvider>
    </Block>
  );
};

export default TabAboutCompany;
