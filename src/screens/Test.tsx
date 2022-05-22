import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

export default () => {
  const [text, setText] = useState('');
  console.log(text);
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
