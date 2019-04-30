import { gql } from 'apollo-server';

const typeDefs = gql`
    type Query {
        departments: [Department]
        department(id: ID!): Department
    }

    type Department {
        departmentId: Int!
        name: String!
        description: String
    }
`;

export default typeDefs;
