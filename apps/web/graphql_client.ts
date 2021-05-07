import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
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


export type Invite = {
  __typename: 'Invite';
  createdAt: Scalars['Date'];
  email: Scalars['String'];
  id: Scalars['ID'];
  invitedBy?: Maybe<User>;
  invitedById?: Maybe<Scalars['ID']>;
  project?: Maybe<Project>;
  projectId?: Maybe<Scalars['ID']>;
  team?: Maybe<Team>;
  teamId?: Maybe<Scalars['ID']>;
};

export enum MembershipStatuses {
  Accepted = 'ACCEPTED',
  Banned = 'BANNED',
  Pending = 'PENDING'
}

export type Mutation = {
  __typename: 'Mutation';
  acceptInvite: SuccessResponse;
  confirmEmail?: Maybe<User>;
  createInvite: Invite;
  createProject: Project;
  createTeam: Team;
  deleteInvite: SuccessResponse;
  login?: Maybe<User>;
  logout?: Maybe<SuccessResponse>;
  register?: Maybe<User>;
  requestLogin?: Maybe<SuccessResponse>;
};


export type MutationAcceptInviteArgs = {
  id: Scalars['ID'];
};


export type MutationConfirmEmailArgs = {
  email: Scalars['String'];
  token: Scalars['String'];
};


export type MutationCreateInviteArgs = {
  email: Scalars['String'];
  projectId?: Maybe<Scalars['ID']>;
  teamId?: Maybe<Scalars['ID']>;
};


export type MutationCreateProjectArgs = {
  name: Scalars['String'];
  teamId: Scalars['ID'];
};


export type MutationCreateTeamArgs = {
  name: Scalars['String'];
};


export type MutationDeleteInviteArgs = {
  id: Scalars['ID'];
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
  memberships?: Maybe<Array<Maybe<ProjectMembership>>>;
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
  listInvites: Array<Maybe<Invite>>;
  listTeamMemberships: Array<Maybe<TeamMembership>>;
  listTeams: Array<Maybe<Team>>;
  me?: Maybe<User>;
  project: Project;
  team: Team;
  teamMembership: TeamMembership;
};


export type QueryListInvitesArgs = {
  email?: Maybe<Scalars['String']>;
  projectId?: Maybe<Scalars['ID']>;
  teamId?: Maybe<Scalars['ID']>;
};


