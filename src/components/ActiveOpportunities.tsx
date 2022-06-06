import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Block from './Block';
import Image from './Image';
import Text from './Text';
import {useTheme, useTranslation} from '../hooks/';
import fitnessLogo from '../../assets/fitnessLogo.png';
import {Badge, Box, Center, NativeBaseProvider, Progress} from 'native-base';
import Button from './Button';
import {useNavigation} from '@react-navigation/native';
import VideoPlayer from '../screens/VideoPlayer';

const ActiveOpportunities = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const {assets, colors, gradients, sizes} = useTheme();
  return (
    <ScrollView style={{width: '100%'}}>
      <Block paddingHorizontal={sizes.sm}>
        <Block card marginBottom={sizes.sm}>
          <Block>
            <Image
              background
              resizeMode="cover"
              source={require('../../assets/header.png')}
              radius={sizes.cardRadius}>
              <Block color="rgba(0,0,0,0.3)" padding={sizes.padding}>
                {/* <Text h4 white marginBottom={sizes.sm}>
                  V Fitness
                </Text> */}
                <Text p white>
                  V Fitness, established in 2018, is engaged in providing health
                  and fitness services with an aim to promote healthier
                  lifestyle and improve quality of life in-line with the Vision
                  2030.
                </Text>
                {/* user details */}
                <Block row marginTop={sizes.sm}>
                  <Image
                    source={require('../../assets/logo_v.png')}
                    style={{
                      width: sizes.xl,
                      height: sizes.xl,
                      borderRadius: sizes.m,
                    }}
                  />
                  {/* <Block marginLeft={sizes.s}>
                    <Text p white semibold>
                      V Fitness
                    </Text>
                    <Text p white>
                      Health Care
                    </Text>
                  </Block> */}
                </Block>
              </Block>
            </Image>
          </Block>

          {/* <View>
              <Image
                marginRight={sizes.sm}
                source={require('../../assets/logo_v.png')}
                style={{
                  width: sizes.xl,
                  height: sizes.xl,
                  borderRadius: sizes.m,
                }}
              />
            </View> */}

          <View>
            <Text center h4 bold transform="uppercase" marginTop={sizes.sm}>
              VFitness
            </Text>

            <Text center>Health Care</Text>
          </View>

          <Block
            row
            paddingVertical={sizes.sm}
            marginBottom={sizes.sm}
            style={{
              borderBottomWidth: 1,

              borderColor: '#D3D3D3',
            }}>
            <Block align="center">
              <Text bold>116</Text>
              <Text>{t('common.shareprice')}</Text>
            </Block>
            <Block align="center">
              <Text bold>80,012,236</Text>
              <Text>{t('common.valuation')}</Text>
            </Block>

            <Block align="center">
              <Text bold>24 Months</Text>
              <Text>{t('common.duration')}</Text>
            </Block>
          </Block>

          <Block>
            <Block row marginVertical={sizes.sm}>
              <View style={{width: '80%', flexDirection: 'row'}}>
                <Text> {t('common.raisedamount')}:</Text>
                <Text bold> 12,000,000 SAR</Text>
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
                <Text> {t('common.targetamount')}:</Text>
                <Text bold> 23,200,000 SAR</Text>
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
          <Block align="center" marginTop={sizes.sm}>
            <Button
              width={'95%'}
              primary
              marginHorizontal={sizes.sm}
              onPress={() => {
                navigation.navigate('Details');
              }}>
              <Text bold primary transform="uppercase" color={'#fff'}>
              {t('common.moredetails')}
              </Text>
            </Button>
          </Block>
        </Block>
        <Block card marginBottom={sizes.sm}>
          <Block>
            <Image
              background
              resizeMode="cover"
              source={{
                uri: 'https://plsadaptive.s3.amazonaws.com/eco/images/channel_content/images/biggest_oil_and_gas_companies.jpg',
              }}
              radius={sizes.cardRadius}>
              <Block color="rgba(0,0,0,0.3)" padding={sizes.padding}>
                {/* <Text h4 white marginBottom={sizes.sm}>
                  V Fitness
                </Text> */}
                <Text p white>
                  OTS is an integrated international energy company with
                  businesses covering oil and gas operations, oilfield services,
                  petroleum engineering & construction, equipment manufacturing,
                  financial services, and new energy development.
                </Text>
                {/* user details */}
                <Block row marginTop={sizes.sm}>
                  <Image
                    source={require('../../assets/tslogo.jpg')}
                    style={{
                      width: sizes.xl,
                      height: sizes.xl,
                      borderRadius: sizes.m,
                    }}
                  />
                  {/* <Block marginLeft={sizes.s}>
                    <Text p white semibold>
                      V Fitness
                    </Text>
                    <Text p white>
                      Health Care
                    </Text>
                  </Block> */}
                </Block>
              </Block>
            </Image>
          </Block>

          {/* <View>
              <Image
                marginRight={sizes.sm}
                source={require('../../assets/logo_v.png')}
                style={{
                  width: sizes.xl,
                  height: sizes.xl,
                  borderRadius: sizes.m,
                }}
              />
            </View> */}

          <View>
            <Text center h4 bold transform="uppercase" marginTop={sizes.sm}>
              Oil Tool Solutions
            </Text>

            <Text center>Health Care</Text>
          </View>

          <Block
            row
            paddingVertical={sizes.sm}
            marginBottom={sizes.sm}
            style={{
              borderBottomWidth: 1,

              borderColor: '#D3D3D3',
            }}>
            <Block align="center">
              <Text bold>116</Text>
              <Text>{t('common.shareprice')}</Text>
            </Block>
            <Block align="center">
              <Text bold>23,200,000</Text>
              <Text>{t('common.valuation')}</Text>
            </Block>

            <Block align="center">
              <Text bold>24 Months</Text>
              <Text>{t('common.duration')}</Text>
            </Block>
          </Block>

          <Block>
            <Block row marginVertical={sizes.sm}>
              <View style={{width: '80%', flexDirection: 'row'}}>
                <Text> {t('common.raisedamount')}:</Text>
                <Text bold> 12,000,000 SAR</Text>
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
                <Text> {t('common.targetamount')}:</Text>
                <Text bold> 23,200,000 SAR</Text>
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
          <Block align="center" marginTop={sizes.sm}>
            <Button width={'95%'} primary marginHorizontal={sizes.sm}>
              <Text bold primary transform="uppercase" color={'#fff'}>
              {t('common.moredetails')}
              </Text>
            </Button>
          </Block>
        </Block>
      </Block>
    </ScrollView>
  );
};

export default ActiveOpportunities;
