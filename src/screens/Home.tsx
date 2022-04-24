import React, {useCallback, useState} from 'react';

import {useData, useTheme, useTranslation} from '../hooks/';
import {Block, Button, Image, Input, Product, Text} from '../components/';
import ActiveOpportunities from '../components/ActiveOpportunities';
import CompletedOpportunities from '../components/CompletedOpportunities';

const Home = () => {
  const {t} = useTranslation();
  const [tab, setTab] = useState<number>(0);
  const {active, completed} = useData();
  const [products, setProducts] = useState(active);
  const {assets, colors, fonts, gradients, sizes} = useTheme();
  const {locale, setLocale} = useTranslation();

  const handleLanguageButton = () => {
    locale === 'en' ? setLocale('ar') : setLocale('en');
  };

  const handleProducts = useCallback(
    (tab: number) => {
      setTab(tab);
    },
    [active, completed, setTab, setProducts],
  );

  return (
    <>
      <Block color={'#f8f9fa'} align={'center'} paddingTop={sizes.sm}>
        <Text h4 color={'#00a69c'}>
          {t('home.opportunities')}
        </Text>
        <Block
          row
          flex={0}
          align="center"
          justify="center"
          color={'#f8f9fa'}
          paddingBottom={sizes.sm}
          marginHorizontal={5}>
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
                {t('home.active')}
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
                {t('home.completed')}
              </Text>
            </Block>
          </Button>
        </Block>
        {tab === 0 ? <ActiveOpportunities /> : <CompletedOpportunities />}
        {/* products list */}
      </Block>
    </>
  );
};

export default Home;
