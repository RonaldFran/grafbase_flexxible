import { GraphQLClient } from "graphql-request";

const isProd = process.env.NODE_ENV === 'production';
const apiUrl = isProd ? process.env.NEXT_PUBLIC_GRABASE_API_URL || ' ' : 'http://127.0.0.1:4000/graphql'
const apiKey = isProd ? process.env.NEXT_PUBLIC_GRABASE_API_KEY ||  '': '1234'

const makeGraphQLRequest = async (query: string, variables ={}) => {
    try {
   // make a client request to connect to grafbase database
    }catch(error) {
        throw error
    }

}