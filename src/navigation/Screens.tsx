import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {
  Login,
  Articles,
  Components,
  Home,
  Profile,
  Register,
  Pro,
} from '../screens';
import {useScreenOptions, useTranslation} from '../hooks';
import Signin from '../screens/Signin';
import SignupAs from '../screens/SignupAs';
import SignupInvestor from '../screens/SignupInvestor';
import SignupEntrepreneur from '../screens/SignupEntrepreneur';
import VideoPlayer from '../screens/VideoPlayer';
import OpportunityDetails from '../screens/OpportunityDetails';
import PDFview from '../components/PDFview';

const Stack = createStackNavigator();

export default () => {
  const {t} = useTranslation();
  const screenOptions = useScreenOptions();

  return (
    <Stack.Navigator
      screenOptions={screenOptions.stack}
      initialRouteName={'Sign In'}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{title: t('navigation.home')}}
      />

      <Stack.Screen
        name="Components"
        component={Components}
        options={screenOptions.components}
      />

      <Stack.Screen
        name="Articles"
        component={Articles}
        options={{title: t('navigation.articles')}}
      />

      <Stack.Screen name="Pro" component={Pro} options={screenOptions.pro} />

      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Sign In"
        component={Signin}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Sign Up As"
        component={SignupAs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Sign Up As Investor"
        component={SignupInvestor}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Sign Up As Entrepreneur"
        component={SignupEntrepreneur}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Details"
        component={OpportunityDetails}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Video Player"
        component={VideoPlayer}
        options={{headerShown: true}}
      />
      {/* <Stack.Screen
        name="PDF View"
        component={PDFview}
        options={{headerShown: true}}
      /> */}
    </Stack.Navigator>
  );
};
