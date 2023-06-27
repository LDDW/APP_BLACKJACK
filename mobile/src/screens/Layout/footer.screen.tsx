import React from 'react';
import {Image, Linking, StyleSheet, Text, View} from 'react-native';

const FooterScreen = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.white} onPress={() => navigation.navigate('Home')}>
        Accueil
      </Text>

      <Text style={styles.white}>Comment jouer</Text>
      <Text style={styles.white}>Contact</Text>
      <Text style={styles.white}>Mentions Légales</Text>

      <Image
        source={require('../../assets/img/cardFront.png')}
        style={styles.img}
      />

      <Text style={styles.white}>CGU</Text>
      <Text style={styles.white}>Mon compte</Text>
      <Text style={styles.white}>FAQ</Text>
      <Text style={styles.white}>Plan du site</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    backgroundColor: '#005315',
  },
  white: {
    color: 'white',
    fontSize: 20,
  },
  img: {
    height: 50,
    width: 30,
    marginVertical: 10,
  },
});

export default FooterScreen;
