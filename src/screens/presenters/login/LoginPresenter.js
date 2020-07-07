import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import {withBrandSettings} from '../../../styles/withBrandSettings';
import {translate} from '../../../i18n/i18n';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import AppTextInput from '../../../components/AppTextInput';
import {translationKeys} from '../../../services/constants';
import AppTouchableOpacity from '../../../components/AppTouchableOpacity';
import {ScrollView} from 'react-native-gesture-handler';
import Otp from './Otp';
import LoginForm from './LoginForm';

const LoginPresenter = props => {
  const {
    colors,
    brandStyle: {sharedStyle},
    verifyUser,
  } = props;

  const [isOtpSent, setIsOtpSent] = useState(false);

  const styles = _styles(colors, sharedStyle);

  const onSendOtpPress = () => {
    setIsOtpSent(true);
  };
  const onUpdateDataPress = () => {
    setIsOtpSent(false);
  };

  const onConfirmPress = () => {
    verifyUser();
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <View style={styles.headerContainer}>
        <Text style={styles.welcomeText}>
          {isOtpSent ? translate('login_text2') : translate('login_text1')}
        </Text>
      </View>
      <View style={styles.loginContainer}>
        <ScrollView>
          {isOtpSent ? (
            <Otp
              onConfirmPress={onConfirmPress}
              onUpdateDataPress={onUpdateDataPress}
            />
          ) : (
            <LoginForm onSendOtpPress={onSendOtpPress} />
          )}
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

const _styles = (colors, sharedStyle) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.primary,
    },
    headerContainer: {
      flex: 1,
      paddingLeft: sharedStyle.spacing.lg,
      justifyContent: 'center',
    },
    welcomeText: {
      fontSize: sharedStyle.fontSize.md,
      color: colors.onPrimary,
      fontWeight: 'bold',
    },
    loginContainer: {
      flex: 3,
      padding: sharedStyle.spacing.default,
      paddingVertical: sharedStyle.spacing.xl,
      backgroundColor: colors.surface,
      borderTopLeftRadius: sharedStyle.borderRadius.xl,
      borderTopRightRadius: sharedStyle.borderRadius.xl,
    },
    inputContainer: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  });

export default withBrandSettings(LoginPresenter);
