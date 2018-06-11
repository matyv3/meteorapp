import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Accounts } from 'meteor/accounts-base';
import { withApollo } from 'react-apollo';
import ResolutionForm from './ResolutionForm';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

const App = ({ loading, resolutions, client }) => {
	if (loading) return null;

	return (
		<div>
			<button
				onClick={() => {
					Meteor.logout();
					client.resetStore();
				}}
			>
				Logout
			</button>
			<RegisterForm client={client} />
			<LoginForm client={client} />
			<ResolutionForm />
			{resolutions.map((resolution) => <li key={resolution._id}>{resolution.name}</li>)}
		</div>
	);
};

const resolutionsQuery = gql`
	query Resolutions {
		test
		resolutions {
			_id
			name
		}
	}
`;

export default graphql(resolutionsQuery, {
	props: ({ data }) => ({ ...data })
})(withApollo(App));

// igual a lo de abajo

/*
export default graphql(resolutionsQuery, {
	props: ({data}) => (
		{
			resolutions: data.resolutions
		}
	)
})(App);
*/
