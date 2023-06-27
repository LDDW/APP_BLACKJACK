import React, {ReactNode} from 'react';
import {View, StyleSheet} from 'react-native';
import FooterScreen from './footer.screen';

interface MainLayoutProps {
  children: ReactNode;
  navigation: any; // Replace 'any' with the correct type for your navigation object
}

const Layout = ({children, navigation}: MainLayoutProps) => {
  return (
    <View style={styles.container}>
      {/* <NavbarScreen /> */}
      <View style={styles.content}>{children}</View>
      <FooterScreen navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 10,
  },
});
export default Layout;
