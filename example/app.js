import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { ExpandablePanel } from 'react-native-expand';

import BandageIcon from './images/bandaged.png';
import CallIcon from './images/call.png';
import DislikeIcon from './images/dislike.png';
import FistIcon from './images/fist.png';
import FlowersIcon from './images/flowers.png';
import HeartIcon from './images/heart.png';
import LikeIcon from './images/like.png';
import LikingIcon from './images/liking.png';
import PartyIcon from './images/party.png';
import PokeIcon from './images/poke.png';
import SuperLikeIcon from './images/superlike.png';
import VictoryIcon from './images/victory.png';

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  thumb: {
    width: 64,
    height: 64,
    flexBasis: 64,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    padding: 10,
    borderColor: '#ccc',
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  text: {
    flexShrink: 1,
  }
});

const LOREM_IPSUM = 'Lorem ipsum dolor sit amet, ius ad pertinax oportere accommodare, an vix civibus corrumpit referrentur. Te nam case ludus inciderint,';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.ds = [BandageIcon, CallIcon, DislikeIcon, FistIcon, FlowersIcon,
      HeartIcon, LikeIcon, LikingIcon, PartyIcon, PokeIcon, SuperLikeIcon, VictoryIcon];
  }

  renderRowData(rowData, index) {
    return (
      <View key={index} style={styles.row}>
        <Image style={styles.thumb} source={rowData} />
        <Text style={styles.text}>Row{index+1} {LOREM_IPSUM}</Text>
      </View>
    );
  }

  render() {
    return (
      <ScrollView>
        <ExpandablePanel
          contentPanelStyle={styles.container}
          dataSource={this.ds}
          renderRow={this.renderRowData}
          expandText="Load More"
        />
      </ScrollView>
    )
  }
}

export default App;