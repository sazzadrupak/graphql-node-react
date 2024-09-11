import { GraphQLError } from 'graphql';

import { Authors } from '../../typeorm/entity/Authors';
import { PostgresDataSource } from '../../typeorm/data-source';

export const authorResolvers = {
  Query: {
    getAuthors: async () => {
      const authorRepo = PostgresDataSource.getRepository(Authors);
      return await authorRepo.find();
    },
  },
  Mutation: {
    createAuthor: async (
      _: any,
      { firstName, lastName, email }: { firstName: string; lastName: string; email: string }
    ) => {
      try {
        const authorRepo = PostgresDataSource.getRepository(Authors);
        const author = authorRepo.create({ first_name: firstName, last_name: lastName, email });
        await authorRepo.save(author);
        return { firstName, lastName, email };
      } catch (error) {
        console.error('Error creating author:', error);
        throw new GraphQLError(
          'Failed to create author',
          {
            extensions: {
              code: 'INTERNAL_SERVER_ERROR',
            },
          }
        );
      }
    },
  },
};
