import React from "react"
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"
import { LinearGradient } from "expo-linear-gradient"

const MatchScreen = ({ route, navigation }) => {
  const { user } = route.params

  return (
    <LinearGradient colors={["#FF1493", "#00FFFF"]} style={styles.container}>
      <Text style={styles.matchText}>It's a Match!</Text>
      <Image source={{ uri: user.image }} style={styles.image} />
      <Text style={styles.name}>{user.name}</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Swipe")}>
        <Text style={styles.buttonText}>Keep Swiping</Text>
      </TouchableOpacity>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  matchText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    color: "#fff",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#fff",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
  },
  buttonText: {
    color: "#FF1493",
    fontSize: 18,
    fontWeight: "bold",
  },
})

export default MatchScreen

