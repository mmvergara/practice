import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import db from "./db.js";
import typeDefs from "./schema.js";

// resolvers
const resolvers = {
  Query: {
    games() {
      return db.games;
    },
    reviews() {
      return db.reviews;
    },
    authors() {
      return db.authors;
    },
  },
};

// server setup

const server = new ApolloServer({
  typeDefs: typeDefs,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});
