import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from '@Constants';

export default function Badge(props) {
  const {
    children,
    color = Colors.secondary,
    mode = 'contain',
    style,
    containerStyle,
    textStyle: propsTextStyle,
    icon,
  } = props;
  let textStyle = {color: '#fff'};
  let modeStyle = {backgroundColor: color};
  switch (mode) {
    case 'outlined':
      modeStyle = {
        backgroundColor: 'transparent',
        borderColor: color,
        borderWidth: 2,
      };
      textStyle = {
        color: '#000',
      };
      break;
    case 'text':
      modeStyle = {
        backgroundColor: 'transparent',
      };
      textStyle = {
        color,
      };
      break;

    default:
      break;
  }

  return (
    <TouchableOpacity style={containerStyle} {...props}>
      <View style={[styles.content, modeStyle, style]}>
        <Text style={[styles.text, textStyle, propsTextStyle]}>{children}</Text>
        {icon}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  content: {
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 7,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 2,
  },
});
