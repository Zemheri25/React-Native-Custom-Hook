import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { useFetch } from './Utils/CustomHook';

export default function App() {
  const {data, loading, error} = useFetch("https://fakestoreapi.com/products");
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {loading && <ActivityIndicator size="large" />}
      {error && <Text>{error.message}</Text>}
      {data.map((item, index) => {
        return <>
        <Text key={index}>{item.title}</Text>
        </>
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
