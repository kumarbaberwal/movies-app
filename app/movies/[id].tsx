import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

export default function MovieDetails() {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Movie</Text>
    </View>
  )
}