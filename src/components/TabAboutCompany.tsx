import React from 'react';
import Block from './Block';
import {useTheme, useTranslation} from '../hooks/';
import Text from './Text';
import PDFview from './PDFview';
import {View, Linking} from 'react-native';

const TabAboutCompany = () => {
  const {t} = useTranslation();
  const {assets, colors, fonts, gradients, sizes} = useTheme();
  return (
    <Block
      card
      marginHorizontal={sizes.sm}
      width={'95%'}
      marginVertical={sizes.sm}>
      <Text semibold h5 marginTop={sizes.sm}>
        {t('common.aboutcompany')}
      </Text>
      <Text
        color={colors.primary}
        onPress={() => {
          Linking.openURL(
            'https://drive.google.com/file/d/1nw8AQ8PsdL7MyF7e4Qir4bcvrm4DgCtZ/view',
          );
        }}>
        {t('common.viewdocument')}
      </Text>

      <Text semibold h5 marginTop={sizes.sm}>
        {t('common.team')}
      </Text>
      <Text color={colors.primary}>{t('common.viewdocument')}</Text>
      <Text semibold h5 marginTop={sizes.sm}>
        {t('common.financialratios')}
      </Text>
      <Text color={colors.primary}>{t('common.viewdocument')}</Text>
      <Text semibold h5 marginTop={sizes.sm}>
        {t('common.risks')}
      </Text>
      <Text color={colors.primary}>{t('common.viewdocument')}</Text>
      <Text semibold h5 marginTop={sizes.sm}>
        {t('common.otherdocuments')}
      </Text>
      <Text color={colors.primary}>{t('common.viewdocument')}</Text>
      <Text semibold h5 marginTop={sizes.sm}>
        {t('common.prospectus')}
      </Text>
      <Text color={colors.primary}>{t('common.viewdocument')}</Text>
    </Block>
  );
};

export default TabAboutCompany;
