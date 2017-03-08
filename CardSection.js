import React from 'react';
import { View } from 'react-native';

// This class is intended for styling only. Because there's not shared CSS styles
// in react-native. So a style that is to be shared, must be by using a class.

const CardSection = (props) => {
  return (
    <View style={[styles.containerStyle, props.style]}>
      { props.children }
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export { CardSection };
