import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";
import merge from "lodash/merge";

import ResolutionsResolvers from "../../api/resolutions/resolvers";
import ResolutionsSchema from "../../api/resolutions/Resolutions.graphql";
import UsersSchema from "../../api/users/User.graphql";
import UsersResolvers from "../../api/users/resolvers";
import GoalsSchema from "../../api/goals/Goal.graphql";
import GoalsResolvers from "../../api/goals/resolvers";

// modifar este comentario ra que meteor le asdsa asdade bola a los cambios en los archivos .graphql
const typeDefs = [ResolutionsSchema, UsersSchema, GoalsSchema];

const resolvers = merge(ResolutionsResolvers, UsersResolvers, GoalsResolvers);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

createApolloServer({ schema });
