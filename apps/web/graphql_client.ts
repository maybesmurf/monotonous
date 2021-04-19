import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
};


export enum MembershipStatuses {
  Accepted = 'ACCEPTED',
  Banned = 'BANNED',
  Pending = 'PENDING'
}

export type Mutation = {
  __typename: 'Mutation';
  confirmEmail?: Maybe<User>;
  createProject: Project;
  createTeam: Team;
  login?: Maybe<User>;
  logout?: Maybe<SuccessResponse>;
  register?: Maybe<User>;
  requestLogin?: Maybe<SuccessResponse>;
};


export type MutationConfirmEmailArgs = {
  email: Scalars['String'];
  token: Scalars['String'];
};


export type MutationCreateProjectArgs = {
  name: Scalars['String'];
  teamId: Scalars['ID'];
};


export type MutationCreateTeamArgs = {
  name: Scalars['String'];
};


export type MutationLoginArgs = {
  code: Scalars['String'];
  email: Scalars['String'];
};


export type MutationRegisterArgs = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};


export type MutationRequestLoginArgs = {
  email: Scalars['String'];
};

export type PaginationParams = {
  __typename: 'PaginationParams';
  cursor?: Maybe<Scalars['ID']>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};

export type Project = {
  __typename: 'Project';
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['Date'];
};

export type ProjectMembership = {
  __typename: 'ProjectMembership';
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['Date'];
  user?: Maybe<User>;
};

export enum ProjectRoles {
  Admin = 'ADMIN',
  Reviewer = 'REVIEWER',
  Viewer = 'VIEWER'
}

export type Query = {
  __typename: 'Query';
  listTeamMembersips: Array<Maybe<TeamMembership>>;
  listTeams: Array<Maybe<Team>>;
  me?: Maybe<User>;
  team: Team;
  teamMembership: TeamMembership;
};


export type QueryListTeamsArgs = {
  cursor?: Maybe<Scalars['ID']>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryTeamArgs = {
  id: Scalars['ID'];
};


export type QueryTeamMembershipArgs = {
  id: Scalars['String'];
};

export type RegisterInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type SuccessResponse = {
  __typename: 'SuccessResponse';
  success: Scalars['Boolean'];
};

export type Team = {
  __typename: 'Team';
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  memberships?: Maybe<TeamMembership>;
  name: Scalars['String'];
  projects?: Maybe<Project>;
  updatedAt: Scalars['Date'];
};

export type TeamMembership = {
  __typename: 'TeamMembership';
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  role: TeamRoles;
  status: MembershipStatuses;
  team?: Maybe<Team>;
  updatedAt: Scalars['Date'];
  user?: Maybe<User>;
};

export enum TeamRoles {
  Admin = 'ADMIN',
  Billing = 'BILLING',
  Member = 'MEMBER'
}

export type User = {
  __typename: 'User';
  confirmed: Scalars['Boolean'];
  email: Scalars['String'];
  id: Scalars['ID'];
  profile?: Maybe<UserProfile>;
};

export type UserProfile = {
  __typename: 'UserProfile';
  firstName: Scalars['String'];
  fullName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
};

export type ConfirmEmailMutationVariables = Exact<{
  token: Scalars['String'];
  email: Scalars['String'];
}>;


export type ConfirmEmailMutation = (
  { __typename: 'Mutation' }
  & { confirmEmail?: Maybe<(
    { __typename: 'User' }
    & Pick<User, 'id'>
    & { profile?: Maybe<(
      { __typename: 'UserProfile' }
      & Pick<UserProfile, 'firstName' | 'lastName'>
    )> }
  )> }
);

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  code: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename: 'Mutation' }
  & { login?: Maybe<(
    { __typename: 'User' }
    & Pick<User, 'id'>
    & { profile?: Maybe<(
      { __typename: 'UserProfile' }
      & Pick<UserProfile, 'firstName' | 'lastName'>
    )> }
  )> }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename: 'Mutation' }
  & { logout?: Maybe<(
    { __typename: 'SuccessResponse' }
    & Pick<SuccessResponse, 'success'>
  )> }
);

export type RequestLoginMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type RequestLoginMutation = (
  { __typename: 'Mutation' }
  & { requestLogin?: Maybe<(
    { __typename: 'SuccessResponse' }
    & Pick<SuccessResponse, 'success'>
  )> }
);

export type SignupMutationVariables = Exact<{
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
}>;


export type SignupMutation = (
  { __typename: 'Mutation' }
  & { register?: Maybe<(
    { __typename: 'User' }
    & Pick<User, 'id'>
  )> }
);

export type CreateProjectMutationVariables = Exact<{
  teamId: Scalars['ID'];
  name: Scalars['String'];
}>;


export type CreateProjectMutation = (
  { __typename: 'Mutation' }
  & { createProject: (
    { __typename: 'Project' }
    & Pick<Project, 'id' | 'createdAt' | 'updatedAt' | 'name'>
  ) }
);

