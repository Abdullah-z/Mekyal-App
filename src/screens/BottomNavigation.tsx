import {View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import React from 'react';
import {
  Box,
  Center,
  HStack,
  Icon,
  NativeBaseProvider,
  Pressable,
  Text,
} from 'native-base';
import {useTheme, useTranslation} from '../hooks';
import {useNavigation} from '@react-navigation/core';

const BottomNavigation = (props) => {
  const [selected, setSelected] = React.useState(props.initial);
  console.log(selected);
  const {colors, sizes} = useTheme();
  const navigation = useNavigation();

  // selected === 1
  //   ? navigation.navigate('Home')
  //   : selected === 2
  //   ? navigation.navigate('TransactionHistory')
  //   : navigation.navigate('Profile');

  return (
    <NativeBaseProvider>
      <Box flex={1} safeAreaTop width="100%" alignSelf="center">
        <Center flex={1}></Center>
        <HStack
          bg={colors.primary}
          alignItems="center"
          safeAreaBottom
          shadow={6}>
          <Pressable
            opacity={selected === 1 ? 1 : 0.5}
            py="3"
            flex={1}
            onPress={() => {
            
              navigation.navigate('Home');
            }}>
            <Center>
              <Icon
                mb="1"
                as={
                  <Ionicons name={selected === 1 ? 'home' : 'home-outline'} />
                }
                color="white"
                size="sm"
              />
              <Text color="white" fontSize="12">
                Home
              </Text>
            </Center>
          </Pressable>
          <Pressable
            opacity={selected === 2 ? 1 : 0.5}
            py="2"
            flex={1}
            onPress={() => {
              
              navigation.navigate('Transaction History');
            }}>
            <Center>
              <Icon
                mb="1"
                as={<Ionicons name="search" />}
                color="white"
                size="sm"
              />
              <Text color="white" fontSize="12">
                Search
              </Text>
            </Center>
          </Pressable>
          <Pressable
            opacity={selected === 2 ? 1 : 0.6}
            py="2"
            flex={1}
            onPress={() => {
              setSelected(2);
              navigation.navigate('KYC');
            }}>
            <Center>
              <Icon
                mb="1"
                as={
                  <Ionicons
                    name={selected === 2 ? 'add-circle' : 'cart-outline'}
                  />
                }
                color="white"
                size="sm"
              />
              <Text color="white" fontSize="12">
                Cart
              </Text>
            </Center>
          </Pressable>
        
        </HStack>
      </Box>
    </NativeBaseProvider>
  );
};

export default BottomNavigation;
