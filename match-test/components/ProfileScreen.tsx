import React from "react"
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: "https://randomuser.me/api/portraits/women/8.jpg" }} style={styles.image} />
      <Text style={styles.name}>Sarah, 28</Text>
      <Text style={styles.bio}>Adventure seeker, coffee lover, and tech enthusiast</Text>
      <View style={styles.stats}>
        <View style={styles.statItem}>
          <Icon name="heart" size={24} color="#FF1493" />
          <Text style={styles.statText}>254 Matches</Text>
        </View>
        <View style={styles.statItem}>
          <Icon name="star" size={24} color="#00FFFF" />
          <Text style={styles.statText}>18 Super Likes</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Swipe")}>
        <Text style={styles.buttonText}>Start Swiping</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#121212",
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    color: "#ddd",
    textAlign: "center",
    marginBottom: 20,
  },
  stats: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 30,
  },
  statItem: {
    alignItems: "center",
  },
  statText: {
    color: "#fff",
    marginTop: 5,
  },
  button: {
    backgroundColor: "#FF1493",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
})

export default ProfileScreen

