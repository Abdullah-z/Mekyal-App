import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';

const Test = () => {
  const [text, setText] = useState('123');
  console.log(text)
  return (
    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={(newText) => setText(newText)}
        defaultValue={text}
      />
      <Text style={{padding: 10, fontSize: 42}}>{text}</Text>
    </View>
  );
};

export default Test;
export const text;
