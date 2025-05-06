// modules
import React from 'react';
import { View, Text } from 'react-native';
import ParsedText from 'react-native-parsed-text';

//styles
import styles from './styles';

export const CustomParagraphText = (props) => {
  const {
    heading = '',
    text = '',
    mainHeading = '',
    customStyleForHeading = {},
    customStyleForText = {},
    patternArray = [],
  } = props;

  const handleUrlPress = (url, matchIndex /*: number*/) => {};
  return (
    <View>
      {mainHeading !== '' && (
        <Text style={styles.tAndCHeadingPrimary}>{mainHeading}</Text>
      )}

      {heading !== '' && <Text style={styles.tAndCHeading}>{heading}</Text>}

      {text !== '' && (
        <ParsedText
          style={[styles.tAndCText, customStyleForText]}
          parse={[
            // { type: 'url', style: styles.linkColor, onPress: handleUrlPress },
            ...patternArray,
          ]}>
          {text}
        </ParsedText>
      )}
    </View>
  );
};
