import React from "react"
import { View, Text, StyleSheet, Image } from "react-native"
import { LinearGradient } from "expo-linear-gradient"

const Card = ({ user }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: user.image }} style={styles.image} />
      <LinearGradient colors={["transparent", "rgba(0,0,0,0.8)"]} style={styles.gradient}>
        <Text style={styles.name}>
          {user.name}, {user.age}
        </Text>
        <Text style={styles.bio}>{user.bio}</Text>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "50%",
    justifyContent: "flex-end",
    padding: 20,
  },
  name: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 5,
  },
  bio: {
    color: "#ddd",
    fontSize: 16,
  },
})

export default Card

