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
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type AddMemberToProjectInput = {
  projectId: Scalars['String'];
  teamMembershipId: Scalars['String'];
};

export type CreateInviteInput = {
  email: Scalars['String'];
  teamId: Scalars['String'];
};

export type CreateProjectInput = {
  name: Scalars['String'];
  teamId: Scalars['String'];
};


export type Invite = {
  __typename: 'Invite';
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
  invitedBy: User;
  invitedById: Scalars['String'];
  team: Team;
  teamId: Scalars['String'];
};

export enum MemberRoles {
  Admin = 'ADMIN',
  Billing = 'BILLING',
  Member = 'MEMBER'
}

export type Mutation = {
  __typename: 'Mutation';
  acceptInvite: Invite;
  addMemberToProject: ProjectMembership;
  createInvite: Invite;
  createProject: Project;
  createTeam: Team;
  deleteInvite: Invite;
  login: User;
  logout: User;
  register: User;
  removeMemberFromProject: ProjectMembership;
};


export type MutationAcceptInviteArgs = {
  id: Scalars['String'];
};


export type MutationAddMemberToProjectArgs = {
  input: AddMemberToProjectInput;
};


export type MutationCreateInviteArgs = {
  input: CreateInviteInput;
};


export type MutationCreateProjectArgs = {
  input: CreateProjectInput;
};


export type MutationCreateTeamArgs = {
  name: Scalars['String'];
};


