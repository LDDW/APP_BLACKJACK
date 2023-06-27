import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {IRootStackProps} from '../../navigator/stack.navigator';
import Layout from '../Layout/layout.screen';

const HomeScreen: React.FC<IRootStackProps<'Home'>> = ({navigation}) => {
  return (
    <Layout navigation={navigation}>
      <Text style={styles.red}>Blackjack de la muerte</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Parties en cours</Text>
        <View style={styles.line}>
          <Text>Nom partie</Text>
          <Text>Nb joueurs</Text>
        </View>
        <Pressable style={styles.line}>
          <Text>Partie 1</Text>
          <Text>6</Text>
        </Pressable>
      </View>

      <Pressable
        style={styles.card}
        onPress={() => navigation.navigate('Chat')}>
        <Text style={styles.cardTitle}>Acceder au chat</Text>
      </Pressable>
    </Layout>
  );
};

const styles = StyleSheet.create({
  line: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 4,
    cursor: 'pointer',
  },
  card: {
    borderColor: '#005315',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
  },
  red: {
    color: '#ED0000',
    fontSize: 20,
    textAlign: 'center',
  },
  white: {
    color: 'white',
    fontSize: 20,
  },
  img: {
    height: 35,
    width: 25,
  },
  back: {
    width: 50,
  },
  cardTitle: {
    textAlign: 'center',
  },
});

export default HomeScreen;
