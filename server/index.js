import { ApolloServer, gql } from 'apollo-server';

const PORT = 4000;

// basic schema
const typeDefs = gql`
    type Query {
        testString: String
    }
`;

const server = new ApolloServer({ typeDefs, mocks: true });

server.listen({ port: PORT }).then(({ url }) => console.log(`Server ready at ${url}`));
