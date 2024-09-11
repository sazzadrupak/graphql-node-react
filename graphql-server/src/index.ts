import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import { PostgresDataSource } from './typeorm/data-source';
import { typeDefs } from './graphql/typeDefs';
import { resolvers } from './graphql/resolvers';


async function startServer() {
  await PostgresDataSource.initialize();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    formatError: (error) => {
      const { message, extensions } = error;
      return { code: extensions?.code, message };
    },
    introspection: true
  });
  const { url } = await startStandaloneServer(server, {
    listen: { port: 3000 },
  });

  console.log(`🚀  Server ready at: ${url}`);
}

startServer().catch((error) => {
  console.error('Error starting server:', error);
});
