import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

export default function Movie() {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Movie</Text>
    </View>
  )
}