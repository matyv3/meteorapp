import ResolutionsSchema from '../../api/resolutions/Resolutions.graphql';
import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';
import ResolutionsResolvers from '../../api/resolutions/resolvers';
import merge from 'lodash/merge';

const testSchema = `
	type Query {
		test: String
		resolutions: [Resolution]
	}
`;
// hdp
const resolver = {
	Query: {
		test() {
			return 'test message';
		}
	}
};

const resolvers = merge(resolver, ResolutionsResolvers);

const typeDefs = [ testSchema, ResolutionsSchema ];

const schema = makeExecutableSchema({
	typeDefs,
	resolvers
});

createApolloServer({ schema });
