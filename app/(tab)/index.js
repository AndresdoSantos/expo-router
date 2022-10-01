import { Link, useLink } from 'expo-router'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function App() {
  const link = useLink()

  function handleOpenProfile() {
    link.push('/profile')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World</Text>

      <Button title="Ir para profile" onPress={handleOpenProfile} />

      <Link style={{ marginTop: 20 }} href="/product/5">
        Detalhe do produto
      </Link>
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
