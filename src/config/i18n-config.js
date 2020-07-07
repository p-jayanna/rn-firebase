import i18n from 'i18n-js';
import * as RNLocalize from 'react-native-localize';
import en from '../i18n/en';
import {I18nManager} from 'react-native';
import moment from 'moment';
import {translate} from '../i18n/i18n';
import kn from '../i18n/kn';

export const translationGetters = {
  en: () => en,
  kn: () => kn,
};

export const i18nConfig = () => {
  const fallback = {languageTag: 'en', isRTL: false};

  const {languageTag, isRTL} =
    RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
    fallback;

  translate.cache.clear();

  I18nManager.forceRTL(isRTL);

  i18n.translations = {[languageTag]: translationGetters[languageTag]()};

  i18n.locale = languageTag;
  moment.locale(languageTag);

  return languageTag;
};
