import { ApolloServer } from 'apollo-server-lambda';
import { Context, Callback } from 'aws-lambda';
import { gql } from 'apollo-server-lambda';

const typeDefs = gql`
  type Query {
    getItem: Item
  }

  type Item {
    name: String!
  }
`;

export const getItem = async () => {
  return {
    name: 'Item 1',
  };
};

const resolvers = {
  Query: {
    getItem,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

export const serverHandler = server.createHandler();

export const saveItem = (event: any, context: Context, callback: Callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({ name: 'Item 1' }),
  };
  callback(null, response);
};
