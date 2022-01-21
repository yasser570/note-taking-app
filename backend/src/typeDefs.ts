import { gql } from "apollo-server-core";

export const typeDefs = gql`
  scalar DateTime

  type Query {
    currentUser: User
    notes: [Note!]!
    note(id: String!): Note
  }
  type Mutation {
    signUp(email: String!, username: String!, password: String!): User!
    login(username: String!, password: String!): User
    addNote(title: String, body: String): Note
  }
  type Note {
    id: String!
    title: String
    body: String
    createdAt: DateTime!
    updatedAt: DateTime!
  }
  type User {
    id: String!
    name: String!
    username: String!
  }
`;
