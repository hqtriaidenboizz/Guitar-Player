import {Image, StyleSheet, Text, View, Pressable} from 'react-native';
import React, {useState, useEffect} from 'react';
import {EyeEmpty, EyeOff} from 'iconoir-react-native';

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
import {useDispatch, useSelector} from 'react-redux';
import {signInRequest} from '../../stores/actions/signInAction';
import {RootState} from '../../stores/reducers/_index';
import Loading from '../../components/Global/Loading';
import {fetchUserRequest} from '../../stores/actions/userAction';
import {handleGetUserInfo} from '../../utils/getUserInfoAsyncStore';

export interface SignInFormData {
  email: string;
  password: string;
}
const SignIn = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<SignInFormData>();
  const [hidePassword, setHidePassword] = useState<boolean>(true);

  const navigation =
    useNavigation<RootStackScreenProps<'SignIn'>['navigation']>();
  const handleNavigate = () => {
    navigation.navigate('SignUp');
  };
  const {pending, error, accessToken, user} = useSelector(
    (state: RootState) => state.user,
  );

  const dispatch = useDispatch();

  const onSubmit = (data: SignInFormData) => {
    dispatch(signInRequest(data));
  };
  useEffect(() => {
    if (accessToken !== null) {
      const getUserId = async () => {
        const user_Info = await handleGetUserInfo();
        if (user_Info) {
          dispatch(fetchUserRequest(user_Info?.user_id));
        }
      };
      getUserId();
      navigation.navigate('MyTabs');
    }
  }, [accessToken]);
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
          <CustomButton lable="Sign In" onPress={handleSubmit(onSubmit)} />
        </View>
        <Pressable onPress={handleNavigate}>
          <Text style={styles.text}>Don't have an account? Sign up</Text>
        </Pressable>
      </View>
      {pending ? <Loading /> : null}
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
  errorStyle: {
    color: '#F40824',
    fontFamily: FONTFAMILY.regular,
    fontSize: FONTSIZE.size_4,
    lineHeight: 15,
    textAlign: 'right',
    marginHorizontal: 20,
  },
});
