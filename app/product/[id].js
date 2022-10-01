import { Button, StyleSheet, Text, View } from 'react-native'

export default function Profile({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Produto</Text>
      <Text style={styles.title}>{route.params.id}</Text>

      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold',
  },
})
