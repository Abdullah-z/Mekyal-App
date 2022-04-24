import React, {useCallback, useState} from 'react';

import {useData, useTheme, useTranslation} from '../hooks/';
import {Block, Button, Image, Input, Product, Text} from '../components/';
import ActiveOpportunities from '../components/ActiveOpportunities';
import CompletedOpportunities from '../components/CompletedOpportunities';
import VideoPlayer from './VideoPlayer';
import {ScrollView} from 'react-native-gesture-handler';
import TabDetail from '../components/TabDetail';
import TabAboutCompany from '../components/TabAboutCompany';
import TabInvestNow from '../components/TabInvestNow';

const OpportunityDetails = () => {
  const {t} = useTranslation();
  const [tab, setTab] = useState<number>(0);
  const {detailsTab, setDetailsTab} = useData();
  const [products, setProducts] = useState(detailsTab);
  const {assets, colors, fonts, gradients, sizes} = useTheme();
  const {locale, setLocale} = useTranslation();
  const handleProducts = useCallback(
    (tab: number) => {
      setTab(tab);
    },
    [detailsTab, setDetailsTab, setTab, setProducts],
  );

  return (
    <>
      <ScrollView>
        <Block color={'#f8f9fa'} paddingTop={sizes.sm}>
          <Block>
            <VideoPlayer  />
          </Block>
          <Block
            row
            flex={0}
            align="center"
            justify="center"
            color={'#f8f9fa'}
            paddingBottom={sizes.sm}>
            <Button onPress={() => handleProducts(0)}>
              <Block row align="center">
                <Text
                  p
                  color={'#00a69c'}
                  style={
                    tab === 0
                      ? {textDecorationLine: 'underline'}
                      : {textDecorationLine: 'none'}
                  }
                  font={fonts?.[tab === 0 ? 'medium' : 'normal']}>
                  {t('common.details')}
                </Text>
              </Block>
            </Button>

            <Block
              gray
              flex={0}
              width={1}
              marginHorizontal={sizes.sm}
              height={sizes.socialIconSize}
            />
            <Button onPress={() => handleProducts(1)}>
              <Block row align="center">
                <Text
                  p
                  color={'#00a69c'}
                  style={
                    tab === 1
                      ? {textDecorationLine: 'underline'}
                      : {textDecorationLine: 'none'}
                  }
                  font={fonts?.[tab === 1 ? 'medium' : 'normal']}>
                 {t('common.aboutcompany')}
                </Text>
              </Block>
            </Button>

            <Block
              gray
              flex={0}
              width={1}
              marginHorizontal={sizes.sm}
              height={sizes.socialIconSize}
            />
            <Button onPress={() => handleProducts(2)}>
              <Block row align="center">
                <Text
                  p
                  color={'#00a69c'}
                  style={
                    tab === 2
                      ? {textDecorationLine: 'underline'}
                      : {textDecorationLine: 'none'}
                  }
                  font={fonts?.[tab === 2 ? 'medium' : 'normal']}>
                  {t('common.investnow')}
                </Text>
              </Block>
            </Button>
          </Block>

          {tab === 1 ? (
            <TabAboutCompany />
          ) : tab === 2 ? (
            <TabInvestNow />
          ) : (
            <TabDetail />
          )}
          {/* products list */}
        </Block>
      </ScrollView>
    </>
  );
};

export default OpportunityDetails;
