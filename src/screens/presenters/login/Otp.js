import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {withBrandSettings} from '../../../styles/withBrandSettings';
import AppTouchableOpacity from '../../../components/AppTouchableOpacity';
import {translate} from '../../../i18n/i18n';

const Otp = props => {
  const {
    colors,
    brandStyle: {sharedStyle},
    onConfirmPress,
    onUpdateDataPress,
  } = props;
  const styles = _styles(colors, sharedStyle);

  return (
    <View>
      <View style={styles.otpContainer}>
        <OTPInputView style={{width: '98%'}} pinCount={4} />
        <View style={styles.otpButtonArea}>
          <TouchableOpacity onPress={onUpdateDataPress}>
            <Text style={styles.otpButtonText}>Change Number/Email</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.otpButtonText}>Resend It</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <AppTouchableOpacity
          name={translate('login_confirm_otp')}
          icon={'arrow-circle-o-right'}
          onPress={onConfirmPress}
        />
      </View>
    </View>
  );
};

const _styles = (colors, sharedStyle) =>
  StyleSheet.create({
    otpContainer: {
      flex: 1,
      justifyContent: 'center',
      padding: sharedStyle.spacing.xl,
    },
    otpButtonArea: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    otpButtonText: {
      color: colors.onSurfaceVariant,
      borderBottomWidth: 2,
      fontSize: sharedStyle.fontSize.default,
      borderBottomColor: colors.primary,
    },
    buttonContainer: {
      paddingTop: sharedStyle.spacing.xl,
      justifyContent: 'flex-end',
    },
  });
export default withBrandSettings(Otp);
