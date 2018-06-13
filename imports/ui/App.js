import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Accounts } from "meteor/accounts-base";
import { withApollo } from "react-apollo";
import ResolutionForm from "./ResolutionForm";

import GoalForm from "./GoalForm";
import Goal from "./resolutions/Goal";
import UserForm from "./UserForm";

const App = ({ loading, resolutions, client, user }) => {
  if (loading) return null;

  return (
    <div>
      <UserForm user={user} client={client} />
      {user && <ResolutionForm />}
      {user && (
        <ul>
          {resolutions.map(resolution => (
            <li key={resolution._id}>
              <span
                style={{
                  textDecoration: resolution.completed ? "line-through" : "none"
                }}
              >
                {resolution.name}
              </span>
              <ul>
                {resolution.goals.map(goal => (
                  <Goal goal={goal} key={goal._id} />
                ))}
              </ul>
              <GoalForm resolutionId={resolution._id} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
// sarasa
const resolutionsQuery = gql`
  query Resolutions {
    resolutions {
      _id
      name
      completed
      goals {
        _id
        name
        completed
      }
    }
    user {
      _id
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
