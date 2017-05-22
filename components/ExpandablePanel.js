import React from 'react';
import { StyleSheet, View } from 'react-native';

import ExpandActionPanel from './ExpandActionPanel';

const styles = StyleSheet.create({
  panel: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderTopWidth: StyleSheet.hairlineWidth,
  },
});

export default class ExpandablePanel extends React.Component {
  constructor(props) {
    super(props);
    this.getExpandText = this.getExpandText.bind(this);
    this.handleExpandPress = this.handleExpandPress.bind(this);
    this.state = { isExpanded: false };
  }

  getExpandText() {
    const { expandText, collapseText } = this.props;
    return this.state.isExpanded ? collapseText : expandText;
  }

  handleExpandPress() {
    const { isExpanded } = this.state;
    this.setState({
      isExpanded: !isExpanded,
    });
  }

  renderData() {
    const { dataSource, minRowCount } = this.props;
    const rowsData = this.state.isExpanded ? dataSource : dataSource.slice(0, minRowCount);
    return rowsData.map((row, index) => (this.props.renderRow(row, index)));
  }

  render() {
    const {
      dataSource,
      contentPanelStyle,
      footerPanelStyle,
      footerTextStyle,
      renderHeader,
    } = this.props;
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
          containerStyle={footerPanelStyle}
          textStyle={footerTextStyle}
        />
      </View>
    );
  }
}

ExpandablePanel.propTypes = {
  dataSource: React.PropTypes.array.isRequired,
  renderRow: React.PropTypes.func.isRequired,
  renderHeader: React.PropTypes.func,
  expandText: React.PropTypes.string,
  collapseText: React.PropTypes.string,
  contentPanelStyle: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.array]),
  footerPanelStyle: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.array]),
  footerTextStyle: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.array]),
  minRowCount: React.PropTypes.number,
};

ExpandablePanel.defaultProps = {
  expandText: '↓ Load More',
  collapseText: '↑ Collapse',
  minRowCount: 1,
};
