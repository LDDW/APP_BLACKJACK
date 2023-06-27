import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {IRootStackProps} from '../../navigator/stack.navigator';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';

export const Header = (props: NativeStackHeaderProps) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.back}>
        {props.navigation.canGoBack() && (
          <Text onPress={() => props.navigation.goBack()} style={styles.white}>
            Back
          </Text>
        )}
      </Pressable>
      <Image
        source={require('../../assets/img/cardFront.png')}
        style={styles.img}
      />
      <Text style={styles.red}>{props.route.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#005315',
  },
  red: {
    color: '#ED0000',
    fontSize: 20,
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
});
