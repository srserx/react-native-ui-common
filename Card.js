import React from 'react';
import { View } from 'react-native';

// This class is intended for styling only. Because there's not shared CSS styles
// in react-native. So a style that is to be shared, must be by using a class.

const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
      { props.children }
    </View>
  );
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};

export { Card };
