import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import CustomInput from '../components/Global/CustomInput';
import {ScreenDimensions} from '../constants/dimensions';
import {DARKCOLORS} from '../constants/colors';
import CustomButton from '../components/Global/CustomButton';
import {FONTFAMILY} from '../constants/fonts';
import {FONTSIZE} from '../constants/sizes';
import KeyboardAvoidWrapper from '../components/Global/KeyboardAvoidWrapper';

const SignIn = () => {
  const [hidePassword, setHidePassword] = React.useState<boolean>(true);
  const [email, setEmail] = React.useState<string | null>(null);
  const [password, setPassword] = React.useState<string | null>(null);

  const onUserEmailChange = (email: string) => {
    setEmail(email);
  };
  const onUserPasswordChange = (password: string) => {
    setPassword(password);
  };

  return (
    <KeyboardAvoidWrapper>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../assets/images/Logo.png')}
          />
        </View>
        <View style={{marginHorizontal: 30, display: 'flex', gap: 20}}>
          <CustomInput placeholder="Email" onChangeText={onUserEmailChange} />
          <CustomInput
            secureText={hidePassword}
            placeholder="Password"
            onChangeText={onUserPasswordChange}
            icon={
              <Icon
                onPress={() => setHidePassword(!hidePassword)}
                name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
                size={20}
                color={DARKCOLORS.textColor_1}
              />
            }
          />
        </View>
        <View
          style={{
            marginTop: 40,
            marginHorizontal: 30,
            display: 'flex',
            gap: 20,
          }}>
          <CustomButton lable="Sign In" onPress={() => console.log('SignIn')} />
        </View>
        <Text style={styles.text}>Don't have an account? Register</Text>
      </View>
    </KeyboardAvoidWrapper>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    width: ScreenDimensions.ScreenWidth,
    height: ScreenDimensions.ScreenHeight,
    backgroundColor: DARKCOLORS.primaryColor,
    flex: 1,
    justifyContent: 'center',
  },
  logoContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 150,
    height: 135,
  },
  text: {
    color: DARKCOLORS.textColor_1,
    textAlign: 'center',
    marginVertical: 20,
    fontFamily: FONTFAMILY.medium,
    fontSize: FONTSIZE.size_3,
  },
});
