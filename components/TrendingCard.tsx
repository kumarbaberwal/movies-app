import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { images } from '@/constants/images'
import MaskedView from '@react-native-masked-view/masked-view';

export default function TrendingCard({ movie: { movie_id, title, poster_url }, index }: TrendingCardProps) {
    return (
        <Link href={`/movies/${movie_id}`} asChild>
            <TouchableOpacity
                className='w-32 relative pl-5'
            >
                <Image
                    className='w-32 h-48 rounded-lg'
                    source={{
                        uri: poster_url
                    }}
                    resizeMode='cover'
                />
                <View
                    className='absolute bottom-9 -left-3.5 px-2 py-1 rounded-full'
                >
                    <MaskedView
                        maskElement={
                            <Text
                                className='text-white font-bold text-6xl'
                            >
                                {index + 1}
                            </Text>
                        }
                        className=''
                    >
                        <Image
                            source={images.rankingGradient}
                            className='size-14'
                            resizeMode='cover'
                        />

                    </MaskedView>
                </View>
                <Text
                    className='text-sm font-bold mt-2 text-light-200'
                    numberOfLines={2}
                >
                    {title}
                </Text>
            </TouchableOpacity>
        </Link>
    )
}