export type MutationDeleteInviteArgs = {
  id: Scalars['String'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationRegisterArgs = {
  input: RegisterInput;
};


export type MutationRemoveMemberFromProjectArgs = {
  projectMembershipId: Scalars['String'];
};

export type PaginationInput = {
  cursor?: Maybe<Scalars['String']>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};

export type Project = {
  __typename: 'Project';
  createdAt: Scalars['DateTime'];
  currentMember: ProjectMembership;
  id: Scalars['ID'];
  memberships: Array<ProjectMembership>;
  name: Scalars['String'];
  team: Team;
  teamId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ProjectMembership = {
  __typename: 'ProjectMembership';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  membership: TeamMembership;
  membershipId: Scalars['String'];
  project: Project;
  projectId: Scalars['String'];
  role: MemberRoles;
  updatedAt: Scalars['DateTime'];
};

export type Query = {
  __typename: 'Query';
  invites: Array<Invite>;
  me: User;
  project: Project;
  team: Team;
  teamMembership: TeamMembership;
  teamMemberships: Array<TeamMembership>;
  teams: Array<Team>;
};


export type QueryInvitesArgs = {
  teamId?: Maybe<Scalars['String']>;
};


export type QueryProjectArgs = {
  id: Scalars['String'];
};


export type QueryTeamArgs = {
  id: Scalars['String'];
};


export type QueryTeamMembershipArgs = {
  id: Scalars['String'];
};


export type QueryTeamMembershipsArgs = {
  pagination?: Maybe<PaginationInput>;
  query?: Maybe<Scalars['String']>;
};


export type QueryTeamsArgs = {
  pagination?: Maybe<PaginationInput>;
};

export type RegisterInput = {
  confirmation: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
};

export type Team = {
  __typename: 'Team';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  invites: Array<Invite>;
  memberships: Array<TeamMembership>;
  name: Scalars['String'];
  projects: Array<Project>;
  updatedAt: Scalars['DateTime'];
};

export type TeamMembership = {
  __typename: 'TeamMembership';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  role: MemberRoles;
  team: Team;
  teamId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
};

export type User = {
  __typename: 'User';
  confirmed: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
  profile: UserProfile;
  updatedAt: Scalars['DateTime'];
};

export type UserProfile = {
  __typename: 'UserProfile';
  createdAt: Scalars['DateTime'];
  firstName: Scalars['String'];
  fullName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
};

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename: 'Query' }
  & { me: (
    { __typename: 'User' }
    & Pick<User, 'id'>
    & { profile: (
      { __typename: 'UserProfile' }
      & Pick<UserProfile, 'firstName' | 'lastName'>
    ) }
  ) }
);

export type InvitesQueryVariables = Exact<{ [key: string]: never; }>;


export type InvitesQuery = (
  { __typename: 'Query' }
  & { invites: Array<(
    { __typename: 'Invite' }
    & Pick<Invite, 'id' | 'createdAt'>
    & { invitedBy: (
      { __typename: 'User' }
      & Pick<User, 'id'>
      & { profile: (
        { __typename: 'UserProfile' }
        & Pick<UserProfile, 'fullName'>
      ) }
    ), team: (
      { __typename: 'Team' }
      & Pick<Team, 'id' | 'createdAt' | 'name'>
    ) }
  )> }
);

export type ProjectShowQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type ProjectShowQuery = (
  { __typename: 'Query' }
  & { project: (
    { __typename: 'Project' }
    & Pick<Project, 'id' | 'createdAt' | 'updatedAt' | 'name' | 'teamId'>
    & { currentMember: (
      { __typename: 'ProjectMembership' }
      & Pick<ProjectMembership, 'id' | 'role'>
    ), memberships: Array<(
      { __typename: 'ProjectMembership' }
      & Pick<ProjectMembership, 'id' | 'role'>
      & { membership: (
        { __typename: 'TeamMembership' }
        & Pick<TeamMembership, 'id' | 'role'>
        & { user: (
          { __typename: 'User' }
          & Pick<User, 'id'>
          & { profile: (
            { __typename: 'UserProfile' }
            & Pick<UserProfile, 'id' | 'fullName'>
          ) }
        ) }
      ) }
    )> }
  ) }
);

export type TeamShowQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type TeamShowQuery = (
  { __typename: 'Query' }
  & { team: (
    { __typename: 'Team' }
    & Pick<Team, 'id' | 'createdAt' | 'updatedAt' | 'name'>
    & { projects: Array<(
      { __typename: 'Project' }
      & Pick<Project, 'id' | 'name'>
    )>, memberships: Array<(
      { __typename: 'TeamMembership' }
      & Pick<TeamMembership, 'id' | 'role'>
      & { user: (
        { __typename: 'User' }
        & Pick<User, 'id'>
        & { profile: (
          { __typename: 'UserProfile' }
          & Pick<UserProfile, 'id' | 'fullName'>
        ) }
      ) }
    )> }
  ) }
);

export type TeamInvitesQueryVariables = Exact<{
  teamId?: Maybe<Scalars['String']>;
}>;


export type TeamInvitesQuery = (
  { __typename: 'Query' }
  & { invites: Array<(
    { __typename: 'Invite' }
    & Pick<Invite, 'id' | 'createdAt' | 'email'>
  )> }
);

export type TeamIndexQueryVariables = Exact<{ [key: string]: never; }>;


export type TeamIndexQuery = (
  { __typename: 'Query' }
  & { teams: Array<(
    { __typename: 'Team' }
    & Pick<Team, 'id' | 'createdAt' | 'updatedAt' | 'name'>
  )> }
);

export type AcceptInviteMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type AcceptInviteMutation = (
  { __typename: 'Mutation' }
  & { acceptInvite: (
    { __typename: 'Invite' }
    & Pick<Invite, 'id'>
  ) }
);

export type AddMemberToProjectMutationVariables = Exact<{
  teamMembershipId: Scalars['String'];
  projectId: Scalars['String'];
}>;


export type AddMemberToProjectMutation = (
  { __typename: 'Mutation' }
  & { addMemberToProject: (
    { __typename: 'ProjectMembership' }
    & Pick<ProjectMembership, 'id'>
    & { membership: (
      { __typename: 'TeamMembership' }
      & { user: (
        { __typename: 'User' }
        & Pick<User, 'id'>
        & { profile: (
          { __typename: 'UserProfile' }
          & Pick<UserProfile, 'id' | 'firstName' | 'lastName' | 'fullName'>
        ) }
      ) }
    ) }
  ) }
);

export type CreateInviteMutationVariables = Exact<{
  email: Scalars['String'];
  teamId: Scalars['String'];
}>;


export type CreateInviteMutation = (
  { __typename: 'Mutation' }
  & { createInvite: (
    { __typename: 'Invite' }
    & Pick<Invite, 'id'>
  ) }
);

export type CreateProjectMutationVariables = Exact<{
  teamId: Scalars['String'];
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
    & { memberships: Array<(
      { __typename: 'TeamMembership' }
      & Pick<TeamMembership, 'id' | 'role'>
      & { user: (
        { __typename: 'User' }
        & Pick<User, 'id'>
        & { profile: (
          { __typename: 'UserProfile' }
          & Pick<UserProfile, 'id' | 'fullName'>
        ) }
      ) }
    )> }
  ) }
);

