import { GraphQLClient } from 'graphql-request';

export const client = new GraphQLClient(process.env.GRAPHQL_CLIENT as string);