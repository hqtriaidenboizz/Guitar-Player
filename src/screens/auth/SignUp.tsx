import {Image, StyleSheet, Text, View, Pressable} from 'react-native';
import React, {useState} from 'react';
import {EyeEmpty, EyeOff, FontSize} from 'iconoir-react-native';
import CustomInput from '../../components/Global/CustomInput';
import {ScreenDimensions} from '../../constants/dimensions';
import {DARKCOLORS} from '../../constants/colors';
import CustomButton from '../../components/Global/CustomButton';
import {FONTFAMILY} from '../../constants/fonts';
import {FONTSIZE} from '../../constants/sizes';
import KeyboardAvoidWrapper from '../../components/Global/KeyboardAvoidWrapper';
import {useNavigation} from '@react-navigation/native';
import {RootStackScreenProps} from '../../types/navigation/types';
import {useForm, Controller} from 'react-hook-form';

interface SignUpFormData {
  email: string;
  password: string;
}
const SignUp = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<SignUpFormData>();
  const [hidePassword, setHidePassword] = useState<boolean>(true);

  const navigation =
    useNavigation<RootStackScreenProps<'SignUp'>['navigation']>();
  const handleNavigate = () => {
    navigation.navigate('SignIn');
  };
  const onSubmit = (data: SignUpFormData) => {
    console.log(data);
  };

  return (
    <KeyboardAvoidWrapper>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../assets/images/Logo.png')}
          />
        </View>
        <View style={{marginHorizontal: 30, display: 'flex', gap: 20}}>
          <Controller
            control={control}
            rules={{
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Invalid email format',
              },
            }}
            render={({field: {onChange, value, onBlur}}) => (
              <CustomInput
                placeholder="Email"
                onChangeText={onChange}
                text={value}
                onBlur={onBlur}
              />
            )}
            name="email"
            defaultValue=""
          />
          {errors.email && (
            <Text style={styles.errorStyle}>{errors.email.message}</Text>
          )}
          <Controller
            control={control}
            rules={{
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters',
              },
            }}
            render={({field: {onChange, value}}) => (
              <CustomInput
                secureText={hidePassword}
                placeholder="Password"
                text={value}
                onChangeText={onChange}
                icon={
                  hidePassword ? (
                    <EyeOff
                      onPress={() => setHidePassword(!hidePassword)}
                      color={DARKCOLORS.iconColor}
                      width={20}
                      height={20}
                    />
                  ) : (
                    <EyeEmpty
                      onPress={() => setHidePassword(!hidePassword)}
                      color={DARKCOLORS.iconColor}
                      width={20}
                      height={20}
                    />
                  )
                }
              />
            )}
            name="password"
            defaultValue=""
          />
          {errors.password && (
            <Text style={styles.errorStyle}>{errors.password.message}</Text>
          )}
        </View>
        <View
          style={{
            marginTop: 40,
            marginHorizontal: 30,
            display: 'flex',
            gap: 20,
          }}>
          <CustomButton lable="Sign Up" onPress={handleSubmit(onSubmit)} />
        </View>
        <Pressable onPress={handleNavigate}>
          <Text style={styles.text}> Already have an account? Sign in</Text>
        </Pressable>
      </View>
    </KeyboardAvoidWrapper>
  );
};

export default SignUp;

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
  errorStyle: {
    color: '#F40824',
    fontFamily: FONTFAMILY.regular,
    fontSize: FONTSIZE.size_4,
    lineHeight: 15,
    textAlign: 'right',
    marginHorizontal: 20,
  },
});
