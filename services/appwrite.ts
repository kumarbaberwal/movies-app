import { Client, Databases, ID, Query } from 'react-native-appwrite';

const PROJECT_ID = process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!;
const DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!;
const COLLECTION_ID = process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID!;

const client = new Client().setEndpoint('https://cloud.appwrite.io/v1').setProject(PROJECT_ID);
// console.log(client);

const database = new Databases(client);
// console.log(DATABASE_ID);
// console.log(database);


export const updateSearchCount = async (query: string, movie: Movie) => {
    try {
        // console.log("Updating search count for query: ", query);
        // console.log("Movie: ", movie);
        const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
            Query.equal('searchTerm', query),
        ]);

        // console.log(result);

        if (result.documents.length > 0) {
            const existingMovie = result.documents[0];

            await database.updateDocument(DATABASE_ID, COLLECTION_ID, existingMovie.$id, {
                count: existingMovie.count + 1,
            });
        } else {
            await database.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
                searchTerm: query,
                count: 1,
                movie_id: movie.id,
                title: movie.title,
                poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            });
        }
    } catch (error) {
        console.error("Error updating search count: ", error);
        throw error;
    }

    // return result;
}