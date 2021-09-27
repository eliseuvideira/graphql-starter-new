import { createApollo } from "@ev-graphql-2/create-apollo";
import { gql } from "apollo-server-core";
import { context, Context } from "./context";
import fs from "fs";
import path from "path";

const typeDefs = [];

const typeDefsFolders = fs.readdirSync(path.join(__dirname, "..", "typeDefs"));

for (const folder of typeDefsFolders) {
  const typeDefsFiles = fs.readdirSync(
    path.join(__dirname, "..", "typeDefs", folder)
  );

  for (const file of typeDefsFiles) {
    const module = require(path.join(
      __dirname,
      "..",
      "typeDefs",
      folder,
      file
    ));

    for (const key of Object.keys(module)) {
      typeDefs.push(module[key]);
    }
  }
}

const resolvers = [];

const resolversTypes = fs.readdirSync(path.join(__dirname, "..", "resolvers"));

for (const type of resolversTypes) {
  const resolversFields = fs.readdirSync(
    path.join(__dirname, "..", "resolvers", type)
  );

  for (const file of resolversFields) {
    const field = path.parse(file).name;

    const module = require(path.join(__dirname, "..", "resolvers", type, file));

    for (const key of Object.keys(module)) {
      resolvers.push({ [type]: { [field]: module[key] } });
    }
  }
}

export const apollo = createApollo<Context>({
  typeDefs,
  resolvers,
  context,
});
