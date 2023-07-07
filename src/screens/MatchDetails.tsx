import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useStack } from '@hooks/useNav';
import { Heading } from '@components/Heading';

export function MatchDetails() {
  const navigation = useStack();

  return (
    <View style={styles.container}>
      <Heading text={'Match Details'} />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('feed')}>
        <Text style={styles.textButton}>Go to Feed</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161621',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
    fontFamily: 'Roboto_700Bold',
  },
  textButton: {
    color: '#161621',
    fontFamily: 'Roboto_500Medium',
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 4,
  },
});
