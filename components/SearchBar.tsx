import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'

interface SearchProps {
    placeholder: string;
    onPress?: () => void;
    value: string;
    onChangeText: (text: string) => void;
}

export default function SearchBar({ placeholder, onPress, value, onChangeText }: SearchProps) {
    return (
        <View
            className='flex-row items-center bg-dark-200 rounded-full px-5 py-2'
        >
            <Image
                source={icons.search}
                className='size-5'
                resizeMode='contain'
                tintColor={'#ab8bff'}
            />
            <TextInput
                onPress={onPress}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                placeholderTextColor={'#ab8bff'}
                className='flex-1 ml-2 text-white'
            />
        </View>
    )
}