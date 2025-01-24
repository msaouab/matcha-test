import React, { useState } from "react"
import { View, StyleSheet } from "react-native"
import Swiper from "../components/Swiper"
import { users } from "../data/users"

const SwipeScreen = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleSwipeRight = () => {
    if (Math.random() > 0.5) {
      navigation.navigate("Match", { user: users[currentIndex] })
    }
    setCurrentIndex((prevIndex) => prevIndex + 1)
  }

  const handleSwipeLeft = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1)
  }

  return (
    <View style={styles.container}>
      <Swiper users={users} currentIndex={currentIndex} onSwipeRight={handleSwipeRight} onSwipeLeft={handleSwipeLeft} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
})

export default SwipeScreen

