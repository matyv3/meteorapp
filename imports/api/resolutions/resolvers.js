import Resolutions from './resolutions';

export default {
	Query: {
		resolutions(obj, args, { userId }) {
			return Resolutions.find({ userId }).fetch();
		}
	},
	Mutation: {
		createResolution(obj, { name }, { userId }) {
			// { name } == arg
			const resolutionId = Resolutions.insert({
				name,
				userId
			});
			return Resolutions.findOne(resolutionId);
		}
	}
};