import React from 'react';
import {NativeBaseProvider, Box, HStack, Checkbox, Radio} from 'native-base';
import {Block} from '../components';

export default function Test() {
  return (
    <NativeBaseProvider>
      <Radio.Group
        defaultValue="1"
        name="myRadioGroup"
        color={colors.primary}
        accessibilityLabel="Pick your favorite number">
        <Radio value="1" my={1}>
          First
        </Radio>
        <Radio value="2" my={1}>
          Second
        </Radio>
        <Radio value="3" my={1}>
          Third
        </Radio>
      </Radio.Group>
    </NativeBaseProvider>
  );
}