export type DeleteInviteMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteInviteMutation = (
  { __typename: 'Mutation' }
  & { deleteInvite: (
    { __typename: 'Invite' }
    & Pick<Invite, 'id'>
  ) }
);

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename: 'Mutation' }
  & { login: (
    { __typename: 'User' }
    & Pick<User, 'id'>
    & { profile: (
      { __typename: 'UserProfile' }
      & Pick<UserProfile, 'firstName' | 'lastName'>
    ) }
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename: 'Mutation' }
  & { logout: (
    { __typename: 'User' }
    & Pick<User, 'id'>
  ) }
);

export type RemoveUserFromProjectMutationVariables = Exact<{
  projectMembershipId: Scalars['String'];
}>;


export type RemoveUserFromProjectMutation = (
  { __typename: 'Mutation' }
  & { removeMemberFromProject: (
    { __typename: 'ProjectMembership' }
    & Pick<ProjectMembership, 'id'>
    & { project: (
      { __typename: 'Project' }
      & Pick<Project, 'id' | 'name'>
    ), membership: (
      { __typename: 'TeamMembership' }
      & { user: (
        { __typename: 'User' }
        & Pick<User, 'id'>
        & { profile: (
          { __typename: 'UserProfile' }
          & Pick<UserProfile, 'id' | 'firstName' | 'lastName' | 'fullName'>
        ) }
      ) }
    ) }
  ) }
);

export type SignupMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  confirmation: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
}>;


export type SignupMutation = (
  { __typename: 'Mutation' }
  & { register: (
    { __typename: 'User' }
    & Pick<User, 'id'>
    & { profile: (
      { __typename: 'UserProfile' }
      & Pick<UserProfile, 'id' | 'firstName' | 'lastName'>
    ) }
  ) }
);

export type SearchTeamMembersQueryVariables = Exact<{
  query?: Maybe<Scalars['String']>;
  cursor?: Maybe<Scalars['String']>;
  take?: Maybe<Scalars['Int']>;
}>;


