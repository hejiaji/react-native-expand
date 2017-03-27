import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
  },
  placeholder: {
    borderColor: '#ccc',
    borderTopWidth: StyleSheet.hairlineWidth,
  },
});

function ExpandActionPanel(props) {
  return props.size > 1
    ?
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.container, props.containerStyle]}
    >
      <Text style={[styles.text, props.textStyle]}>{ props.text }</Text>
    </TouchableOpacity>
    :
    <View style={styles.placeholder} />;
}

ExpandActionPanel.propTypes = {
  onPress: React.PropTypes.func.isRequired,
  text: React.PropTypes.string.isRequired,
  size: React.PropTypes.number.isRequired,
  containerStyle: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.array]),
  textStyle: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.array]),
};

export default ExpandActionPanel;
