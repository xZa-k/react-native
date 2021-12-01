import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Image} from 'react-native';
import {
  Provider as PaperProvider,
  DefaultTheme,
  FAB,
  Chip,
  Banner,
} from 'react-native-paper';

export default function App() {
  const [visible, setVisible] = useState(true);

  return (
    <PaperProvider theme={DefaultTheme}>
      <Banner
        visible={visible}
        actions={[
          {
            label: 'Fix it',
            onPress: () => setVisible(false),
          },
          {
            label: 'Learn more',
            onPress: () => setVisible(false),
          },
        ]}
        icon={({size}) => (
          <Image
            source={{
              uri: 'https://avatars3.githubusercontent.com/u/17571969?s=400&v=4',
            }}
            style={{
              width: size,
              height: size,
            }}
          />
        )}
      >
        There was a problem processing a transaction on your credit card.
      </Banner>
      <FAB
        style={styles.fab}
        small
        icon="plus"
        onPress={() => console.log('Pressed')}
      />
      <Chip
        style={styles.chip}
        icon="information"
        onPress={() => console.log('Pressed')}
      >
        Example Chip
      </Chip>
      <StatusBar style="auto" />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  chip: {
    margin: 32,
  },
});