export type SearchTeamMembersQuery = (
  { __typename: 'Query' }
  & { teamMemberships: Array<(
    { __typename: 'TeamMembership' }
    & Pick<TeamMembership, 'id' | 'createdAt' | 'role'>
    & { user: (
      { __typename: 'User' }
      & Pick<User, 'id'>
      & { profile: (
        { __typename: 'UserProfile' }
        & Pick<UserProfile, 'id' | 'firstName' | 'lastName' | 'fullName'>
      ) }
    ) }
  )> }
);


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
  invites {
    id
    createdAt
    invitedBy {
      id
      profile {
        fullName
      }
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
    query ProjectShow($id: String!) {
  project(id: $id) {
    id
    createdAt
    updatedAt
    name
    teamId
    currentMember {
      id
      role
    }
    memberships {
      id
      role
      membership {
        id
        role
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
    query TeamShow($id: String!) {
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
    query TeamInvites($teamId: String) {
  invites(teamId: $teamId) {
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
  teams {
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
export const AcceptInviteDocument = gql`
    mutation AcceptInvite($id: String!) {
  acceptInvite(id: $id) {
    id
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
export const AddMemberToProjectDocument = gql`
    mutation addMemberToProject($teamMembershipId: String!, $projectId: String!) {
  addMemberToProject(
    input: {teamMembershipId: $teamMembershipId, projectId: $projectId}
  ) {
    id
    membership {
      user {
        id
        profile {
          id
          firstName
          lastName
          fullName
        }
      }
    }
  }
}
    `;
export type AddMemberToProjectMutationFn = Apollo.MutationFunction<AddMemberToProjectMutation, AddMemberToProjectMutationVariables>;

/**
 * __useAddMemberToProjectMutation__
 *
 * To run a mutation, you first call `useAddMemberToProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddMemberToProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addMemberToProjectMutation, { data, loading, error }] = useAddMemberToProjectMutation({
 *   variables: {
 *      teamMembershipId: // value for 'teamMembershipId'
 *      projectId: // value for 'projectId'
 *   },
 * });
 */
export function useAddMemberToProjectMutation(baseOptions?: Apollo.MutationHookOptions<AddMemberToProjectMutation, AddMemberToProjectMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddMemberToProjectMutation, AddMemberToProjectMutationVariables>(AddMemberToProjectDocument, options);
      }
export type AddMemberToProjectMutationHookResult = ReturnType<typeof useAddMemberToProjectMutation>;
export type AddMemberToProjectMutationResult = Apollo.MutationResult<AddMemberToProjectMutation>;
export type AddMemberToProjectMutationOptions = Apollo.BaseMutationOptions<AddMemberToProjectMutation, AddMemberToProjectMutationVariables>;
export const CreateInviteDocument = gql`
    mutation CreateInvite($email: String!, $teamId: String!) {
  createInvite(input: {email: $email, teamId: $teamId}) {
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
export const CreateProjectDocument = gql`
    mutation CreateProject($teamId: String!, $name: String!) {
  createProject(input: {teamId: $teamId, name: $name}) {
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
export const DeleteInviteDocument = gql`
    mutation DeleteInvite($id: String!) {
  deleteInvite(id: $id) {
    id
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
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
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
 *      password: // value for 'password'
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
    id
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
export const RemoveUserFromProjectDocument = gql`
    mutation RemoveUserFromProject($projectMembershipId: String!) {
  removeMemberFromProject(projectMembershipId: $projectMembershipId) {
    id
    project {
      id
      name
    }
    membership {
      user {
        id
        profile {
          id
          firstName
          lastName
          fullName
        }
      }
    }
  }
}
    `;
export type RemoveUserFromProjectMutationFn = Apollo.MutationFunction<RemoveUserFromProjectMutation, RemoveUserFromProjectMutationVariables>;

/**
 * __useRemoveUserFromProjectMutation__
 *
 * To run a mutation, you first call `useRemoveUserFromProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveUserFromProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeUserFromProjectMutation, { data, loading, error }] = useRemoveUserFromProjectMutation({
 *   variables: {
 *      projectMembershipId: // value for 'projectMembershipId'
 *   },
 * });
 */
export function useRemoveUserFromProjectMutation(baseOptions?: Apollo.MutationHookOptions<RemoveUserFromProjectMutation, RemoveUserFromProjectMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveUserFromProjectMutation, RemoveUserFromProjectMutationVariables>(RemoveUserFromProjectDocument, options);
      }
export type RemoveUserFromProjectMutationHookResult = ReturnType<typeof useRemoveUserFromProjectMutation>;
export type RemoveUserFromProjectMutationResult = Apollo.MutationResult<RemoveUserFromProjectMutation>;
export type RemoveUserFromProjectMutationOptions = Apollo.BaseMutationOptions<RemoveUserFromProjectMutation, RemoveUserFromProjectMutationVariables>;
export const SignupDocument = gql`
    mutation Signup($email: String!, $password: String!, $confirmation: String!, $firstName: String!, $lastName: String!) {
  register(
    input: {email: $email, password: $password, confirmation: $confirmation, firstName: $firstName, lastName: $lastName}
  ) {
    id
    profile {
      id
      firstName
      lastName
    }
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
 *      password: // value for 'password'
 *      confirmation: // value for 'confirmation'
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
export const SearchTeamMembersDocument = gql`
    query SearchTeamMembers($query: String, $cursor: String, $take: Int) {
  teamMemberships(query: $query, pagination: {cursor: $cursor, take: $take}) {
    id
    createdAt
    role
    user {
      id
      profile {
        id
        firstName
        lastName
        fullName
      }
    }
  }
}
    `;

/**
 * __useSearchTeamMembersQuery__
 *
 * To run a query within a React component, call `useSearchTeamMembersQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchTeamMembersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchTeamMembersQuery({
 *   variables: {
 *      query: // value for 'query'
 *      cursor: // value for 'cursor'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useSearchTeamMembersQuery(baseOptions?: Apollo.QueryHookOptions<SearchTeamMembersQuery, SearchTeamMembersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchTeamMembersQuery, SearchTeamMembersQueryVariables>(SearchTeamMembersDocument, options);
      }
export function useSearchTeamMembersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchTeamMembersQuery, SearchTeamMembersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchTeamMembersQuery, SearchTeamMembersQueryVariables>(SearchTeamMembersDocument, options);
        }
export type SearchTeamMembersQueryHookResult = ReturnType<typeof useSearchTeamMembersQuery>;
export type SearchTeamMembersLazyQueryHookResult = ReturnType<typeof useSearchTeamMembersLazyQuery>;
export type SearchTeamMembersQueryResult = Apollo.QueryResult<SearchTeamMembersQuery, SearchTeamMembersQueryVariables>;