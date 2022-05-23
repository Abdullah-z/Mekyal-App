import {View} from 'react-native';
import React, {useState} from 'react';
import {Block, Text, Input, Button} from '../components';
import {useTheme, useTranslation} from '../hooks/';
import {ScrollView} from 'react-native-gesture-handler';
import * as Progress from 'react-native-progress';
import {
  Center,
  CheckIcon,
  FormControl,
  NativeBaseProvider,
  Radio,
  Select,
  Stack,
  WarningOutlineIcon,
} from 'native-base';
import {useNavigation} from '@react-navigation/core';

const KYCForm = () => {
  const {t} = useTranslation();
  const [KYCStep, setKYCStep] = useState(1);
  const {colors, sizes} = useTheme();
  const [text, setText] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setgender] = useState('male');
  const progressbar = KYCStep / 6;
  console.log(progressbar);
  console.log(gender);
  console.log(text);
  console.log(password);
  const [otherNationality, setOtherNationality] = useState('false');
  return (
    <>
      <View style={{alignItems: 'center', backgroundColor: '#fff'}}>
        <Progress.Bar
          progress={progressbar}
          width={395}
          height={5}
          color={colors.primary}
        />
      </View>
      <ScrollView>
        {KYCStep === 1 ? (
          <View style={{margin: sizes.sm}}>
            <View style={{justifyContent: 'center'}}>
              <Text h4 color={'grey'} align="center">
                {t('common.beginidverification')}
              </Text>
              <Text h5 color={'grey'} align="center">
                {t('common.verifyyouridentity')}
              </Text>
            </View>
            <Block card marginTop={sizes.sm}>
              <View style={{borderBottomWidth: 1, borderBottomColor: 'grey'}}>
                <Text
                  h4
                  color={colors.primary}
                  align="center"
                  marginBottom={sizes.sm}>
                  {t('common.personalinfo')}
                </Text>
                <Text>{t('common.personalinforeq')}</Text>
              </View>
              <View>
                <Text color={'grey'} marginTop={sizes.sm}>
                  {t('common.typecarefully')}
                </Text>
                <View style={{marginTop: sizes.sm}}>
                  <Input
                    defaultValue={text}
                    autoCapitalize="none"
                    marginBottom={sizes.sm}
                    label={t('common.id')}
                    placeholder={t('common.id')}
                    onChangeText={(newText) => setText(newText)}
                  />
                  <Text size={12} color={colors.primary}>
                    {t('common.idmustbe')}
                  </Text>
                  <Text
                    size={12}
                    color={colors.primary}
                    marginBottom={sizes.sm}>
                    {t('common.saudinationals')}
                  </Text>
                  <Input
                    defaultValue={password}
                    autoCapitalize="none"
                    marginBottom={sizes.sm}
                    label={t('common.idexpirydate')}
                    placeholder=""
                    onChangeText={(newText) => setPassword(newText)}
                  />
                  <Input
                    // secureTextEntry
                    autoCapitalize="none"
                    marginBottom={sizes.sm}
                    label={t('common.dobg')}
                    placeholder=""
                    // onChangeText={(value) => handleChange({password: value})}
                  />
                  <Input
                    // secureTextEntry
                    autoCapitalize="none"
                    marginBottom={sizes.sm}
                    label={t('common.name')}
                    placeholder=""
                    // onChangeText={(value) => handleChange({password: value})}
                  />

                  <Text bold>{t('common.gender')}</Text>
                  <NativeBaseProvider>
                    <Radio.Group
                      value={gender}
                      onChange={(value) => setgender(value)}
                      defaultValue="male"
                      name="myRadioGroup"
                      color={colors.primary}
                      accessibilityLabel="Pick Gender">
                      <View
                        style={{
                          flexDirection: 'row',
                          marginVertical: sizes.sm,
                        }}>
                        <Radio value="male">
                          <Text marginRight={sizes.sm}>{t('common.male')}</Text>
                        </Radio>
                        <Radio value="female">
                          <Text marginRight={sizes.sm}>
                            {t('common.female')}
                          </Text>
                        </Radio>
                      </View>
                    </Radio.Group>
                  </NativeBaseProvider>
                  {/* <Text bold>Country of Birth</Text> */}
                  <NativeBaseProvider>
                    <FormControl w="3/4" maxW="340" isRequired>
                      <FormControl.Label>{t('common.cob')}</FormControl.Label>
                      <Select
                        minWidth="340"
                        accessibilityLabel="Country of Birth"
                        placeholder="Country of Birth"
                        _selectedItem={{
                          bg: 'teal.600',
                          endIcon: <CheckIcon size={5} />,
                        }}
                        mt="1">
                        <Select.Item label="Pakistan" value="ux" />
                        <Select.Item label="Saudi Arabia" value="web" />
                        <Select.Item label="UAE" value="cross" />
                        <Select.Item label="Turkey" value="ui" />
                        <Select.Item label="Qatar" value="backend" />
                      </Select>
                      <FormControl.ErrorMessage
                        leftIcon={<WarningOutlineIcon size="xs" />}>
                        Please make a selection!
                      </FormControl.ErrorMessage>
                    </FormControl>
                  </NativeBaseProvider>

                  <Button
                    onPress={() => {
                      setKYCStep(KYCStep + 1);
                    }}
                    width={'50%'}
                    primary
                    solid
                    marginVertical={sizes.sm}
                    marginHorizontal={'25%'}>
                    <Text bold primary transform="uppercase" color={'#fff'}>
                      {t('common.next')}
                    </Text>
                  </Button>
                </View>
              </View>
            </Block>
          </View>
        ) : KYCStep === 2 ? (
          <View style={{margin: sizes.sm}}>
            <Block card>
              <View style={{borderBottomWidth: 1, borderBottomColor: 'gre  y'}}>
                <Text
                  h4
                  color={colors.primary}
                  align="center"
                  marginBottom={sizes.sm}>
                  {t('common.nationaladdress')}
                </Text>
              </View>
              <View>
                <View style={{marginTop: sizes.sm}}>
                  <NativeBaseProvider>
                    <FormControl w="3/4" maxW="340" isRequired>
                      <FormControl.Label>
                        {t('common.country')}
                      </FormControl.Label>
                      <Select
                        minWidth="340"
                        accessibilityLabel="Country"
                        placeholder="Country"
                        _selectedItem={{
                          bg: 'teal.600',
                          endIcon: <CheckIcon size={5} />,
                        }}
                        mt="1">
                        <Select.Item label="Pakistan" value="ux" />
                        <Select.Item label="Saudi Arabia" value="web" />
                        <Select.Item label="UAE" value="cross" />
                        <Select.Item label="Turkey" value="ui" />
                        <Select.Item label="Qatar" value="backend" />
                      </Select>
                      <FormControl.ErrorMessage
                        leftIcon={<WarningOutlineIcon size="xs" />}>
                        Please make a selection!
                      </FormControl.ErrorMessage>
                    </FormControl>

                    <FormControl w="3/4" maxW="340" isRequired>
                      <FormControl.Label>{t('common.city')}</FormControl.Label>
                      <Select
                        minWidth="340"
                        accessibilityLabel="City"
                        placeholder="City"
                        _selectedItem={{
                          bg: 'teal.600',
                          endIcon: <CheckIcon size={5} />,
                        }}
                        mt="1">
                        <Select.Item label="Pakistan" value="ux" />
                        <Select.Item label="Saudi Arabia" value="web" />
                        <Select.Item label="UAE" value="cross" />
                        <Select.Item label="Turkey" value="ui" />
                        <Select.Item label="Qatar" value="backend" />
                      </Select>
                      <FormControl.ErrorMessage
                        leftIcon={<WarningOutlineIcon size="xs" />}>
                        Please make a selection!
                      </FormControl.ErrorMessage>
                    </FormControl>
                  </NativeBaseProvider>

                  <Input
                    marginTop={sizes.sm}
                    secureTextEntry
                    autoCapitalize="none"
                    marginBottom={sizes.sm}
                    label={t('common.unitnum')}
                    placeholder=""
                    // onChangeText={(value) => handleChange({password: value})}
                  />
                  <Input
                    secureTextEntry
                    autoCapitalize="none"
                    marginBottom={sizes.sm}
                    label={t('common.zipcode')}
                    placeholder=""
                    // onChangeText={(value) => handleChange({password: value})}
                  />
                  <Input
                    secureTextEntry
                    autoCapitalize="none"
                    marginBottom={sizes.sm}
                    label={t('common.streetname')}
                    placeholder=""
                    // onChangeText={(value) => handleChange({password: value})}
                  />
                  <Input
                    secureTextEntry
                    autoCapitalize="none"
                    marginBottom={sizes.sm}
                    label={t('common.additionalnum')}
                    placeholder=""
                    // onChangeText={(value) => handleChange({password: value})}
                  />

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      marginVertical: sizes.sm,
                    }}>
                    <Button
                      onPress={() => setKYCStep(KYCStep - 1)}
                      width={'40%'}
                      primary
                      solid
                      marginHorizontal={sizes.sm}>
                      <Text bold primary transform="uppercase" color={'#fff'}>
                        {t('common.back')}
                      </Text>
                    </Button>
                    <Button
                      onPress={() => {
                        setKYCStep(KYCStep + 1);
                      }}
                      width={'40%'}
                      primary
                      solid
                      marginHorizontal={sizes.sm}>
                      <Text bold primary transform="uppercase" color={'#fff'}>
                        {t('common.next')}
                      </Text>
                    </Button>
                  </View>
                </View>
              </View>
            </Block>
          </View>
        ) : KYCStep === 3 ? (
          <View style={{margin: sizes.sm}}>
            <Block card>
              <View style={{borderBottomWidth: 1, borderBottomColor: 'grey'}}>
                <Text
                  h4
                  color={colors.primary}
                  align="center"
                  marginBottom={sizes.sm}>
                  Education & Profession
                </Text>
              </View>
              <View>
                <View style={{marginTop: sizes.sm}}>
                  <NativeBaseProvider>
                    <Text bold>Education</Text>
                    <Radio.Group
                      defaultValue="1"
                      name="myRadioGroup"
                      color={colors.primary}
                      accessibilityLabel="Pick your favorite number">
                      <Radio value="1" my={1}>
                        Post Graduate
                      </Radio>
                      <Radio value="2" my={1}>
                        University
                      </Radio>
                      <Radio value="3" my={1}>
                        High School
                      </Radio>
                      <Radio value="4" my={1}>
                        Other
                      </Radio>
                    </Radio.Group>

                    <Text bold marginTop={sizes.sm}>
                      Profession
                    </Text>
                    <Radio.Group
                      defaultValue="1"
                      name="myRadioGroup"
                      color={colors.primary}
                      accessibilityLabel="Pick your favorite number">
                      <Radio value="1" my={1}>
                        Bussiness Man
                      </Radio>
                      <Radio value="2" my={1}>
                        Employee
                      </Radio>
                      <Radio value="3" my={1}>
                        Retired
                      </Radio>
                      <Radio value="4" my={1}>
                        Unemployed
                      </Radio>
                    </Radio.Group>
                    <Text bold marginTop={sizes.sm}>
                      Are you director or an officer in public listed company?
                    </Text>
                    <Radio.Group
                      defaultValue="1"
                      name="myRadioGroup"
                      color={colors.primary}
                      accessibilityLabel="Pick your favorite number">
                      <View
                        style={{
                          flexDirection: 'row',
                          marginVertical: sizes.sm,
                        }}>
                        <Radio value="1">
                          <Text marginRight={sizes.sm}>Yes</Text>
                        </Radio>
                        <Radio value="2">
                          <Text marginRight={sizes.sm}>No</Text>
                        </Radio>
                      </View>
                    </Radio.Group>
                    <Text bold h5 marginTop={sizes.sm} color={colors.primary}>
                      Self-Certification and Declaration (FATCA & CRS)
                    </Text>
                    <Text bold marginTop={sizes.sm}>
                      Do You have another nationality?
                    </Text>
                    <Radio.Group
                      defaultValue="false"
                      name="myRadioGroup"
                      accessibilityLabel="favorite number"
                      value={otherNationality}
                      onChange={(nextValue) => {
                        setOtherNationality(nextValue);
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          marginVertical: sizes.sm,
                        }}>
                        <Radio value="true">
                          <Text marginRight={sizes.sm}>Yes</Text>
                        </Radio>
                        <Radio value="false">
                          <Text marginRight={sizes.sm}>No</Text>
                        </Radio>
                      </View>
                    </Radio.Group>

                    {otherNationality === 'true' ? (
                      <FormControl w="3/4" maxW="340" isRequired>
                        <FormControl.Label>Country</FormControl.Label>
                        <Select
                          minWidth="340"
                          accessibilityLabel="Country"
                          placeholder="Country"
                          _selectedItem={{
                            bg: 'teal.600',
                            endIcon: <CheckIcon size={5} />,
                          }}
                          mt="1">
                          <Select.Item label="Pakistan" value="ux" />
                          <Select.Item label="Saudi Arabia" value="web" />
                          <Select.Item label="UAE" value="cross" />
                          <Select.Item label="Turkey" value="ui" />
                          <Select.Item label="Qatar" value="backend" />
                        </Select>
                        <FormControl.ErrorMessage
                          leftIcon={<WarningOutlineIcon size="xs" />}>
                          Please make a selection!
                        </FormControl.ErrorMessage>
                      </FormControl>
                    ) : (
                      <></>
                    )}
                  </NativeBaseProvider>

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      marginVertical: sizes.sm,
                    }}>
                    <Button
                      onPress={() => setKYCStep(KYCStep - 1)}
                      width={'40%'}
                      primary
                      solid
                      marginHorizontal={sizes.sm}>
                      <Text bold primary transform="uppercase" color={'#fff'}>
                        {t('common.back')}
                      </Text>
                    </Button>
                    <Button
                      onPress={() => {
                        setKYCStep(KYCStep + 1);
                      }}
                      width={'40%'}
                      primary
                      solid
                      marginHorizontal={sizes.sm}>
                      <Text bold primary transform="uppercase" color={'#fff'}>
                        {t('common.next')}
                      </Text>
                    </Button>
                  </View>
                </View>
              </View>
            </Block>
          </View>
        ) : (
          <>
            <Button
              onPress={() => setKYCStep(KYCStep - 1)}
              width={'40%'}
              primary
              solid
              marginHorizontal={sizes.sm}>
              <Text bold primary transform="uppercase" color={'#fff'}>
                {t('common.back')}
              </Text>
            </Button>
          </>
        )}
      </ScrollView>
    </>
  );
};

export default KYCForm;
