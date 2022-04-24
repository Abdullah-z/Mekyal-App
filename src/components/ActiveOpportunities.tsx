import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useTheme} from '../hooks';
import Block from './Block';
import Image from './Image';
import Text from './Text';

const ActiveOpportunities = () => {
  const {assets, colors, gradients, sizes} = useTheme();
  return (
    <ScrollView>
      <Block paddingHorizontal={sizes.padding}>
        <Block card padding={0} marginTop={sizes.sm}>
          <Image
            background
            resizeMode="cover"
            source={{
              uri: 'https://www.seekpng.com/png/detail/265-2650467_natural-gas-company-logo.png',
            }}
            radius={sizes.cardRadius}>
            <Block color="rgba(0,0,0,0.5)" padding={sizes.padding}>
              <Text
                h4
                white
                marginBottom={sizes.sm}
                style={{textAlign: 'center'}}>
                Gas Co.
              </Text>
              <Text p white>
                Rather than worrying about switching offices every couple years,
                you can instead stay in the same location.
              </Text>
              {/* user details */}
              {/* <Block row marginLeft={sizes.xs} marginTop={sizes.xxl}>
                <Image
                  source={assets.avatar2}
                  style={{
                    width: sizes.xl,
                    height: sizes.xl,
                    borderRadius: sizes.s,
                  }}
                />
                <Block marginLeft={sizes.s}>
                  <Text p white semibold>
                    Devin Coldewey
                  </Text>
                  <Text p white>
                    Marketing Manager
                  </Text>
                </Block>
              </Block> */}
            </Block>
          </Image>
        </Block>
        <Block card padding={0} marginTop={sizes.sm}>
          <Image
            background
            resizeMode="cover"
            source={{
              uri: 'https://graphicpick.com/wp-content/uploads/edd/2014/12/fitness-star.jpg',
            }}
            radius={sizes.cardRadius}>
            <Block color="rgba(0,0,0,0.5)" padding={sizes.padding}>
              <Text
                h4
                white
                marginBottom={sizes.sm}
                style={{textAlign: 'center'}}>
                Fitness Star
              </Text>
              <Text p white>
                Rather than worrying about switching offices every couple years,
                you can instead stay in the same location.
              </Text>
              {/* user details */}
              {/* <Block row marginLeft={sizes.xs} marginTop={sizes.xxl}>
                <Image
                  source={assets.avatar2}
                  style={{
                    width: sizes.xl,
                    height: sizes.xl,
                    borderRadius: sizes.s,
                  }}
                />
                <Block marginLeft={sizes.s}>
                  <Text p white semibold>
                    Devin Coldewey
                  </Text>
                  <Text p white>
                    Marketing Manager
                  </Text>
                </Block>
              </Block> */}
            </Block>
          </Image>
        </Block>
        <Block row marginTop={sizes.sm}></Block>
      </Block>
    </ScrollView>
  );
};

export default ActiveOpportunities;
