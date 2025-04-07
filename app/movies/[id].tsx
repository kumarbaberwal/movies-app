import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { fetchMovieDetails } from '@/services/api';
import { useFetch } from '@/services/useFetch';
import { icons } from '@/constants/icons';
import MovieCard from '@/components/MovieCard';

interface MovieInfoProps {
  label: string;
  value?: string | number | null;
}


const MovieInfo = ({ label, value }: MovieInfoProps) => (
  <View
    className='flex-col items-start justify-center mt-5'
  >
    <Text
      className='text-light-200 font-normal text-sm'
    >
      {label}
    </Text>
    <Text
      className='text-light-100 font-bold text-sm mt-2'
    >
      {value || 'N/A'}
    </Text>
  </View>
)

export default function MovieDetails() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  // console.log(id);
  const { data: movie, loading } = useFetch(() => fetchMovieDetails(id as string));
  // console.log(`https://image.tmdb.org/t/p/w500${movie?.poster_path}`);
  // console.log(movie);
  return (
    <View
      className='flex-1 bg-primary'
    >
      <ScrollView
        // className=''
        contentContainerStyle={{
          paddingBottom: 80,
        }}
      >
        <View
        // className=''
        >
          <Image
            source={{ uri: `https://image.tmdb.org/t/p/w500${movie?.poster_path}` }} // Replace with actual image URL
            className='w-full h-[550px]'
            resizeMode={'stretch'}
          />
        </View>
        <View
          className='flex-col items-start justify-center mt-5 px-5'
        >
          <Text
            className='text-white font-bold text-xl'
          >
            {movie?.title}
          </Text>
          <View
            className='flex-row items-center gap-x-1 mt-2'
          >
            <Text className='text-light-200 text-sm'>
              {movie?.release_date.split('-')[0]}
            </Text>
            <Text className='text-light-200 text-sm'>
              {movie?.runtime}m
            </Text>
          </View>
          <View
            className='flex-row items-center bg-dark-100 px-2 py-1 rounded-md gap-x-1 mt-2'
          >
            <Image
              source={icons.star}
              className='size-4'
            />
            <Text className='text-light-200 text-sm'>
              {Math.round(movie?.vote_average ?? 0)} /10
            </Text>
            <Text className='text-light-200 text-sm'>
              ({movie?.vote_count} votes)
            </Text>
          </View>
          <MovieInfo label='Overview' value={movie?.overview} />
          <MovieInfo label='Genres' value={movie?.genres.map((genre: any) => genre.name).join(' - ') || 'N/A'} />
          <View
            className='flex-row justify-between w-1/2'
          >
            <MovieInfo label='Budget' value={`$${movie?.budget / 1_000_000} million`} />
            <MovieInfo label='Revenue' value={`$${Math.round(movie?.revenue) / 1_000_000} million`} />
          </View>
          <MovieInfo label='Production Companies' value={movie?.production_companies.map((company: any) => company.name).join(' - ') || 'N/A'} />
        </View>
      </ScrollView>
      <TouchableOpacity
        className='absolute bottom-5 left-0 right-0 mx-5 bg-accent rounded-lg py-3.5 flex-row items-center justify-center z-50'
        onPress={() => router.back()}
      >
        <Image
          source={icons.arrow}
          className='size-5 mr-1 mt-0.5 rotate-180'
          tintColor={'#fff'}
        />
        <Text
          className='text-white font-semibold text-base'
        >
          Go Back
        </Text>
      </TouchableOpacity>
    </View >
  )
}