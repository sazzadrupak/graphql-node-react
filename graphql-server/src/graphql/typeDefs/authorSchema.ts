export const authorDefs = `#graphql
  type Author {
    firstName: String!
    lastName: String!
    email: String!
  }

  type Query {
    getAuthors: [Author!]!
  }

  type Mutation {
    createAuthor(firstName: String!, lastName: String!, email: String!): Author!
  }
`;
