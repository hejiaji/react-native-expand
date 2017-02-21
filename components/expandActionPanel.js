import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../../constants/constants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 46,
    borderColor: '#ccc',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 12,
    color: COLORS.LINK,
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
        style={styles.container}
      >
        <Text style={styles.text}>{ props.text }</Text>
      </TouchableOpacity>
    :
      <View style={styles.placeholder} />;
}

ExpandActionPanel.propTypes = {
  onPress: React.PropTypes.func.isRequired,
  text: React.PropTypes.string.isRequired,
  size: React.PropTypes.number.isRequired,
};

export default ExpandActionPanel;
