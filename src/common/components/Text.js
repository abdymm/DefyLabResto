import React from 'react';
import {Text as NativeText} from 'react-native';

const Text = props => {
  const {style, b, size = 16, tiny, small, h6, h5, h4, h3, h2, h1} = props;

  // FONT SIZE
  let fontWeight = 'normal';
  let fontSize = size;
  if (h1) {
    fontSize = 48;
  } else if (h2) {
    fontSize = 32;
  } else if (h3) {
    fontSize = 22;
  } else if (h4) {
    fontSize = 20;
  } else if (h5) {
    fontSize = 18;
  } else if (h6) {
    fontSize = 17;
  } else if (small) {
    fontSize = 14;
  } else if (tiny) {
    fontSize = 10;
  }
  if (b) {
    fontWeight = 'bold';
  }

  return <NativeText {...props} style={[{fontSize, fontWeight}, style]} />;
};

export default Text;