export type QueryListTeamsArgs = {
  cursor?: Maybe<Scalars['ID']>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryProjectArgs = {
  id: Scalars['ID'];
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
  memberships?: Maybe<Array<Maybe<TeamMembership>>>;
  name: Scalars['String'];
  projects?: Maybe<Array<Maybe<Project>>>;
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

export type AcceptInviteMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type AcceptInviteMutation = (
  { __typename: 'Mutation' }
  & { acceptInvite: (
    { __typename: 'SuccessResponse' }
    & Pick<SuccessResponse, 'success'>
  ) }
);

export type CreateInviteMutationVariables = Exact<{
  email: Scalars['String'];
  teamId?: Maybe<Scalars['ID']>;
  projectId?: Maybe<Scalars['ID']>;
}>;


export type CreateInviteMutation = (
  { __typename: 'Mutation' }
  & { createInvite: (
    { __typename: 'Invite' }
    & Pick<Invite, 'id'>
  ) }
);

export type DeleteInviteMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteInviteMutation = (
  { __typename: 'Mutation' }
  & { deleteInvite: (
    { __typename: 'SuccessResponse' }
    & Pick<SuccessResponse, 'success'>
  ) }
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
    & { memberships?: Maybe<Array<Maybe<(
      { __typename: 'TeamMembership' }
      & Pick<TeamMembership, 'id' | 'role' | 'status'>
      & { user?: Maybe<(
        { __typename: 'User' }
        & Pick<User, 'id'>
        & { profile?: Maybe<(
          { __typename: 'UserProfile' }
          & Pick<UserProfile, 'id' | 'fullName'>
        )> }
      )> }
    )>>> }
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

export type InvitesQueryVariables = Exact<{ [key: string]: never; }>;


export type InvitesQuery = (
  { __typename: 'Query' }
  & { listInvites: Array<Maybe<(
    { __typename: 'Invite' }
    & Pick<Invite, 'id' | 'createdAt'>
    & { invitedBy?: Maybe<(
      { __typename: 'User' }
      & Pick<User, 'id'>
      & { profile?: Maybe<(
        { __typename: 'UserProfile' }
        & Pick<UserProfile, 'fullName'>
      )> }
    )>, project?: Maybe<(
      { __typename: 'Project' }
      & Pick<Project, 'id' | 'createdAt' | 'name'>
    )>, team?: Maybe<(
      { __typename: 'Team' }
      & Pick<Team, 'id' | 'createdAt' | 'name'>
    )> }
  )>> }
);

export type ProjectShowQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ProjectShowQuery = (
  { __typename: 'Query' }
  & { project: (
    { __typename: 'Project' }
    & Pick<Project, 'id' | 'createdAt' | 'updatedAt' | 'name'>
    & { memberships?: Maybe<Array<Maybe<(
      { __typename: 'ProjectMembership' }
      & Pick<ProjectMembership, 'id'>
      & { user?: Maybe<(
        { __typename: 'User' }
        & Pick<User, 'id'>
        & { profile?: Maybe<(
          { __typename: 'UserProfile' }
          & Pick<UserProfile, 'id' | 'fullName'>
        )> }
      )> }
    )>>> }
  ) }
);

export type TeamShowQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type TeamShowQuery = (
  { __typename: 'Query' }
  & { team: (
    { __typename: 'Team' }
    & Pick<Team, 'id' | 'createdAt' | 'updatedAt' | 'name'>
    & { projects?: Maybe<Array<Maybe<(
      { __typename: 'Project' }
      & Pick<Project, 'id' | 'name'>
    )>>>, memberships?: Maybe<Array<Maybe<(
      { __typename: 'TeamMembership' }
      & Pick<TeamMembership, 'id' | 'role' | 'status'>
      & { user?: Maybe<(
        { __typename: 'User' }
        & Pick<User, 'id'>
        & { profile?: Maybe<(
          { __typename: 'UserProfile' }
          & Pick<UserProfile, 'id' | 'fullName'>
        )> }
      )> }
    )>>> }
  ) }
);

export type TeamInvitesQueryVariables = Exact<{
  teamId?: Maybe<Scalars['ID']>;
}>;


export type TeamInvitesQuery = (
  { __typename: 'Query' }
  & { listInvites: Array<Maybe<(
    { __typename: 'Invite' }
    & Pick<Invite, 'id' | 'createdAt' | 'email'>
  )>> }
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
export type ConfirmEmailMutationFn = Apollo.MutationFunction<ConfirmEmailMutation, ConfirmEmailMutationVariables>;

/**
 * __useConfirmEmailMutation__
 *
 * To run a mutation, you first call `useConfirmEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfirmEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [confirmEmailMutation, { data, loading, error }] = useConfirmEmailMutation({
 *   variables: {
 *      token: // value for 'token'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useConfirmEmailMutation(baseOptions?: Apollo.MutationHookOptions<ConfirmEmailMutation, ConfirmEmailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ConfirmEmailMutation, ConfirmEmailMutationVariables>(ConfirmEmailDocument, options);
      }
export type ConfirmEmailMutationHookResult = ReturnType<typeof useConfirmEmailMutation>;
export type ConfirmEmailMutationResult = Apollo.MutationResult<ConfirmEmailMutation>;
export type ConfirmEmailMutationOptions = Apollo.BaseMutationOptions<ConfirmEmailMutation, ConfirmEmailMutationVariables>;
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
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      code: // value for 'code'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout {
    success
  }
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RequestLoginDocument = gql`
    mutation RequestLogin($email: String!) {
  requestLogin(email: $email) {
    success
  }
}
    `;
export type RequestLoginMutationFn = Apollo.MutationFunction<RequestLoginMutation, RequestLoginMutationVariables>;

/**
 * __useRequestLoginMutation__
 *
 * To run a mutation, you first call `useRequestLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRequestLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [requestLoginMutation, { data, loading, error }] = useRequestLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useRequestLoginMutation(baseOptions?: Apollo.MutationHookOptions<RequestLoginMutation, RequestLoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RequestLoginMutation, RequestLoginMutationVariables>(RequestLoginDocument, options);
      }
export type RequestLoginMutationHookResult = ReturnType<typeof useRequestLoginMutation>;
export type RequestLoginMutationResult = Apollo.MutationResult<RequestLoginMutation>;
export type RequestLoginMutationOptions = Apollo.BaseMutationOptions<RequestLoginMutation, RequestLoginMutationVariables>;
export const SignupDocument = gql`
    mutation Signup($email: String!, $firstName: String!, $lastName: String!) {
  register(email: $email, firstName: $firstName, lastName: $lastName) {
    id
  }
}
    `;
export type SignupMutationFn = Apollo.MutationFunction<SignupMutation, SignupMutationVariables>;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      email: // value for 'email'
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *   },
 * });
 */
export function useSignupMutation(baseOptions?: Apollo.MutationHookOptions<SignupMutation, SignupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, options);
      }
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = Apollo.MutationResult<SignupMutation>;
export type SignupMutationOptions = Apollo.BaseMutationOptions<SignupMutation, SignupMutationVariables>;
export const AcceptInviteDocument = gql`
    mutation AcceptInvite($id: ID!) {
  acceptInvite(id: $id) {
    success
  }
}
    `;
export type AcceptInviteMutationFn = Apollo.MutationFunction<AcceptInviteMutation, AcceptInviteMutationVariables>;

/**
 * __useAcceptInviteMutation__
 *
 * To run a mutation, you first call `useAcceptInviteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAcceptInviteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [acceptInviteMutation, { data, loading, error }] = useAcceptInviteMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAcceptInviteMutation(baseOptions?: Apollo.MutationHookOptions<AcceptInviteMutation, AcceptInviteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AcceptInviteMutation, AcceptInviteMutationVariables>(AcceptInviteDocument, options);
      }
export type AcceptInviteMutationHookResult = ReturnType<typeof useAcceptInviteMutation>;
export type AcceptInviteMutationResult = Apollo.MutationResult<AcceptInviteMutation>;
export type AcceptInviteMutationOptions = Apollo.BaseMutationOptions<AcceptInviteMutation, AcceptInviteMutationVariables>;
export const CreateInviteDocument = gql`
    mutation CreateInvite($email: String!, $teamId: ID, $projectId: ID) {
  createInvite(email: $email, teamId: $teamId, projectId: $projectId) {
    id
  }
}
    `;
export type CreateInviteMutationFn = Apollo.MutationFunction<CreateInviteMutation, CreateInviteMutationVariables>;

/**
 * __useCreateInviteMutation__
 *
 * To run a mutation, you first call `useCreateInviteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateInviteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createInviteMutation, { data, loading, error }] = useCreateInviteMutation({
 *   variables: {
 *      email: // value for 'email'
 *      teamId: // value for 'teamId'
 *      projectId: // value for 'projectId'
 *   },
 * });
 */
export function useCreateInviteMutation(baseOptions?: Apollo.MutationHookOptions<CreateInviteMutation, CreateInviteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateInviteMutation, CreateInviteMutationVariables>(CreateInviteDocument, options);
      }
export type CreateInviteMutationHookResult = ReturnType<typeof useCreateInviteMutation>;
export type CreateInviteMutationResult = Apollo.MutationResult<CreateInviteMutation>;
export type CreateInviteMutationOptions = Apollo.BaseMutationOptions<CreateInviteMutation, CreateInviteMutationVariables>;
export const DeleteInviteDocument = gql`
    mutation DeleteInvite($id: ID!) {
  deleteInvite(id: $id) {
    success
  }
}
    `;
export type DeleteInviteMutationFn = Apollo.MutationFunction<DeleteInviteMutation, DeleteInviteMutationVariables>;

/**
 * __useDeleteInviteMutation__
 *
 * To run a mutation, you first call `useDeleteInviteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteInviteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteInviteMutation, { data, loading, error }] = useDeleteInviteMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteInviteMutation(baseOptions?: Apollo.MutationHookOptions<DeleteInviteMutation, DeleteInviteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteInviteMutation, DeleteInviteMutationVariables>(DeleteInviteDocument, options);
      }
export type DeleteInviteMutationHookResult = ReturnType<typeof useDeleteInviteMutation>;
export type DeleteInviteMutationResult = Apollo.MutationResult<DeleteInviteMutation>;
export type DeleteInviteMutationOptions = Apollo.BaseMutationOptions<DeleteInviteMutation, DeleteInviteMutationVariables>;
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
export type CreateProjectMutationFn = Apollo.MutationFunction<CreateProjectMutation, CreateProjectMutationVariables>;

/**
 * __useCreateProjectMutation__
 *
 * To run a mutation, you first call `useCreateProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProjectMutation, { data, loading, error }] = useCreateProjectMutation({
 *   variables: {
 *      teamId: // value for 'teamId'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreateProjectMutation(baseOptions?: Apollo.MutationHookOptions<CreateProjectMutation, CreateProjectMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProjectMutation, CreateProjectMutationVariables>(CreateProjectDocument, options);
      }
export type CreateProjectMutationHookResult = ReturnType<typeof useCreateProjectMutation>;
export type CreateProjectMutationResult = Apollo.MutationResult<CreateProjectMutation>;
export type CreateProjectMutationOptions = Apollo.BaseMutationOptions<CreateProjectMutation, CreateProjectMutationVariables>;
export const CreateTeamDocument = gql`
    mutation CreateTeam($name: String!) {
  createTeam(name: $name) {
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
          fullName
        }
      }
    }
  }
}
    `;
export type CreateTeamMutationFn = Apollo.MutationFunction<CreateTeamMutation, CreateTeamMutationVariables>;

/**
 * __useCreateTeamMutation__
 *
 * To run a mutation, you first call `useCreateTeamMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTeamMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTeamMutation, { data, loading, error }] = useCreateTeamMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreateTeamMutation(baseOptions?: Apollo.MutationHookOptions<CreateTeamMutation, CreateTeamMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTeamMutation, CreateTeamMutationVariables>(CreateTeamDocument, options);
      }
export type CreateTeamMutationHookResult = ReturnType<typeof useCreateTeamMutation>;
export type CreateTeamMutationResult = Apollo.MutationResult<CreateTeamMutation>;
export type CreateTeamMutationOptions = Apollo.BaseMutationOptions<CreateTeamMutation, CreateTeamMutationVariables>;
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

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const InvitesDocument = gql`
    query Invites {
  listInvites {
    id
    createdAt
    invitedBy {
      id
      profile {
        fullName
      }
    }
    project {
      id
      createdAt
      name
    }
    team {
      id
      createdAt
      name
    }
  }
}
    `;

/**
 * __useInvitesQuery__
 *
 * To run a query within a React component, call `useInvitesQuery` and pass it any options that fit your needs.
 * When your component renders, `useInvitesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInvitesQuery({
 *   variables: {
 *   },
 * });
 */
export function useInvitesQuery(baseOptions?: Apollo.QueryHookOptions<InvitesQuery, InvitesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InvitesQuery, InvitesQueryVariables>(InvitesDocument, options);
      }
export function useInvitesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InvitesQuery, InvitesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InvitesQuery, InvitesQueryVariables>(InvitesDocument, options);
        }
export type InvitesQueryHookResult = ReturnType<typeof useInvitesQuery>;
export type InvitesLazyQueryHookResult = ReturnType<typeof useInvitesLazyQuery>;
export type InvitesQueryResult = Apollo.QueryResult<InvitesQuery, InvitesQueryVariables>;
export const ProjectShowDocument = gql`
    query ProjectShow($id: ID!) {
  project(id: $id) {
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
          fullName
        }
      }
    }
  }
}
    `;

/**
 * __useProjectShowQuery__
 *
 * To run a query within a React component, call `useProjectShowQuery` and pass it any options that fit your needs.
 * When your component renders, `useProjectShowQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProjectShowQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProjectShowQuery(baseOptions: Apollo.QueryHookOptions<ProjectShowQuery, ProjectShowQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProjectShowQuery, ProjectShowQueryVariables>(ProjectShowDocument, options);
      }
export function useProjectShowLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProjectShowQuery, ProjectShowQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProjectShowQuery, ProjectShowQueryVariables>(ProjectShowDocument, options);
        }
export type ProjectShowQueryHookResult = ReturnType<typeof useProjectShowQuery>;
export type ProjectShowLazyQueryHookResult = ReturnType<typeof useProjectShowLazyQuery>;
export type ProjectShowQueryResult = Apollo.QueryResult<ProjectShowQuery, ProjectShowQueryVariables>;
export const TeamShowDocument = gql`
    query TeamShow($id: ID!) {
  team(id: $id) {
    id
    createdAt
    updatedAt
    name
    projects {
      id
      name
    }
    memberships {
      id
      role
      status
      user {
        id
        profile {
          id
          fullName
        }
      }
    }
  }
}
    `;

/**
 * __useTeamShowQuery__
 *
 * To run a query within a React component, call `useTeamShowQuery` and pass it any options that fit your needs.
 * When your component renders, `useTeamShowQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTeamShowQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useTeamShowQuery(baseOptions: Apollo.QueryHookOptions<TeamShowQuery, TeamShowQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TeamShowQuery, TeamShowQueryVariables>(TeamShowDocument, options);
      }
export function useTeamShowLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TeamShowQuery, TeamShowQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TeamShowQuery, TeamShowQueryVariables>(TeamShowDocument, options);
        }
export type TeamShowQueryHookResult = ReturnType<typeof useTeamShowQuery>;
export type TeamShowLazyQueryHookResult = ReturnType<typeof useTeamShowLazyQuery>;
export type TeamShowQueryResult = Apollo.QueryResult<TeamShowQuery, TeamShowQueryVariables>;
export const TeamInvitesDocument = gql`
    query TeamInvites($teamId: ID) {
  listInvites(teamId: $teamId) {
    id
    createdAt
    email
  }
}
    `;

/**
 * __useTeamInvitesQuery__
 *
 * To run a query within a React component, call `useTeamInvitesQuery` and pass it any options that fit your needs.
 * When your component renders, `useTeamInvitesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTeamInvitesQuery({
 *   variables: {
 *      teamId: // value for 'teamId'
 *   },
 * });
 */
export function useTeamInvitesQuery(baseOptions?: Apollo.QueryHookOptions<TeamInvitesQuery, TeamInvitesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TeamInvitesQuery, TeamInvitesQueryVariables>(TeamInvitesDocument, options);
      }
export function useTeamInvitesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TeamInvitesQuery, TeamInvitesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TeamInvitesQuery, TeamInvitesQueryVariables>(TeamInvitesDocument, options);
        }
export type TeamInvitesQueryHookResult = ReturnType<typeof useTeamInvitesQuery>;
export type TeamInvitesLazyQueryHookResult = ReturnType<typeof useTeamInvitesLazyQuery>;
export type TeamInvitesQueryResult = Apollo.QueryResult<TeamInvitesQuery, TeamInvitesQueryVariables>;
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

/**
 * __useTeamIndexQuery__
 *
 * To run a query within a React component, call `useTeamIndexQuery` and pass it any options that fit your needs.
 * When your component renders, `useTeamIndexQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTeamIndexQuery({
 *   variables: {
 *   },
 * });
 */
export function useTeamIndexQuery(baseOptions?: Apollo.QueryHookOptions<TeamIndexQuery, TeamIndexQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TeamIndexQuery, TeamIndexQueryVariables>(TeamIndexDocument, options);
      }
export function useTeamIndexLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TeamIndexQuery, TeamIndexQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TeamIndexQuery, TeamIndexQueryVariables>(TeamIndexDocument, options);
        }
export type TeamIndexQueryHookResult = ReturnType<typeof useTeamIndexQuery>;
export type TeamIndexLazyQueryHookResult = ReturnType<typeof useTeamIndexLazyQuery>;
export type TeamIndexQueryResult = Apollo.QueryResult<TeamIndexQuery, TeamIndexQueryVariables>;