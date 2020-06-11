import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {withBrandSettings} from '../../../styles/withBrandSettings';
import AppTextInput from '../../../components/AppTextInput';
import {translationKeys} from '../../../services/constants';
import {translate} from '../../../i18n/i18n';
import AppTouchableOpacity from '../../../components/AppTouchableOpacity';

const LoginForm = props => {
  const {
    colors,
    brandStyle: {sharedStyle},
    onSendOtpPress,
  } = props;

  const [mobileNo, setMobileNo] = useState('+91');
  const [email, setEmail] = useState('');
  const styles = _styles(colors, sharedStyle);

  return (
    <View>
      <View style={styles.container}>
        <AppTextInput
          placeHolderKey={translationKeys.telephone}
          keyboardType={'number-pad'}
          onChangeText={number => setMobileNo(number)}
          iconName={'mobile'}
        />
        <Text>{translate('or')}</Text>
        <AppTextInput
          placeHolderKey={translationKeys.email}
          keyboardType={'default'}
          onChangeText={emailId => setEmail(emailId)}
          iconName={'envelope'}
        />
      </View>
      <View style={styles.buttonContainer}>
        <AppTouchableOpacity
          name={translate('login_send_otp')}
          icon={'arrow-circle-o-right'}
          onPress={onSendOtpPress}
        />
      </View>
    </View>
  );
};

const _styles = (colors, sharedStyle) =>
  StyleSheet.create({
    container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
    buttonContainer: {
      paddingTop: sharedStyle.spacing.xl,
      justifyContent: 'flex-end',
    },
  });
export default withBrandSettings(LoginForm);
