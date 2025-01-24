import React from "react"
import { View, StyleSheet, Dimensions } from "react-native"
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  useAnimatedGestureHandler,
} from "react-native-reanimated"
import { PanGestureHandler } from "react-native-gesture-handler"
import Card from "./Card"

const { width, height } = Dimensions.get("window")
const SWIPE_THRESHOLD = width * 0.3

const Swiper = ({ users, currentIndex, onSwipeRight, onSwipeLeft }) => {
  const translateX = useSharedValue(0)
  const translateY = useSharedValue(0)

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startX = translateX.value
      ctx.startY = translateY.value
    },
    onActive: (event, ctx) => {
      translateX.value = ctx.startX + event.translationX
      translateY.value = ctx.startY + event.translationY
    },
    onEnd: (event) => {
      if (event.translationX > SWIPE_THRESHOLD) {
        translateX.value = withSpring(width)
        onSwipeRight()
      } else if (event.translationX < -SWIPE_THRESHOLD) {
        translateX.value = withSpring(-width)
        onSwipeLeft()
      } else {
        translateX.value = withSpring(0)
        translateY.value = withSpring(0)
      }
    },
  })

  const cardStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
      { rotate: `${translateX.value / 10}deg` },
    ],
  }))

  return (
    <View style={styles.container}>
      {users
        .map((user, index) => {
          if (index < currentIndex) {
            return null
          }
          if (index === currentIndex) {
            return (
              <PanGestureHandler key={user.id} onGestureEvent={gestureHandler}>
                <Animated.View style={[styles.card, cardStyle]}>
                  <Card user={user} />
                </Animated.View>
              </PanGestureHandler>
            )
          }
          return (
            <View key={user.id} style={styles.card}>
              <Card user={user} />
            </View>
          )
        })
        .reverse()}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    position: "absolute",
    width: width * 0.9,
    height: height * 0.7,
    borderRadius: 20,
    overflow: "hidden",
  },
})

export default Swiper

