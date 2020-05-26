import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.PostContainer}>
          <Text style={styles.title}>Estudando React native</Text>
          <Text style={styles.description}>
            Melhor curso de aprendizado RockSeat
          </Text>
        </View>

        <View style={styles.PostContainer}>
          <Text style={styles.title}>Estudando React native</Text>
          <Text style={styles.description}>
            Melhor curso de aprendizado RockSeat
          </Text>
        </View>

        <View style={styles.PostContainer}>
          <Text style={styles.title}>Estudando React native</Text>
          <Text style={styles.description}>
            Melhor curso de aprendizado RockSeat
          </Text>
        </View>

        <View style={styles.PostContainer}>
          <Text style={styles.title}>Estudando React native</Text>
          <Text style={styles.description}>
            Melhor curso de aprendizado RockSeat
          </Text>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
  PostContainer: {
    padding: 15,
    alignItems: 'center',
    backgroundColor: '#ffff',
    marginBottom: 10,
    borderRadius: 20,
  },

  title: {
    color: '#000',
    fontSize: 18,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  description: {
    color: '#33f4',
    fontSize: 15,
  },
});
