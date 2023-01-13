//import App from './app';
import logger from './lib/logger';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import express from 'express';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';

(async () => {

  // The GraphQL schema
  const typeDefs = `#graphql
    type Query {
      hello: String
    }
  `;
  
  // A map of functions which return data for the schema.
  const resolvers = {
    Query: {
      hello: () => 'world',
    },
  };
  
  const app = express();
  const httpServer = http.createServer(app);
  
  // Set up Apollo Server 
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  await server.start();
  
  app.use(
    //cors(),
    bodyParser.json(),
    expressMiddleware(server),
  );
  
  await new Promise(() => httpServer.listen({ port: 4000 }));
  console.log(`🚀 Server ready at http://localhost:4000`);
})();