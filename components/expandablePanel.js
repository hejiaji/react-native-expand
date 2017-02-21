import React from 'react';
import { View, StyleSheet } from 'react-native';

import ExpandActionPanel from './expandActionPanel';

const styles = StyleSheet.create({
  panel: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderTopWidth: StyleSheet.hairlineWidth,
  },
});

class ExpandablePanel extends React.Component {
  constructor(props) {
    super(props);
    this.getExpandText = this.getExpandText.bind(this);
    this.handleExpandPress = this.handleExpandPress.bind(this);
    this.state = { isExpanded: false };
  }

  getExpandText() {
    const { expandText } = this.props;
    return this.state.isExpanded ? '↑ 收 起' : `↓ ${expandText}`;
  }

  handleExpandPress() {
    const { isExpanded } = this.state;
    this.setState({
      isExpanded: !isExpanded,
    });
  }

  renderData() {
    const { dataSource } = this.props;
    const rowsData = this.state.isExpanded ? dataSource : dataSource.slice(0, 1);
    return rowsData.map((row, index) => (this.props.renderRow(row, index)));
  }

  render() {
    const { dataSource, contentPanelStyle, renderHeader } = this.props;
    return (
      <View style={styles.panel}>
        { renderHeader && renderHeader() }
        <View style={contentPanelStyle}>
          { this.renderData() }
        </View>
        <ExpandActionPanel
          onPress={this.handleExpandPress}
          text={this.getExpandText()}
          size={dataSource.length}
        />
      </View>
    );
  }
}

ExpandablePanel.propTypes = {
  dataSource: React.PropTypes.array.isRequired,
  renderRow: React.PropTypes.func.isRequired,
  renderHeader: React.PropTypes.func,
  expandText: React.PropTypes.string.isRequired,
  contentPanelStyle: React.PropTypes.number,
};

export default ExpandablePanel;
