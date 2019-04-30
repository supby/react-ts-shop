"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const typeDefs = apollo_server_1.gql `
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
exports.default = typeDefs;
//# sourceMappingURL=schema.js.map