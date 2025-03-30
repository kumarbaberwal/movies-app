import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { images } from '@/constants/images'
import { icons } from '@/constants/icons'

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarStyle: {
          backgroundColor: '#0f0d23',
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 36,
          height: 52,
          position: 'absolute',
          overflow: 'hidden',
          borderWidth: 1,
          borderColor: '#0f0d23',
        }
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          headerShown: false,
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <TabIcon
              icon={icons.home}
              focused={focused}
              title='Home'
            />
          )
        }}
      />
      <Tabs.Screen
        name='search'
        options={{
          title: 'Search',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              icon={icons.search}
              focused={focused}
              title='Search'
            />
          )
        }}
      />
      <Tabs.Screen
        name='saved'
        options={{
          title: 'Saved',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              icon={icons.save}
              focused={focused}
              title='Saved'
            />
          )
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              icon={icons.person}
              focused={focused}
              title='Profile'
            />
          )
        }}
      />
    </Tabs>
  )
}


const TabIcon = ({ focused, icon, title }: any) => {
  if (focused) {
    return (
      <ImageBackground
        source={images.highlight}
        className='flex flex-row w-full flex-1 min-w-[112px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden'
      >
        <Image
          source={icon}
          className='size-5'
        />
        <Text
          className='text-secondary text-base font-semibold ml-2'
        >
          {title}
        </Text>
      </ImageBackground>
    )
  }
  
  return (
    <View
      className='size-full justify-center items-center mt-4 rounded-full'
    >
      <Image
        source={icon}
        tintColor='#a8b5db'
        className='size-5'
      />
    </View>
  )
}