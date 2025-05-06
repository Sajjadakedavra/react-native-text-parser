import React, { useState } from 'react';
import { Dimensions, Linking, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AppRoutes from '../../constants/AppRoutes';
import { CustomParagraphText } from '../CutomParagraphText';
import termsText from '../Text';

export const TermsAndConditions = (props) => {
  const { height, navigation } = props;
  const [dataSourceCords, setDataSourceCords] = useState([]);
  const [scrollToIndex, setScrollToIndex] = useState(0);
  const [ref, setRef] = useState(); // create ref

  const scrollHandler = (key) => {
    if (dataSourceCords.length > scrollToIndex) {
      ref?.scrollTo({
        x: 0,
        y: dataSourceCords[key], //we get the offset value from array based on key
        animated: true,
      });
    }
  };

  const openURL = (link) => {
    Linking.openURL(link);
  };

  const onPress = (link, id, routeName) => {
    if (link && link !== '') {
      openURL(link);
    } else if (id && id !== '') {
      scrollHandler(id);
    } else if (routeName && routeName !== '' && navigation) {
      navigation?.navigate(routeName, {
        setVisible: () => {},
      });
    }
  };

  return (
    <ScrollView
      style={{ height: height ? height : Dimensions.get('window').height }}
      showsVerticalScrollIndicator={false}
      ref={(ref) => {
        setRef(ref);
      }}>
      <View
        style={{ marginTop: 20, justifyContent: 'center', paddingBottom: 300 }}>
        {termsText.map((item) => (
          <CustomParagraphText
            mainHeading={item.mainHeading}
            heading={item.heading}
            text={item.text}
            customStyleForText={item.customStyleForText}
            patternArray={[
              {
                pattern: /“Add some words here to match”/,
                style: { fontWeight: '700' },
              },
              {
                pattern: /www.google.com/,
                style: { color: '#0000EE' },
                onPress: () => onPress('https://www.google.com'),
              },
              {
                pattern: /Privacy Policy/,
                style: { color: '#0000EE' },
                onPress: () => onPress('', '', AppRoutes.PrivacyPolicy),
              },
              { pattern: /•/, style: { fontWeight: '900' } },
              {
                pattern: /(["'])(?:(?=(\\?))\2.)*?\1/,
                style: { fontWeight: '700' },
              },
            ]}
          />
        ))}
      </View>
    </ScrollView>
  );
};
