import React from 'react';
import Block from './Block';
import {useTheme} from '../hooks/';
import Text from './Text';
import {t} from 'i18n-js';
import {ScrollView, View} from 'react-native';
import StatsCard from './StatsCard';
import VideoPlayer from '../screens/VideoPlayer';
import {Badge, Box, Center, NativeBaseProvider, Progress} from 'native-base';

const TabDetail = () => {
  const {colors, sizes} = useTheme();
  return (
    <ScrollView>
      <View style={{marginHorizontal: sizes.sm, marginVertical: sizes.sm}}>
        {/* <Block card>
          <VideoPlayer link={'X_9VoqR5ojM'} />
        </Block> */}
        <Block card marginTop={sizes.sm}>
          <Text h4 color={colors.primary}>
            VFitness
          </Text>
          <Text>
            V Fitness, established in 2018, is engaged in providing health and
            fitness services with an aim to promote healthier lifestyle and
            improve quality of life in-line with the Vision 2030. V Fitness
            currently has a network of eight gyms across three brands - Fitness
            Star, Vitality and Lava Fitness - with a total area of more than
            20,000 sqm. V Fitness works at different levels for a wider target
            group through its diverse fitness service offerings to promote human
            well-being in terms of health and fitness. Going forward, the
            Company expects to use artificial intelligence and data analytics
            tools to reach a wider target audience, with technology being the
            catalyst for the company’s growth, and becoming a real contributor
            to the national economy. V Fitness seeks to continue expanding its
            network of gyms to other major cities in the Kingdom.
          </Text>
        </Block>

        <Block card marginVertical={sizes.sm}>
          <StatsCard />
        </Block>

        <Block card>
          <Block row marginVertical={sizes.sm}>
            <Block align="center">
              <Block>
                <Block row marginVertical={sizes.sm}>
                  <View style={{width: '80%', flexDirection: 'row'}}>
                    <Text>Raised Amount:</Text>
                    <Text bold> 2,500,000 SAR</Text>
                  </View>
                  <View style={{width: '20%', alignItems: 'flex-end'}}>
                    <Text bold color="#267E00">
                      52%
                    </Text>
                  </View>
                </Block>
                <NativeBaseProvider>
                  <Center w="100%">
                    <Box w="100%" maxW="400">
                      <Progress
                        value={52}
                        mx="4"
                        bg="coolGray.100"
                        _filledTrack={{
                          bg: '#267E00',
                        }}
                      />
                    </Box>
                  </Center>
                </NativeBaseProvider>
                <Block row marginVertical={sizes.sm}>
                  <View style={{width: '70%', flexDirection: 'row'}}>
                    <Text>Target Amount:</Text>
                    <Text bold> 4,900,000 SAR</Text>
                  </View>
                  <View style={{width: '30%', alignItems: 'flex-end'}}>
                    <NativeBaseProvider>
                      <Badge colorScheme="error" alignSelf="center">
                        125 Days Left
                      </Badge>
                    </NativeBaseProvider>
                  </View>
                </Block>
              </Block>
            </Block>
          </Block>
        </Block>

        {/* <VideoPlayer videoId='F948QZMGlHQ'></VideoPlayer> */}
      </View>

      {/* <Block card marginHorizontal={sizes.sm} marginTop={sizes.sm} marginBottom={sizes.sm}>
        <Text h4 color={colors.primary} marginBottom={sizes.sm}>
          Details
        </Text>
        <View style={{flexDirection: 'row'}}>
          <View style={{width: '50%'}}>
            <Text h5 align="left">
              {t('common.valuation')}
            </Text>
          </View>
          <View style={{width: '50%'}}>
            <Text h5 bold align="right">
              80,012,236
            </Text>
          </View>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View style={{width: '50%'}}>
            <Text h5 align="left">
              {t('common.maxtarget')}
            </Text>
          </View>
          <View style={{width: '50%'}}>
            <Text h5 bold align="right">
              4,999,804
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{width: '50%'}}>
            <Text h5 align="left">
              {t('common.shareprice')}
            </Text>
          </View>
          <View style={{width: '50%'}}>
            <Text h5 bold align="right">
              244
            </Text>
          </View>
        </View>

        <Text h5 color={colors.primary} marginTop={sizes.sm}>
          {t('common.subscriptions')}
        </Text>

        <View style={{flexDirection: 'row'}}>
          <View style={{width: '50%'}}>
            <Text h5 align="left">
              {t('common.average')}
            </Text>
          </View>
          <View style={{width: '50%'}}>
            <Text h5 bold align="right">
              7,587
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{width: '50%'}}>
            <Text h5 align="left">
              {t('common.maximum')}
            </Text>
          </View>
          <View style={{width: '50%'}}>
            <Text h5 bold align="right">
              488,000
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{width: '50%'}}>
            <Text h5 align="left">
              {t('common.minimum')}
            </Text>
          </View>
          <View style={{width: '50%'}}>
            <Text h5 bold align="right">
              1,220
            </Text>
          </View>
        </View>
      </Block> */}
    </ScrollView>
  );
};

export default TabDetail;
