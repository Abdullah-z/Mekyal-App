import React, {useCallback, useState} from 'react';

import {useData, useTheme, useTranslation} from '../hooks/';
import {Block, Button, Text} from '../components/';
import VideoPlayer from './VideoPlayer';
import {ScrollView} from 'react-native-gesture-handler';
import TabDetail from '../components/TabDetail';
import TabDocuments from '../components/TabDocuments';
import TabInvestNow from '../components/TabInvestNow';

const OpportunityDetails = () => {
  const {t} = useTranslation();
  const {colors, fonts, sizes} = useTheme();
  const [tab, setTab] = useState(0);
  return (
    <>
      <ScrollView>
        <Block  margin={sizes.sm}>
          <VideoPlayer link={'X_9VoqR5ojM'} />
        </Block>
        <Block color={'#f8f9fa'}>
          <Block row align="center" justify="center" color={'#f8f9fa'}>
            <Button onPress={() => setTab(0)}>
              <Block row align="center">
                <Text
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
            <Button onPress={() => setTab(1)}>
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
                  {t('common.documents')}
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
            <Button onPress={() => setTab(2)}>
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

          <Block align="center">
            {tab === 1 ? (
              <TabDocuments />
            ) : tab === 2 ? (
              <TabInvestNow />
            ) : (
              <TabDetail />
            )}
          </Block>
        </Block>
      </ScrollView>
    </>
  );
};

export default OpportunityDetails;