export type CreateTeamMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type CreateTeamMutation = (
  { __typename: 'Mutation' }
  & { createTeam: (
    { __typename: 'Team' }
    & Pick<Team, 'id' | 'createdAt' | 'updatedAt' | 'name'>
    & { memberships?: Maybe<(
      { __typename: 'TeamMembership' }
      & Pick<TeamMembership, 'id'>
      & { user?: Maybe<(
        { __typename: 'User' }
        & Pick<User, 'id'>
        & { profile?: Maybe<(
          { __typename: 'UserProfile' }
          & Pick<UserProfile, 'id' | 'firstName' | 'lastName'>
        )> }
      )> }
    )> }
  ) }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename: 'Query' }
  & { me?: Maybe<(
    { __typename: 'User' }
    & Pick<User, 'id'>
    & { profile?: Maybe<(
      { __typename: 'UserProfile' }
      & Pick<UserProfile, 'firstName' | 'lastName'>
    )> }
  )> }
);

export type TeamShowQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type TeamShowQuery = (
  { __typename: 'Query' }
  & { team: (
    { __typename: 'Team' }
    & Pick<Team, 'id' | 'createdAt' | 'updatedAt' | 'name'>
    & { memberships?: Maybe<(
      { __typename: 'TeamMembership' }
      & Pick<TeamMembership, 'id' | 'role' | 'status'>
      & { user?: Maybe<(
        { __typename: 'User' }
        & Pick<User, 'id'>
        & { profile?: Maybe<(
          { __typename: 'UserProfile' }
          & Pick<UserProfile, 'id' | 'firstName' | 'lastName'>
        )> }
      )> }
    )> }
  ) }
);

export type TeamIndexQueryVariables = Exact<{ [key: string]: never; }>;


export type TeamIndexQuery = (
  { __typename: 'Query' }
  & { listTeams: Array<Maybe<(
    { __typename: 'Team' }
    & Pick<Team, 'id' | 'createdAt' | 'updatedAt' | 'name'>
  )>> }
);


export const ConfirmEmailDocument = gql`
    mutation ConfirmEmail($token: String!, $email: String!) {
  confirmEmail(token: $token, email: $email) {
    id
    profile {
      firstName
      lastName
    }
  }
}
    `;

export function useConfirmEmailMutation() {
  return Urql.useMutation<ConfirmEmailMutation, ConfirmEmailMutationVariables>(ConfirmEmailDocument);
};
export const LoginDocument = gql`
    mutation Login($email: String!, $code: String!) {
  login(email: $email, code: $code) {
    id
    profile {
      firstName
      lastName
    }
  }
}
    `;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const LogoutDocument = gql`
    mutation Logout {
  logout {
    success
  }
}
    `;

export function useLogoutMutation() {
  return Urql.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument);
};
export const RequestLoginDocument = gql`
    mutation RequestLogin($email: String!) {
  requestLogin(email: $email) {
    success
  }
}
    `;

export function useRequestLoginMutation() {
  return Urql.useMutation<RequestLoginMutation, RequestLoginMutationVariables>(RequestLoginDocument);
};
export const SignupDocument = gql`
    mutation Signup($email: String!, $firstName: String!, $lastName: String!) {
  register(email: $email, firstName: $firstName, lastName: $lastName) {
    id
  }
}
    `;

export function useSignupMutation() {
  return Urql.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument);
};
export const CreateProjectDocument = gql`
    mutation CreateProject($teamId: ID!, $name: String!) {
  createProject(teamId: $teamId, name: $name) {
    id
    createdAt
    updatedAt
    name
  }
}
    `;

export function useCreateProjectMutation() {
  return Urql.useMutation<CreateProjectMutation, CreateProjectMutationVariables>(CreateProjectDocument);
};
export const CreateTeamDocument = gql`
    mutation CreateTeam($name: String!) {
  createTeam(name: $name) {
    id
    createdAt
    updatedAt
    name
    memberships {
      id
      user {
        id
        profile {
          id
          firstName
          lastName
        }
      }
    }
  }
}
    `;

export function useCreateTeamMutation() {
  return Urql.useMutation<CreateTeamMutation, CreateTeamMutationVariables>(CreateTeamDocument);
};
export const MeDocument = gql`
    query Me {
  me {
    id
    profile {
      firstName
      lastName
    }
  }
}
    `;

export function useMeQuery(options: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<MeQuery>({ query: MeDocument, ...options });
};
export const TeamShowDocument = gql`
    query TeamShow($id: ID!) {
  team(id: $id) {
    id
    createdAt
    updatedAt
    name
    memberships {
      id
      role
      status
      user {
        id
        profile {
          id
          firstName
          lastName
        }
      }
    }
  }
}
    `;

export function useTeamShowQuery(options: Omit<Urql.UseQueryArgs<TeamShowQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<TeamShowQuery>({ query: TeamShowDocument, ...options });
};
export const TeamIndexDocument = gql`
    query TeamIndex {
  listTeams {
    id
    createdAt
    updatedAt
    name
  }
}
    `;

export function useTeamIndexQuery(options: Omit<Urql.UseQueryArgs<TeamIndexQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<TeamIndexQuery>({ query: TeamIndexDocument, ...options });
};