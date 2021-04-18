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
  /** Date custom scalar type */
  DateTime: any;
  /** Decimal custom scalar type */
  Decimal: any;
  /** Json custom scalar type */
  Json: any;
};

export type AggregateEmailConfirmation = {
  __typename: 'AggregateEmailConfirmation';
  count?: Maybe<EmailConfirmationCountAggregateOutputType>;
  max?: Maybe<EmailConfirmationMaxAggregateOutputType>;
  min?: Maybe<EmailConfirmationMinAggregateOutputType>;
};

export type AggregateProject = {
  __typename: 'AggregateProject';
  count?: Maybe<ProjectCountAggregateOutputType>;
  max?: Maybe<ProjectMaxAggregateOutputType>;
  min?: Maybe<ProjectMinAggregateOutputType>;
};

export type AggregateProjectMembersip = {
  __typename: 'AggregateProjectMembersip';
  count?: Maybe<ProjectMembersipCountAggregateOutputType>;
  max?: Maybe<ProjectMembersipMaxAggregateOutputType>;
  min?: Maybe<ProjectMembersipMinAggregateOutputType>;
};

export type AggregateTeam = {
  __typename: 'AggregateTeam';
  count?: Maybe<TeamCountAggregateOutputType>;
  max?: Maybe<TeamMaxAggregateOutputType>;
  min?: Maybe<TeamMinAggregateOutputType>;
};

export type AggregateTeamMembership = {
  __typename: 'AggregateTeamMembership';
  count?: Maybe<TeamMembershipCountAggregateOutputType>;
  max?: Maybe<TeamMembershipMaxAggregateOutputType>;
  min?: Maybe<TeamMembershipMinAggregateOutputType>;
};

export type AggregateUser = {
  __typename: 'AggregateUser';
  count?: Maybe<UserCountAggregateOutputType>;
  max?: Maybe<UserMaxAggregateOutputType>;
  min?: Maybe<UserMinAggregateOutputType>;
};

export type AggregateUserProfile = {
  __typename: 'AggregateUserProfile';
  count?: Maybe<UserProfileCountAggregateOutputType>;
  max?: Maybe<UserProfileMaxAggregateOutputType>;
  min?: Maybe<UserProfileMinAggregateOutputType>;
};

export type BatchPayload = {
  __typename: 'BatchPayload';
  count: Scalars['Int'];
};

export type BoolFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type BoolWithAggregatesFilter = {
  count?: Maybe<NestedIntFilter>;
  equals?: Maybe<Scalars['Boolean']>;
  max?: Maybe<NestedBoolFilter>;
  min?: Maybe<NestedBoolFilter>;
  not?: Maybe<NestedBoolWithAggregatesFilter>;
};


export type DateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

export type DateTimeWithAggregatesFilter = {
  count?: Maybe<NestedIntFilter>;
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  max?: Maybe<NestedDateTimeFilter>;
  min?: Maybe<NestedDateTimeFilter>;
  not?: Maybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};


export type EmailConfirmationCountAggregateOutputType = {
  __typename: 'EmailConfirmationCountAggregateOutputType';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  token: Scalars['Int'];
  userId: Scalars['Int'];
};

export type EmailConfirmationCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  token: Scalars['String'];
  user: UserCreateNestedOneWithoutEmailConfirmationInput;
};

export type EmailConfirmationCreateManyInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  token: Scalars['String'];
  userId: Scalars['String'];
};

export type EmailConfirmationCreateNestedOneWithoutUserInput = {
  connect?: Maybe<EmailConfirmationWhereUniqueInput>;
  connectOrCreate?: Maybe<EmailConfirmationCreateOrConnectWithoutUserInput>;
  create?: Maybe<EmailConfirmationUncheckedCreateWithoutUserInput>;
};

export type EmailConfirmationCreateOrConnectWithoutUserInput = {
  create: EmailConfirmationUncheckedCreateWithoutUserInput;
  where: EmailConfirmationWhereUniqueInput;
};

export type EmailConfirmationCreateWithoutUserInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  token: Scalars['String'];
};

export type EmailConfirmationMaxAggregateOutputType = {
  __typename: 'EmailConfirmationMaxAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  token?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type EmailConfirmationMinAggregateOutputType = {
  __typename: 'EmailConfirmationMinAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  token?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type EmailConfirmationOrderByInput = {
  createdAt?: Maybe<SortOrder>;
  token?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type EmailConfirmationRelationFilter = {
  is?: Maybe<EmailConfirmationWhereInput>;
  isNot?: Maybe<EmailConfirmationWhereInput>;
};

export enum EmailConfirmationScalarFieldEnum {
  CreatedAt = 'createdAt',
  Token = 'token',
  UserId = 'userId'
}

export type EmailConfirmationScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<EmailConfirmationScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<EmailConfirmationScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<EmailConfirmationScalarWhereWithAggregatesInput>>>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  token?: Maybe<StringWithAggregatesFilter>;
  userId?: Maybe<StringWithAggregatesFilter>;
};

export type EmailConfirmationUncheckedCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  token: Scalars['String'];
  userId: Scalars['String'];
};

export type EmailConfirmationUncheckedCreateNestedOneWithoutUserInput = {
  connect?: Maybe<EmailConfirmationWhereUniqueInput>;
  connectOrCreate?: Maybe<EmailConfirmationCreateOrConnectWithoutUserInput>;
  create?: Maybe<EmailConfirmationUncheckedCreateWithoutUserInput>;
};

export type EmailConfirmationUncheckedCreateWithoutUserInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  token: Scalars['String'];
};

export type EmailConfirmationUncheckedUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  token?: Maybe<StringFieldUpdateOperationsInput>;
  userId?: Maybe<StringFieldUpdateOperationsInput>;
};

export type EmailConfirmationUncheckedUpdateManyInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  token?: Maybe<StringFieldUpdateOperationsInput>;
  userId?: Maybe<StringFieldUpdateOperationsInput>;
};

export type EmailConfirmationUncheckedUpdateOneWithoutUserInput = {
  connect?: Maybe<EmailConfirmationWhereUniqueInput>;
  connectOrCreate?: Maybe<EmailConfirmationCreateOrConnectWithoutUserInput>;
  create?: Maybe<EmailConfirmationUncheckedCreateWithoutUserInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<EmailConfirmationUncheckedUpdateWithoutUserInput>;
  upsert?: Maybe<EmailConfirmationUpsertWithoutUserInput>;
};

export type EmailConfirmationUncheckedUpdateWithoutUserInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  token?: Maybe<StringFieldUpdateOperationsInput>;
};

export type EmailConfirmationUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  token?: Maybe<StringFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutEmailConfirmationInput>;
};

export type EmailConfirmationUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  token?: Maybe<StringFieldUpdateOperationsInput>;
};

export type EmailConfirmationUpdateOneWithoutUserInput = {
  connect?: Maybe<EmailConfirmationWhereUniqueInput>;
  connectOrCreate?: Maybe<EmailConfirmationCreateOrConnectWithoutUserInput>;
  create?: Maybe<EmailConfirmationUncheckedCreateWithoutUserInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<EmailConfirmationUncheckedUpdateWithoutUserInput>;
  upsert?: Maybe<EmailConfirmationUpsertWithoutUserInput>;
};

export type EmailConfirmationUpdateWithoutUserInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  token?: Maybe<StringFieldUpdateOperationsInput>;
};

export type EmailConfirmationUpsertWithoutUserInput = {
  create: EmailConfirmationUncheckedCreateWithoutUserInput;
  update: EmailConfirmationUncheckedUpdateWithoutUserInput;
};

export type EmailConfirmationWhereInput = {
  AND?: Maybe<Array<Maybe<EmailConfirmationWhereInput>>>;
  NOT?: Maybe<Array<Maybe<EmailConfirmationWhereInput>>>;
  OR?: Maybe<Array<Maybe<EmailConfirmationWhereInput>>>;
  createdAt?: Maybe<DateTimeFilter>;
  token?: Maybe<StringFilter>;
  user?: Maybe<UserWhereInput>;
  userId?: Maybe<StringFilter>;
};

export type EmailConfirmationWhereUniqueInput = {
  token?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type EnumMembershipStatusesFieldUpdateOperationsInput = {
  set?: Maybe<MembershipStatuses>;
};

export type EnumMembershipStatusesFilter = {
  equals?: Maybe<MembershipStatuses>;
  in?: Maybe<Array<Maybe<MembershipStatuses>>>;
  not?: Maybe<NestedEnumMembershipStatusesFilter>;
  notIn?: Maybe<Array<Maybe<MembershipStatuses>>>;
};

export type EnumMembershipStatusesWithAggregatesFilter = {
  count?: Maybe<NestedIntFilter>;
  equals?: Maybe<MembershipStatuses>;
  in?: Maybe<Array<Maybe<MembershipStatuses>>>;
  max?: Maybe<NestedEnumMembershipStatusesFilter>;
  min?: Maybe<NestedEnumMembershipStatusesFilter>;
  not?: Maybe<NestedEnumMembershipStatusesWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<MembershipStatuses>>>;
};

export type EnumTeamRolesFieldUpdateOperationsInput = {
  set?: Maybe<TeamRoles>;
};

export type EnumTeamRolesFilter = {
  equals?: Maybe<TeamRoles>;
  in?: Maybe<Array<Maybe<TeamRoles>>>;
  not?: Maybe<NestedEnumTeamRolesFilter>;
  notIn?: Maybe<Array<Maybe<TeamRoles>>>;
};

export type EnumTeamRolesWithAggregatesFilter = {
  count?: Maybe<NestedIntFilter>;
  equals?: Maybe<TeamRoles>;
  in?: Maybe<Array<Maybe<TeamRoles>>>;
  max?: Maybe<NestedEnumTeamRolesFilter>;
  min?: Maybe<NestedEnumTeamRolesFilter>;
  not?: Maybe<NestedEnumTeamRolesWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<TeamRoles>>>;
};


export enum MembershipStatuses {
  Accepted = 'ACCEPTED',
  Banned = 'BANNED',
  Pending = 'PENDING'
}

export type Mutation = {
  __typename: 'Mutation';
  confirmEmail?: Maybe<User>;
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

export type NestedBoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  count?: Maybe<NestedIntFilter>;
  equals?: Maybe<Scalars['Boolean']>;
  max?: Maybe<NestedBoolFilter>;
  min?: Maybe<NestedBoolFilter>;
  not?: Maybe<NestedBoolWithAggregatesFilter>;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  count?: Maybe<NestedIntFilter>;
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  max?: Maybe<NestedDateTimeFilter>;
  min?: Maybe<NestedDateTimeFilter>;
  not?: Maybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

export type NestedEnumMembershipStatusesFilter = {
  equals?: Maybe<MembershipStatuses>;
  in?: Maybe<Array<Maybe<MembershipStatuses>>>;
  not?: Maybe<NestedEnumMembershipStatusesFilter>;
  notIn?: Maybe<Array<Maybe<MembershipStatuses>>>;
};

export type NestedEnumMembershipStatusesWithAggregatesFilter = {
  count?: Maybe<NestedIntFilter>;
  equals?: Maybe<MembershipStatuses>;
  in?: Maybe<Array<Maybe<MembershipStatuses>>>;
  max?: Maybe<NestedEnumMembershipStatusesFilter>;
  min?: Maybe<NestedEnumMembershipStatusesFilter>;
  not?: Maybe<NestedEnumMembershipStatusesWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<MembershipStatuses>>>;
};

export type NestedEnumTeamRolesFilter = {
  equals?: Maybe<TeamRoles>;
  in?: Maybe<Array<Maybe<TeamRoles>>>;
  not?: Maybe<NestedEnumTeamRolesFilter>;
  notIn?: Maybe<Array<Maybe<TeamRoles>>>;
};

export type NestedEnumTeamRolesWithAggregatesFilter = {
  count?: Maybe<NestedIntFilter>;
  equals?: Maybe<TeamRoles>;
  in?: Maybe<Array<Maybe<TeamRoles>>>;
  max?: Maybe<NestedEnumTeamRolesFilter>;
  min?: Maybe<NestedEnumTeamRolesFilter>;
  not?: Maybe<NestedEnumTeamRolesWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<TeamRoles>>>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type NestedStringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  contains?: Maybe<Scalars['String']>;
  count?: Maybe<NestedIntFilter>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  max?: Maybe<NestedStringFilter>;
  min?: Maybe<NestedStringFilter>;
  not?: Maybe<NestedStringWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type Project = {
  __typename: 'Project';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ProjectCountAggregateOutputType = {
  __typename: 'ProjectCountAggregateOutputType';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  teamId: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type ProjectCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  memberships?: Maybe<ProjectMembersipCreateNestedManyWithoutProjectInput>;
  name: Scalars['String'];
  team: TeamCreateNestedOneWithoutProjectsInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProjectCreateManyInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  teamId: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProjectCreateManyTeamInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProjectCreateManyTeamInputEnvelope = {
  data: ProjectCreateManyTeamInput;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ProjectCreateNestedManyWithoutTeamInput = {
  connect?: Maybe<Array<Maybe<ProjectWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<ProjectCreateOrConnectWithoutTeamInput>>>;
  create?: Maybe<Array<Maybe<ProjectCreateWithoutTeamInput>>>;
  createMany?: Maybe<ProjectCreateManyTeamInputEnvelope>;
};

export type ProjectCreateNestedOneWithoutMembershipsInput = {
  connect?: Maybe<ProjectWhereUniqueInput>;
  connectOrCreate?: Maybe<ProjectCreateOrConnectWithoutMembershipsInput>;
  create?: Maybe<ProjectUncheckedCreateWithoutMembershipsInput>;
};

export type ProjectCreateOrConnectWithoutMembershipsInput = {
  create: ProjectUncheckedCreateWithoutMembershipsInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectCreateOrConnectWithoutTeamInput = {
  create: ProjectUncheckedCreateWithoutTeamInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectCreateWithoutMembershipsInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  team: TeamCreateNestedOneWithoutProjectsInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProjectCreateWithoutTeamInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  memberships?: Maybe<ProjectMembersipCreateNestedManyWithoutProjectInput>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProjectListRelationFilter = {
  every?: Maybe<ProjectWhereInput>;
  none?: Maybe<ProjectWhereInput>;
  some?: Maybe<ProjectWhereInput>;
};

export type ProjectMaxAggregateOutputType = {
  __typename: 'ProjectMaxAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  teamId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProjectMembersipCountAggregateOutputType = {
  __typename: 'ProjectMembersipCountAggregateOutputType';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  projectId: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
};

export type ProjectMembersipCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  project: ProjectCreateNestedOneWithoutMembershipsInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutProjectMembersipInput;
};

export type ProjectMembersipCreateManyInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  projectId: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type ProjectMembersipCreateManyProjectInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type ProjectMembersipCreateManyProjectInputEnvelope = {
  data: ProjectMembersipCreateManyProjectInput;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ProjectMembersipCreateManyUserInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  projectId: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProjectMembersipCreateManyUserInputEnvelope = {
  data: ProjectMembersipCreateManyUserInput;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ProjectMembersipCreateNestedManyWithoutProjectInput = {
  connect?: Maybe<Array<Maybe<ProjectMembersipWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<ProjectMembersipCreateOrConnectWithoutProjectInput>>>;
  create?: Maybe<Array<Maybe<ProjectMembersipCreateWithoutProjectInput>>>;
  createMany?: Maybe<ProjectMembersipCreateManyProjectInputEnvelope>;
};

export type ProjectMembersipCreateNestedManyWithoutUserInput = {
  connect?: Maybe<Array<Maybe<ProjectMembersipWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<ProjectMembersipCreateOrConnectWithoutUserInput>>>;
  create?: Maybe<Array<Maybe<ProjectMembersipCreateWithoutUserInput>>>;
  createMany?: Maybe<ProjectMembersipCreateManyUserInputEnvelope>;
};

export type ProjectMembersipCreateOrConnectWithoutProjectInput = {
  create: ProjectMembersipUncheckedCreateWithoutProjectInput;
  where: ProjectMembersipWhereUniqueInput;
};

export type ProjectMembersipCreateOrConnectWithoutUserInput = {
  create: ProjectMembersipUncheckedCreateWithoutUserInput;
  where: ProjectMembersipWhereUniqueInput;
};

export type ProjectMembersipCreateWithoutProjectInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutProjectMembersipInput;
};

export type ProjectMembersipCreateWithoutUserInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  project: ProjectCreateNestedOneWithoutMembershipsInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProjectMembersipListRelationFilter = {
  every?: Maybe<ProjectMembersipWhereInput>;
  none?: Maybe<ProjectMembersipWhereInput>;
  some?: Maybe<ProjectMembersipWhereInput>;
};

export type ProjectMembersipMaxAggregateOutputType = {
  __typename: 'ProjectMembersipMaxAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  projectId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type ProjectMembersipMinAggregateOutputType = {
  __typename: 'ProjectMembersipMinAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  projectId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type ProjectMembersipOrderByInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  projectId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export enum ProjectMembersipScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  ProjectId = 'projectId',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type ProjectMembersipScalarWhereInput = {
  AND?: Maybe<Array<Maybe<ProjectMembersipScalarWhereInput>>>;
  NOT?: Maybe<Array<Maybe<ProjectMembersipScalarWhereInput>>>;
  OR?: Maybe<Array<Maybe<ProjectMembersipScalarWhereInput>>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  projectId?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  userId?: Maybe<StringFilter>;
};

export type ProjectMembersipScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<ProjectMembersipScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<ProjectMembersipScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<ProjectMembersipScalarWhereWithAggregatesInput>>>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  id?: Maybe<StringWithAggregatesFilter>;
  projectId?: Maybe<StringWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
  userId?: Maybe<StringWithAggregatesFilter>;
};

export type ProjectMembersipUncheckedCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  projectId: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type ProjectMembersipUncheckedCreateNestedManyWithoutProjectInput = {
  connect?: Maybe<Array<Maybe<ProjectMembersipWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<ProjectMembersipCreateOrConnectWithoutProjectInput>>>;
  create?: Maybe<Array<Maybe<ProjectMembersipCreateWithoutProjectInput>>>;
  createMany?: Maybe<ProjectMembersipCreateManyProjectInputEnvelope>;
};

export type ProjectMembersipUncheckedCreateNestedManyWithoutUserInput = {
  connect?: Maybe<Array<Maybe<ProjectMembersipWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<ProjectMembersipCreateOrConnectWithoutUserInput>>>;
  create?: Maybe<Array<Maybe<ProjectMembersipCreateWithoutUserInput>>>;
  createMany?: Maybe<ProjectMembersipCreateManyUserInputEnvelope>;
};

export type ProjectMembersipUncheckedCreateWithoutProjectInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type ProjectMembersipUncheckedCreateWithoutUserInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  projectId: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProjectMembersipUncheckedUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  projectId?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  userId?: Maybe<StringFieldUpdateOperationsInput>;
};

export type ProjectMembersipUncheckedUpdateManyInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  projectId?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  userId?: Maybe<StringFieldUpdateOperationsInput>;
};

export type ProjectMembersipUncheckedUpdateManyWithoutMembershipsInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  userId?: Maybe<StringFieldUpdateOperationsInput>;
};

export type ProjectMembersipUncheckedUpdateManyWithoutProjectInput = {
  connect?: Maybe<Array<Maybe<ProjectMembersipWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<ProjectMembersipCreateOrConnectWithoutProjectInput>>>;
  create?: Maybe<Array<Maybe<ProjectMembersipCreateWithoutProjectInput>>>;
  createMany?: Maybe<ProjectMembersipCreateManyProjectInputEnvelope>;
  delete?: Maybe<Array<Maybe<ProjectMembersipWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<ProjectMembersipScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<ProjectMembersipWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<ProjectMembersipWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<ProjectMembersipUpdateWithWhereUniqueWithoutProjectInput>>>;
  updateMany?: Maybe<Array<Maybe<ProjectMembersipUpdateManyWithWhereWithoutProjectInput>>>;
  upsert?: Maybe<Array<Maybe<ProjectMembersipUpsertWithWhereUniqueWithoutProjectInput>>>;
};

export type ProjectMembersipUncheckedUpdateManyWithoutProjectMembersipInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  projectId?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProjectMembersipUncheckedUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<Maybe<ProjectMembersipWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<ProjectMembersipCreateOrConnectWithoutUserInput>>>;
  create?: Maybe<Array<Maybe<ProjectMembersipCreateWithoutUserInput>>>;
  createMany?: Maybe<ProjectMembersipCreateManyUserInputEnvelope>;
  delete?: Maybe<Array<Maybe<ProjectMembersipWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<ProjectMembersipScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<ProjectMembersipWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<ProjectMembersipWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<ProjectMembersipUpdateWithWhereUniqueWithoutUserInput>>>;
  updateMany?: Maybe<Array<Maybe<ProjectMembersipUpdateManyWithWhereWithoutUserInput>>>;
  upsert?: Maybe<Array<Maybe<ProjectMembersipUpsertWithWhereUniqueWithoutUserInput>>>;
};

export type ProjectMembersipUncheckedUpdateWithoutProjectInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  userId?: Maybe<StringFieldUpdateOperationsInput>;
};

export type ProjectMembersipUncheckedUpdateWithoutUserInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  projectId?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProjectMembersipUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  project?: Maybe<ProjectUpdateOneRequiredWithoutMembershipsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutProjectMembersipInput>;
};

export type ProjectMembersipUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProjectMembersipUpdateManyWithWhereWithoutProjectInput = {
  data: ProjectMembersipUncheckedUpdateManyWithoutMembershipsInput;
  where: ProjectMembersipScalarWhereInput;
};

export type ProjectMembersipUpdateManyWithWhereWithoutUserInput = {
  data: ProjectMembersipUncheckedUpdateManyWithoutProjectMembersipInput;
  where: ProjectMembersipScalarWhereInput;
};

export type ProjectMembersipUpdateManyWithoutProjectInput = {
  connect?: Maybe<Array<Maybe<ProjectMembersipWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<ProjectMembersipCreateOrConnectWithoutProjectInput>>>;
  create?: Maybe<Array<Maybe<ProjectMembersipCreateWithoutProjectInput>>>;
  createMany?: Maybe<ProjectMembersipCreateManyProjectInputEnvelope>;
  delete?: Maybe<Array<Maybe<ProjectMembersipWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<ProjectMembersipScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<ProjectMembersipWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<ProjectMembersipWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<ProjectMembersipUpdateWithWhereUniqueWithoutProjectInput>>>;
  updateMany?: Maybe<Array<Maybe<ProjectMembersipUpdateManyWithWhereWithoutProjectInput>>>;
  upsert?: Maybe<Array<Maybe<ProjectMembersipUpsertWithWhereUniqueWithoutProjectInput>>>;
};

export type ProjectMembersipUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<Maybe<ProjectMembersipWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<ProjectMembersipCreateOrConnectWithoutUserInput>>>;
  create?: Maybe<Array<Maybe<ProjectMembersipCreateWithoutUserInput>>>;
  createMany?: Maybe<ProjectMembersipCreateManyUserInputEnvelope>;
  delete?: Maybe<Array<Maybe<ProjectMembersipWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<ProjectMembersipScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<ProjectMembersipWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<ProjectMembersipWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<ProjectMembersipUpdateWithWhereUniqueWithoutUserInput>>>;
  updateMany?: Maybe<Array<Maybe<ProjectMembersipUpdateManyWithWhereWithoutUserInput>>>;
  upsert?: Maybe<Array<Maybe<ProjectMembersipUpsertWithWhereUniqueWithoutUserInput>>>;
};

export type ProjectMembersipUpdateWithWhereUniqueWithoutProjectInput = {
  data: ProjectMembersipUncheckedUpdateWithoutProjectInput;
  where: ProjectMembersipWhereUniqueInput;
};

export type ProjectMembersipUpdateWithWhereUniqueWithoutUserInput = {
  data: ProjectMembersipUncheckedUpdateWithoutUserInput;
  where: ProjectMembersipWhereUniqueInput;
};

export type ProjectMembersipUpdateWithoutProjectInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutProjectMembersipInput>;
};

export type ProjectMembersipUpdateWithoutUserInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  project?: Maybe<ProjectUpdateOneRequiredWithoutMembershipsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProjectMembersipUpsertWithWhereUniqueWithoutProjectInput = {
  create: ProjectMembersipUncheckedCreateWithoutProjectInput;
  update: ProjectMembersipUncheckedUpdateWithoutProjectInput;
  where: ProjectMembersipWhereUniqueInput;
};

export type ProjectMembersipUpsertWithWhereUniqueWithoutUserInput = {
  create: ProjectMembersipUncheckedCreateWithoutUserInput;
  update: ProjectMembersipUncheckedUpdateWithoutUserInput;
  where: ProjectMembersipWhereUniqueInput;
};

export type ProjectMembersipWhereInput = {
  AND?: Maybe<Array<Maybe<ProjectMembersipWhereInput>>>;
  NOT?: Maybe<Array<Maybe<ProjectMembersipWhereInput>>>;
  OR?: Maybe<Array<Maybe<ProjectMembersipWhereInput>>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  project?: Maybe<ProjectWhereInput>;
  projectId?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  user?: Maybe<UserWhereInput>;
  userId?: Maybe<StringFilter>;
};

export type ProjectMembersipWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type ProjectMinAggregateOutputType = {
  __typename: 'ProjectMinAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  teamId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProjectOrderByInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  teamId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type ProjectRelationFilter = {
  is?: Maybe<ProjectWhereInput>;
  isNot?: Maybe<ProjectWhereInput>;
};

export enum ProjectScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  TeamId = 'teamId',
  UpdatedAt = 'updatedAt'
}

export type ProjectScalarWhereInput = {
  AND?: Maybe<Array<Maybe<ProjectScalarWhereInput>>>;
  NOT?: Maybe<Array<Maybe<ProjectScalarWhereInput>>>;
  OR?: Maybe<Array<Maybe<ProjectScalarWhereInput>>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  teamId?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type ProjectScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<ProjectScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<ProjectScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<ProjectScalarWhereWithAggregatesInput>>>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  id?: Maybe<StringWithAggregatesFilter>;
  name?: Maybe<StringWithAggregatesFilter>;
  teamId?: Maybe<StringWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
};

export type ProjectUncheckedCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  memberships?: Maybe<ProjectMembersipUncheckedCreateNestedManyWithoutProjectInput>;
  name: Scalars['String'];
  teamId: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProjectUncheckedCreateNestedManyWithoutTeamInput = {
  connect?: Maybe<Array<Maybe<ProjectWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<ProjectCreateOrConnectWithoutTeamInput>>>;
  create?: Maybe<Array<Maybe<ProjectCreateWithoutTeamInput>>>;
  createMany?: Maybe<ProjectCreateManyTeamInputEnvelope>;
};

export type ProjectUncheckedCreateWithoutMembershipsInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  teamId: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProjectUncheckedCreateWithoutTeamInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  memberships?: Maybe<ProjectMembersipUncheckedCreateNestedManyWithoutProjectInput>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProjectUncheckedUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  memberships?: Maybe<ProjectMembersipUncheckedUpdateManyWithoutProjectInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  teamId?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProjectUncheckedUpdateManyInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  teamId?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProjectUncheckedUpdateManyWithoutProjectsInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProjectUncheckedUpdateManyWithoutTeamInput = {
  connect?: Maybe<Array<Maybe<ProjectWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<ProjectCreateOrConnectWithoutTeamInput>>>;
  create?: Maybe<Array<Maybe<ProjectCreateWithoutTeamInput>>>;
  createMany?: Maybe<ProjectCreateManyTeamInputEnvelope>;
  delete?: Maybe<Array<Maybe<ProjectWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<ProjectScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<ProjectWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<ProjectWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<ProjectUpdateWithWhereUniqueWithoutTeamInput>>>;
  updateMany?: Maybe<Array<Maybe<ProjectUpdateManyWithWhereWithoutTeamInput>>>;
  upsert?: Maybe<Array<Maybe<ProjectUpsertWithWhereUniqueWithoutTeamInput>>>;
};

export type ProjectUncheckedUpdateWithoutMembershipsInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  teamId?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProjectUncheckedUpdateWithoutTeamInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  memberships?: Maybe<ProjectMembersipUncheckedUpdateManyWithoutProjectInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProjectUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  memberships?: Maybe<ProjectMembersipUpdateManyWithoutProjectInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutProjectsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProjectUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProjectUpdateManyWithWhereWithoutTeamInput = {
  data: ProjectUncheckedUpdateManyWithoutProjectsInput;
  where: ProjectScalarWhereInput;
};

export type ProjectUpdateManyWithoutTeamInput = {
  connect?: Maybe<Array<Maybe<ProjectWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<ProjectCreateOrConnectWithoutTeamInput>>>;
  create?: Maybe<Array<Maybe<ProjectCreateWithoutTeamInput>>>;
  createMany?: Maybe<ProjectCreateManyTeamInputEnvelope>;
  delete?: Maybe<Array<Maybe<ProjectWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<ProjectScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<ProjectWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<ProjectWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<ProjectUpdateWithWhereUniqueWithoutTeamInput>>>;
  updateMany?: Maybe<Array<Maybe<ProjectUpdateManyWithWhereWithoutTeamInput>>>;
  upsert?: Maybe<Array<Maybe<ProjectUpsertWithWhereUniqueWithoutTeamInput>>>;
};

export type ProjectUpdateOneRequiredWithoutMembershipsInput = {
  connect?: Maybe<ProjectWhereUniqueInput>;
  connectOrCreate?: Maybe<ProjectCreateOrConnectWithoutMembershipsInput>;
  create?: Maybe<ProjectUncheckedCreateWithoutMembershipsInput>;
  update?: Maybe<ProjectUncheckedUpdateWithoutMembershipsInput>;
  upsert?: Maybe<ProjectUpsertWithoutMembershipsInput>;
};

export type ProjectUpdateWithWhereUniqueWithoutTeamInput = {
  data: ProjectUncheckedUpdateWithoutTeamInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectUpdateWithoutMembershipsInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutProjectsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProjectUpdateWithoutTeamInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  memberships?: Maybe<ProjectMembersipUpdateManyWithoutProjectInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProjectUpsertWithWhereUniqueWithoutTeamInput = {
  create: ProjectUncheckedCreateWithoutTeamInput;
  update: ProjectUncheckedUpdateWithoutTeamInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectUpsertWithoutMembershipsInput = {
  create: ProjectUncheckedCreateWithoutMembershipsInput;
  update: ProjectUncheckedUpdateWithoutMembershipsInput;
};

export type ProjectWhereInput = {
  AND?: Maybe<Array<Maybe<ProjectWhereInput>>>;
  NOT?: Maybe<Array<Maybe<ProjectWhereInput>>>;
  OR?: Maybe<Array<Maybe<ProjectWhereInput>>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  memberships?: Maybe<ProjectMembersipListRelationFilter>;
  name?: Maybe<StringFilter>;
  team?: Maybe<TeamWhereInput>;
  teamId?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type ProjectWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename: 'Query';
  listTeamMembersips: Array<Maybe<TeamMembership>>;
  listTeams: Array<Maybe<Team>>;
  me?: Maybe<User>;
  teamMembership: TeamMembership;
};


export type QueryTeamMembershipArgs = {
  id: Scalars['String'];
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type RegisterInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  contains?: Maybe<Scalars['String']>;
  count?: Maybe<NestedIntFilter>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  max?: Maybe<NestedStringFilter>;
  min?: Maybe<NestedStringFilter>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type SuccessResponse = {
  __typename: 'SuccessResponse';
  success: Scalars['Boolean'];
};

export type Team = {
  __typename: 'Team';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  memberships?: Maybe<TeamMembership>;
  name: Scalars['String'];
  projects?: Maybe<Project>;
  updatedAt: Scalars['DateTime'];
};

export type TeamCountAggregateOutputType = {
  __typename: 'TeamCountAggregateOutputType';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type TeamCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  memberships?: Maybe<TeamMembershipCreateNestedManyWithoutTeamInput>;
  name: Scalars['String'];
  projects?: Maybe<ProjectCreateNestedManyWithoutTeamInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TeamCreateManyInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TeamCreateNestedOneWithoutMembershipsInput = {
  connect?: Maybe<TeamWhereUniqueInput>;
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutMembershipsInput>;
  create?: Maybe<TeamUncheckedCreateWithoutMembershipsInput>;
};

export type TeamCreateNestedOneWithoutProjectsInput = {
  connect?: Maybe<TeamWhereUniqueInput>;
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutProjectsInput>;
  create?: Maybe<TeamUncheckedCreateWithoutProjectsInput>;
};

export type TeamCreateOrConnectWithoutMembershipsInput = {
  create: TeamUncheckedCreateWithoutMembershipsInput;
  where: TeamWhereUniqueInput;
};

export type TeamCreateOrConnectWithoutProjectsInput = {
  create: TeamUncheckedCreateWithoutProjectsInput;
  where: TeamWhereUniqueInput;
};

export type TeamCreateWithoutMembershipsInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  projects?: Maybe<ProjectCreateNestedManyWithoutTeamInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TeamCreateWithoutProjectsInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  memberships?: Maybe<TeamMembershipCreateNestedManyWithoutTeamInput>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TeamMaxAggregateOutputType = {
  __typename: 'TeamMaxAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TeamMembership = {
  __typename: 'TeamMembership';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  role: TeamRoles;
  status: MembershipStatuses;
  team?: Maybe<Team>;
  updatedAt: Scalars['DateTime'];
  user?: Maybe<User>;
};

export type TeamMembershipCountAggregateOutputType = {
  __typename: 'TeamMembershipCountAggregateOutputType';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  role: Scalars['Int'];
  status: Scalars['Int'];
  teamId: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
};

export type TeamMembershipCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  role?: Maybe<TeamRoles>;
  status?: Maybe<MembershipStatuses>;
  team: TeamCreateNestedOneWithoutMembershipsInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutTeamMembershipsInput;
};

export type TeamMembershipCreateManyInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  role?: Maybe<TeamRoles>;
  status?: Maybe<MembershipStatuses>;
  teamId: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type TeamMembershipCreateManyTeamInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  role?: Maybe<TeamRoles>;
  status?: Maybe<MembershipStatuses>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type TeamMembershipCreateManyTeamInputEnvelope = {
  data: TeamMembershipCreateManyTeamInput;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type TeamMembershipCreateManyUserInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  role?: Maybe<TeamRoles>;
  status?: Maybe<MembershipStatuses>;
  teamId: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TeamMembershipCreateManyUserInputEnvelope = {
  data: TeamMembershipCreateManyUserInput;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type TeamMembershipCreateNestedManyWithoutTeamInput = {
  connect?: Maybe<Array<Maybe<TeamMembershipWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<TeamMembershipCreateOrConnectWithoutTeamInput>>>;
  create?: Maybe<Array<Maybe<TeamMembershipCreateWithoutTeamInput>>>;
  createMany?: Maybe<TeamMembershipCreateManyTeamInputEnvelope>;
};

export type TeamMembershipCreateNestedManyWithoutUserInput = {
  connect?: Maybe<Array<Maybe<TeamMembershipWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<TeamMembershipCreateOrConnectWithoutUserInput>>>;
  create?: Maybe<Array<Maybe<TeamMembershipCreateWithoutUserInput>>>;
  createMany?: Maybe<TeamMembershipCreateManyUserInputEnvelope>;
};

export type TeamMembershipCreateOrConnectWithoutTeamInput = {
  create: TeamMembershipUncheckedCreateWithoutTeamInput;
  where: TeamMembershipWhereUniqueInput;
};

export type TeamMembershipCreateOrConnectWithoutUserInput = {
  create: TeamMembershipUncheckedCreateWithoutUserInput;
  where: TeamMembershipWhereUniqueInput;
};

export type TeamMembershipCreateWithoutTeamInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  role?: Maybe<TeamRoles>;
  status?: Maybe<MembershipStatuses>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutTeamMembershipsInput;
};

export type TeamMembershipCreateWithoutUserInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  role?: Maybe<TeamRoles>;
  status?: Maybe<MembershipStatuses>;
  team: TeamCreateNestedOneWithoutMembershipsInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TeamMembershipListRelationFilter = {
  every?: Maybe<TeamMembershipWhereInput>;
  none?: Maybe<TeamMembershipWhereInput>;
  some?: Maybe<TeamMembershipWhereInput>;
};

export type TeamMembershipMaxAggregateOutputType = {
  __typename: 'TeamMembershipMaxAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  role?: Maybe<TeamRoles>;
  status?: Maybe<MembershipStatuses>;
  teamId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type TeamMembershipMinAggregateOutputType = {
  __typename: 'TeamMembershipMinAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  role?: Maybe<TeamRoles>;
  status?: Maybe<MembershipStatuses>;
  teamId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type TeamMembershipOrderByInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  role?: Maybe<SortOrder>;
  status?: Maybe<SortOrder>;
  teamId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export enum TeamMembershipScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Role = 'role',
  Status = 'status',
  TeamId = 'teamId',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type TeamMembershipScalarWhereInput = {
  AND?: Maybe<Array<Maybe<TeamMembershipScalarWhereInput>>>;
  NOT?: Maybe<Array<Maybe<TeamMembershipScalarWhereInput>>>;
  OR?: Maybe<Array<Maybe<TeamMembershipScalarWhereInput>>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  role?: Maybe<EnumTeamRolesFilter>;
  status?: Maybe<EnumMembershipStatusesFilter>;
  teamId?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  userId?: Maybe<StringFilter>;
};

export type TeamMembershipScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<TeamMembershipScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<TeamMembershipScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<TeamMembershipScalarWhereWithAggregatesInput>>>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  id?: Maybe<StringWithAggregatesFilter>;
  role?: Maybe<EnumTeamRolesWithAggregatesFilter>;
  status?: Maybe<EnumMembershipStatusesWithAggregatesFilter>;
  teamId?: Maybe<StringWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
  userId?: Maybe<StringWithAggregatesFilter>;
};

export type TeamMembershipUncheckedCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  role?: Maybe<TeamRoles>;
  status?: Maybe<MembershipStatuses>;
  teamId: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type TeamMembershipUncheckedCreateNestedManyWithoutTeamInput = {
  connect?: Maybe<Array<Maybe<TeamMembershipWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<TeamMembershipCreateOrConnectWithoutTeamInput>>>;
  create?: Maybe<Array<Maybe<TeamMembershipCreateWithoutTeamInput>>>;
  createMany?: Maybe<TeamMembershipCreateManyTeamInputEnvelope>;
};

export type TeamMembershipUncheckedCreateNestedManyWithoutUserInput = {
  connect?: Maybe<Array<Maybe<TeamMembershipWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<TeamMembershipCreateOrConnectWithoutUserInput>>>;
  create?: Maybe<Array<Maybe<TeamMembershipCreateWithoutUserInput>>>;
  createMany?: Maybe<TeamMembershipCreateManyUserInputEnvelope>;
};

export type TeamMembershipUncheckedCreateWithoutTeamInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  role?: Maybe<TeamRoles>;
  status?: Maybe<MembershipStatuses>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type TeamMembershipUncheckedCreateWithoutUserInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  role?: Maybe<TeamRoles>;
  status?: Maybe<MembershipStatuses>;
  teamId: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TeamMembershipUncheckedUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  role?: Maybe<EnumTeamRolesFieldUpdateOperationsInput>;
  status?: Maybe<EnumMembershipStatusesFieldUpdateOperationsInput>;
  teamId?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  userId?: Maybe<StringFieldUpdateOperationsInput>;
};

export type TeamMembershipUncheckedUpdateManyInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  role?: Maybe<EnumTeamRolesFieldUpdateOperationsInput>;
  status?: Maybe<EnumMembershipStatusesFieldUpdateOperationsInput>;
  teamId?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  userId?: Maybe<StringFieldUpdateOperationsInput>;
};

export type TeamMembershipUncheckedUpdateManyWithoutMembershipsInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  role?: Maybe<EnumTeamRolesFieldUpdateOperationsInput>;
  status?: Maybe<EnumMembershipStatusesFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  userId?: Maybe<StringFieldUpdateOperationsInput>;
};

export type TeamMembershipUncheckedUpdateManyWithoutTeamInput = {
  connect?: Maybe<Array<Maybe<TeamMembershipWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<TeamMembershipCreateOrConnectWithoutTeamInput>>>;
  create?: Maybe<Array<Maybe<TeamMembershipCreateWithoutTeamInput>>>;
  createMany?: Maybe<TeamMembershipCreateManyTeamInputEnvelope>;
  delete?: Maybe<Array<Maybe<TeamMembershipWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<TeamMembershipScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<TeamMembershipWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<TeamMembershipWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<TeamMembershipUpdateWithWhereUniqueWithoutTeamInput>>>;
  updateMany?: Maybe<Array<Maybe<TeamMembershipUpdateManyWithWhereWithoutTeamInput>>>;
  upsert?: Maybe<Array<Maybe<TeamMembershipUpsertWithWhereUniqueWithoutTeamInput>>>;
};

export type TeamMembershipUncheckedUpdateManyWithoutTeamMembershipsInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  role?: Maybe<EnumTeamRolesFieldUpdateOperationsInput>;
  status?: Maybe<EnumMembershipStatusesFieldUpdateOperationsInput>;
  teamId?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TeamMembershipUncheckedUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<Maybe<TeamMembershipWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<TeamMembershipCreateOrConnectWithoutUserInput>>>;
  create?: Maybe<Array<Maybe<TeamMembershipCreateWithoutUserInput>>>;
  createMany?: Maybe<TeamMembershipCreateManyUserInputEnvelope>;
  delete?: Maybe<Array<Maybe<TeamMembershipWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<TeamMembershipScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<TeamMembershipWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<TeamMembershipWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<TeamMembershipUpdateWithWhereUniqueWithoutUserInput>>>;
  updateMany?: Maybe<Array<Maybe<TeamMembershipUpdateManyWithWhereWithoutUserInput>>>;
  upsert?: Maybe<Array<Maybe<TeamMembershipUpsertWithWhereUniqueWithoutUserInput>>>;
};

export type TeamMembershipUncheckedUpdateWithoutTeamInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  role?: Maybe<EnumTeamRolesFieldUpdateOperationsInput>;
  status?: Maybe<EnumMembershipStatusesFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  userId?: Maybe<StringFieldUpdateOperationsInput>;
};

export type TeamMembershipUncheckedUpdateWithoutUserInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  role?: Maybe<EnumTeamRolesFieldUpdateOperationsInput>;
  status?: Maybe<EnumMembershipStatusesFieldUpdateOperationsInput>;
  teamId?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TeamMembershipUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  role?: Maybe<EnumTeamRolesFieldUpdateOperationsInput>;
  status?: Maybe<EnumMembershipStatusesFieldUpdateOperationsInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutMembershipsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutTeamMembershipsInput>;
};

export type TeamMembershipUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  role?: Maybe<EnumTeamRolesFieldUpdateOperationsInput>;
  status?: Maybe<EnumMembershipStatusesFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TeamMembershipUpdateManyWithWhereWithoutTeamInput = {
  data: TeamMembershipUncheckedUpdateManyWithoutMembershipsInput;
  where: TeamMembershipScalarWhereInput;
};

export type TeamMembershipUpdateManyWithWhereWithoutUserInput = {
  data: TeamMembershipUncheckedUpdateManyWithoutTeamMembershipsInput;
  where: TeamMembershipScalarWhereInput;
};

export type TeamMembershipUpdateManyWithoutTeamInput = {
  connect?: Maybe<Array<Maybe<TeamMembershipWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<TeamMembershipCreateOrConnectWithoutTeamInput>>>;
  create?: Maybe<Array<Maybe<TeamMembershipCreateWithoutTeamInput>>>;
  createMany?: Maybe<TeamMembershipCreateManyTeamInputEnvelope>;
  delete?: Maybe<Array<Maybe<TeamMembershipWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<TeamMembershipScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<TeamMembershipWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<TeamMembershipWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<TeamMembershipUpdateWithWhereUniqueWithoutTeamInput>>>;
  updateMany?: Maybe<Array<Maybe<TeamMembershipUpdateManyWithWhereWithoutTeamInput>>>;
  upsert?: Maybe<Array<Maybe<TeamMembershipUpsertWithWhereUniqueWithoutTeamInput>>>;
};

export type TeamMembershipUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<Maybe<TeamMembershipWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<TeamMembershipCreateOrConnectWithoutUserInput>>>;
  create?: Maybe<Array<Maybe<TeamMembershipCreateWithoutUserInput>>>;
  createMany?: Maybe<TeamMembershipCreateManyUserInputEnvelope>;
  delete?: Maybe<Array<Maybe<TeamMembershipWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<TeamMembershipScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<TeamMembershipWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<TeamMembershipWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<TeamMembershipUpdateWithWhereUniqueWithoutUserInput>>>;
  updateMany?: Maybe<Array<Maybe<TeamMembershipUpdateManyWithWhereWithoutUserInput>>>;
  upsert?: Maybe<Array<Maybe<TeamMembershipUpsertWithWhereUniqueWithoutUserInput>>>;
};

export type TeamMembershipUpdateWithWhereUniqueWithoutTeamInput = {
  data: TeamMembershipUncheckedUpdateWithoutTeamInput;
  where: TeamMembershipWhereUniqueInput;
};

export type TeamMembershipUpdateWithWhereUniqueWithoutUserInput = {
  data: TeamMembershipUncheckedUpdateWithoutUserInput;
  where: TeamMembershipWhereUniqueInput;
};

export type TeamMembershipUpdateWithoutTeamInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  role?: Maybe<EnumTeamRolesFieldUpdateOperationsInput>;
  status?: Maybe<EnumMembershipStatusesFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutTeamMembershipsInput>;
};

export type TeamMembershipUpdateWithoutUserInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  role?: Maybe<EnumTeamRolesFieldUpdateOperationsInput>;
  status?: Maybe<EnumMembershipStatusesFieldUpdateOperationsInput>;
  team?: Maybe<TeamUpdateOneRequiredWithoutMembershipsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TeamMembershipUpsertWithWhereUniqueWithoutTeamInput = {
  create: TeamMembershipUncheckedCreateWithoutTeamInput;
  update: TeamMembershipUncheckedUpdateWithoutTeamInput;
  where: TeamMembershipWhereUniqueInput;
};

export type TeamMembershipUpsertWithWhereUniqueWithoutUserInput = {
  create: TeamMembershipUncheckedCreateWithoutUserInput;
  update: TeamMembershipUncheckedUpdateWithoutUserInput;
  where: TeamMembershipWhereUniqueInput;
};

export type TeamMembershipWhereInput = {
  AND?: Maybe<Array<Maybe<TeamMembershipWhereInput>>>;
  NOT?: Maybe<Array<Maybe<TeamMembershipWhereInput>>>;
  OR?: Maybe<Array<Maybe<TeamMembershipWhereInput>>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  role?: Maybe<EnumTeamRolesFilter>;
  status?: Maybe<EnumMembershipStatusesFilter>;
  team?: Maybe<TeamWhereInput>;
  teamId?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  user?: Maybe<UserWhereInput>;
  userId?: Maybe<StringFilter>;
};

export type TeamMembershipWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type TeamMinAggregateOutputType = {
  __typename: 'TeamMinAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TeamOrderByInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type TeamRelationFilter = {
  is?: Maybe<TeamWhereInput>;
  isNot?: Maybe<TeamWhereInput>;
};

export enum TeamRoles {
  Admin = 'ADMIN',
  Billing = 'BILLING',
  Member = 'MEMBER'
}

export enum TeamScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type TeamScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<TeamScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<TeamScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<TeamScalarWhereWithAggregatesInput>>>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  id?: Maybe<StringWithAggregatesFilter>;
  name?: Maybe<StringWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
};

export type TeamUncheckedCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  memberships?: Maybe<TeamMembershipUncheckedCreateNestedManyWithoutTeamInput>;
  name: Scalars['String'];
  projects?: Maybe<ProjectUncheckedCreateNestedManyWithoutTeamInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TeamUncheckedCreateWithoutMembershipsInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  projects?: Maybe<ProjectUncheckedCreateNestedManyWithoutTeamInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TeamUncheckedCreateWithoutProjectsInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  memberships?: Maybe<TeamMembershipUncheckedCreateNestedManyWithoutTeamInput>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TeamUncheckedUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  memberships?: Maybe<TeamMembershipUncheckedUpdateManyWithoutTeamInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  projects?: Maybe<ProjectUncheckedUpdateManyWithoutTeamInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TeamUncheckedUpdateManyInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TeamUncheckedUpdateWithoutMembershipsInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  projects?: Maybe<ProjectUncheckedUpdateManyWithoutTeamInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TeamUncheckedUpdateWithoutProjectsInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  memberships?: Maybe<TeamMembershipUncheckedUpdateManyWithoutTeamInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TeamUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  memberships?: Maybe<TeamMembershipUpdateManyWithoutTeamInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  projects?: Maybe<ProjectUpdateManyWithoutTeamInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TeamUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TeamUpdateOneRequiredWithoutMembershipsInput = {
  connect?: Maybe<TeamWhereUniqueInput>;
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutMembershipsInput>;
  create?: Maybe<TeamUncheckedCreateWithoutMembershipsInput>;
  update?: Maybe<TeamUncheckedUpdateWithoutMembershipsInput>;
  upsert?: Maybe<TeamUpsertWithoutMembershipsInput>;
};

export type TeamUpdateOneRequiredWithoutProjectsInput = {
  connect?: Maybe<TeamWhereUniqueInput>;
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutProjectsInput>;
  create?: Maybe<TeamUncheckedCreateWithoutProjectsInput>;
  update?: Maybe<TeamUncheckedUpdateWithoutProjectsInput>;
  upsert?: Maybe<TeamUpsertWithoutProjectsInput>;
};

export type TeamUpdateWithoutMembershipsInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  projects?: Maybe<ProjectUpdateManyWithoutTeamInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TeamUpdateWithoutProjectsInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  memberships?: Maybe<TeamMembershipUpdateManyWithoutTeamInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TeamUpsertWithoutMembershipsInput = {
  create: TeamUncheckedCreateWithoutMembershipsInput;
  update: TeamUncheckedUpdateWithoutMembershipsInput;
};

export type TeamUpsertWithoutProjectsInput = {
  create: TeamUncheckedCreateWithoutProjectsInput;
  update: TeamUncheckedUpdateWithoutProjectsInput;
};

export type TeamWhereInput = {
  AND?: Maybe<Array<Maybe<TeamWhereInput>>>;
  NOT?: Maybe<Array<Maybe<TeamWhereInput>>>;
  OR?: Maybe<Array<Maybe<TeamWhereInput>>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  memberships?: Maybe<TeamMembershipListRelationFilter>;
  name?: Maybe<StringFilter>;
  projects?: Maybe<ProjectListRelationFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type TeamWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type User = {
  __typename: 'User';
  confirmed: Scalars['Boolean'];
  email: Scalars['String'];
  id: Scalars['ID'];
  profile?: Maybe<UserProfile>;
};

export type UserCountAggregateOutputType = {
  __typename: 'UserCountAggregateOutputType';
  _all: Scalars['Int'];
  confirmed: Scalars['Int'];
  createdAt: Scalars['Int'];
  email: Scalars['Int'];
  id: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type UserCreateInput = {
  ProjectMembersip?: Maybe<ProjectMembersipCreateNestedManyWithoutUserInput>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  emailConfirmation?: Maybe<EmailConfirmationCreateNestedOneWithoutUserInput>;
  id?: Maybe<Scalars['String']>;
  profile?: Maybe<UserProfileCreateNestedOneWithoutUserInput>;
  teamMemberships?: Maybe<TeamMembershipCreateNestedManyWithoutUserInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserCreateManyInput = {
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserCreateNestedOneWithoutEmailConfirmationInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutEmailConfirmationInput>;
  create?: Maybe<UserUncheckedCreateWithoutEmailConfirmationInput>;
};

export type UserCreateNestedOneWithoutProfileInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutProfileInput>;
  create?: Maybe<UserUncheckedCreateWithoutProfileInput>;
};

export type UserCreateNestedOneWithoutProjectMembersipInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutProjectMembersipInput>;
  create?: Maybe<UserUncheckedCreateWithoutProjectMembersipInput>;
};

export type UserCreateNestedOneWithoutTeamMembershipsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutTeamMembershipsInput>;
  create?: Maybe<UserUncheckedCreateWithoutTeamMembershipsInput>;
};

export type UserCreateOrConnectWithoutEmailConfirmationInput = {
  create: UserUncheckedCreateWithoutEmailConfirmationInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutProfileInput = {
  create: UserUncheckedCreateWithoutProfileInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutProjectMembersipInput = {
  create: UserUncheckedCreateWithoutProjectMembersipInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutTeamMembershipsInput = {
  create: UserUncheckedCreateWithoutTeamMembershipsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutEmailConfirmationInput = {
  ProjectMembersip?: Maybe<ProjectMembersipCreateNestedManyWithoutUserInput>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  profile?: Maybe<UserProfileCreateNestedOneWithoutUserInput>;
  teamMemberships?: Maybe<TeamMembershipCreateNestedManyWithoutUserInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserCreateWithoutProfileInput = {
  ProjectMembersip?: Maybe<ProjectMembersipCreateNestedManyWithoutUserInput>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  emailConfirmation?: Maybe<EmailConfirmationCreateNestedOneWithoutUserInput>;
  id?: Maybe<Scalars['String']>;
  teamMemberships?: Maybe<TeamMembershipCreateNestedManyWithoutUserInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserCreateWithoutProjectMembersipInput = {
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  emailConfirmation?: Maybe<EmailConfirmationCreateNestedOneWithoutUserInput>;
  id?: Maybe<Scalars['String']>;
  profile?: Maybe<UserProfileCreateNestedOneWithoutUserInput>;
  teamMemberships?: Maybe<TeamMembershipCreateNestedManyWithoutUserInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserCreateWithoutTeamMembershipsInput = {
  ProjectMembersip?: Maybe<ProjectMembersipCreateNestedManyWithoutUserInput>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  emailConfirmation?: Maybe<EmailConfirmationCreateNestedOneWithoutUserInput>;
  id?: Maybe<Scalars['String']>;
  profile?: Maybe<UserProfileCreateNestedOneWithoutUserInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserMaxAggregateOutputType = {
  __typename: 'UserMaxAggregateOutputType';
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserMinAggregateOutputType = {
  __typename: 'UserMinAggregateOutputType';
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserOrderByInput = {
  confirmed?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type UserProfile = {
  __typename: 'UserProfile';
  firstName: Scalars['String'];
  fullName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
};

export type UserProfileCountAggregateOutputType = {
  __typename: 'UserProfileCountAggregateOutputType';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  firstName: Scalars['Int'];
  id: Scalars['Int'];
  lastName: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
};

export type UserProfileCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutProfileInput;
};

export type UserProfileCreateManyInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type UserProfileCreateNestedOneWithoutUserInput = {
  connect?: Maybe<UserProfileWhereUniqueInput>;
  connectOrCreate?: Maybe<UserProfileCreateOrConnectWithoutUserInput>;
  create?: Maybe<UserProfileUncheckedCreateWithoutUserInput>;
};

export type UserProfileCreateOrConnectWithoutUserInput = {
  create: UserProfileUncheckedCreateWithoutUserInput;
  where: UserProfileWhereUniqueInput;
};

export type UserProfileCreateWithoutUserInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserProfileMaxAggregateOutputType = {
  __typename: 'UserProfileMaxAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type UserProfileMinAggregateOutputType = {
  __typename: 'UserProfileMinAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type UserProfileOrderByInput = {
  createdAt?: Maybe<SortOrder>;
  firstName?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  lastName?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type UserProfileRelationFilter = {
  is?: Maybe<UserProfileWhereInput>;
  isNot?: Maybe<UserProfileWhereInput>;
};

export enum UserProfileScalarFieldEnum {
  CreatedAt = 'createdAt',
  FirstName = 'firstName',
  Id = 'id',
  LastName = 'lastName',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type UserProfileScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<UserProfileScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<UserProfileScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<UserProfileScalarWhereWithAggregatesInput>>>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  firstName?: Maybe<StringWithAggregatesFilter>;
  id?: Maybe<StringWithAggregatesFilter>;
  lastName?: Maybe<StringWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
  userId?: Maybe<StringWithAggregatesFilter>;
};

export type UserProfileUncheckedCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type UserProfileUncheckedCreateNestedOneWithoutUserInput = {
  connect?: Maybe<UserProfileWhereUniqueInput>;
  connectOrCreate?: Maybe<UserProfileCreateOrConnectWithoutUserInput>;
  create?: Maybe<UserProfileUncheckedCreateWithoutUserInput>;
};

export type UserProfileUncheckedCreateWithoutUserInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserProfileUncheckedUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  userId?: Maybe<StringFieldUpdateOperationsInput>;
};

export type UserProfileUncheckedUpdateManyInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  userId?: Maybe<StringFieldUpdateOperationsInput>;
};

export type UserProfileUncheckedUpdateOneWithoutUserInput = {
  connect?: Maybe<UserProfileWhereUniqueInput>;
  connectOrCreate?: Maybe<UserProfileCreateOrConnectWithoutUserInput>;
  create?: Maybe<UserProfileUncheckedCreateWithoutUserInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<UserProfileUncheckedUpdateWithoutUserInput>;
  upsert?: Maybe<UserProfileUpsertWithoutUserInput>;
};

export type UserProfileUncheckedUpdateWithoutUserInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserProfileUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutProfileInput>;
};

export type UserProfileUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserProfileUpdateOneWithoutUserInput = {
  connect?: Maybe<UserProfileWhereUniqueInput>;
  connectOrCreate?: Maybe<UserProfileCreateOrConnectWithoutUserInput>;
  create?: Maybe<UserProfileUncheckedCreateWithoutUserInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<UserProfileUncheckedUpdateWithoutUserInput>;
  upsert?: Maybe<UserProfileUpsertWithoutUserInput>;
};

export type UserProfileUpdateWithoutUserInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserProfileUpsertWithoutUserInput = {
  create: UserProfileUncheckedCreateWithoutUserInput;
  update: UserProfileUncheckedUpdateWithoutUserInput;
};

export type UserProfileWhereInput = {
  AND?: Maybe<Array<Maybe<UserProfileWhereInput>>>;
  NOT?: Maybe<Array<Maybe<UserProfileWhereInput>>>;
  OR?: Maybe<Array<Maybe<UserProfileWhereInput>>>;
  createdAt?: Maybe<DateTimeFilter>;
  firstName?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  lastName?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  user?: Maybe<UserWhereInput>;
  userId?: Maybe<StringFilter>;
};

export type UserProfileWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type UserRelationFilter = {
  is?: Maybe<UserWhereInput>;
  isNot?: Maybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  Confirmed = 'confirmed',
  CreatedAt = 'createdAt',
  Email = 'email',
  Id = 'id',
  UpdatedAt = 'updatedAt'
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<UserScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<UserScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<UserScalarWhereWithAggregatesInput>>>;
  confirmed?: Maybe<BoolWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  email?: Maybe<StringWithAggregatesFilter>;
  id?: Maybe<StringWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
};

export type UserUncheckedCreateInput = {
  ProjectMembersip?: Maybe<ProjectMembersipUncheckedCreateNestedManyWithoutUserInput>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  emailConfirmation?: Maybe<EmailConfirmationUncheckedCreateNestedOneWithoutUserInput>;
  id?: Maybe<Scalars['String']>;
  profile?: Maybe<UserProfileUncheckedCreateNestedOneWithoutUserInput>;
  teamMemberships?: Maybe<TeamMembershipUncheckedCreateNestedManyWithoutUserInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserUncheckedCreateWithoutEmailConfirmationInput = {
  ProjectMembersip?: Maybe<ProjectMembersipUncheckedCreateNestedManyWithoutUserInput>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  profile?: Maybe<UserProfileUncheckedCreateNestedOneWithoutUserInput>;
  teamMemberships?: Maybe<TeamMembershipUncheckedCreateNestedManyWithoutUserInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserUncheckedCreateWithoutProfileInput = {
  ProjectMembersip?: Maybe<ProjectMembersipUncheckedCreateNestedManyWithoutUserInput>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  emailConfirmation?: Maybe<EmailConfirmationUncheckedCreateNestedOneWithoutUserInput>;
  id?: Maybe<Scalars['String']>;
  teamMemberships?: Maybe<TeamMembershipUncheckedCreateNestedManyWithoutUserInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserUncheckedCreateWithoutProjectMembersipInput = {
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  emailConfirmation?: Maybe<EmailConfirmationUncheckedCreateNestedOneWithoutUserInput>;
  id?: Maybe<Scalars['String']>;
  profile?: Maybe<UserProfileUncheckedCreateNestedOneWithoutUserInput>;
  teamMemberships?: Maybe<TeamMembershipUncheckedCreateNestedManyWithoutUserInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserUncheckedCreateWithoutTeamMembershipsInput = {
  ProjectMembersip?: Maybe<ProjectMembersipUncheckedCreateNestedManyWithoutUserInput>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  emailConfirmation?: Maybe<EmailConfirmationUncheckedCreateNestedOneWithoutUserInput>;
  id?: Maybe<Scalars['String']>;
  profile?: Maybe<UserProfileUncheckedCreateNestedOneWithoutUserInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserUncheckedUpdateInput = {
  ProjectMembersip?: Maybe<ProjectMembersipUncheckedUpdateManyWithoutUserInput>;
  confirmed?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  emailConfirmation?: Maybe<EmailConfirmationUncheckedUpdateOneWithoutUserInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  profile?: Maybe<UserProfileUncheckedUpdateOneWithoutUserInput>;
  teamMemberships?: Maybe<TeamMembershipUncheckedUpdateManyWithoutUserInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateManyInput = {
  confirmed?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateWithoutEmailConfirmationInput = {
  ProjectMembersip?: Maybe<ProjectMembersipUncheckedUpdateManyWithoutUserInput>;
  confirmed?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  profile?: Maybe<UserProfileUncheckedUpdateOneWithoutUserInput>;
  teamMemberships?: Maybe<TeamMembershipUncheckedUpdateManyWithoutUserInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateWithoutProfileInput = {
  ProjectMembersip?: Maybe<ProjectMembersipUncheckedUpdateManyWithoutUserInput>;
  confirmed?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  emailConfirmation?: Maybe<EmailConfirmationUncheckedUpdateOneWithoutUserInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  teamMemberships?: Maybe<TeamMembershipUncheckedUpdateManyWithoutUserInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateWithoutProjectMembersipInput = {
  confirmed?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  emailConfirmation?: Maybe<EmailConfirmationUncheckedUpdateOneWithoutUserInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  profile?: Maybe<UserProfileUncheckedUpdateOneWithoutUserInput>;
  teamMemberships?: Maybe<TeamMembershipUncheckedUpdateManyWithoutUserInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateWithoutTeamMembershipsInput = {
  ProjectMembersip?: Maybe<ProjectMembersipUncheckedUpdateManyWithoutUserInput>;
  confirmed?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  emailConfirmation?: Maybe<EmailConfirmationUncheckedUpdateOneWithoutUserInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  profile?: Maybe<UserProfileUncheckedUpdateOneWithoutUserInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateInput = {
  ProjectMembersip?: Maybe<ProjectMembersipUpdateManyWithoutUserInput>;
  confirmed?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  emailConfirmation?: Maybe<EmailConfirmationUpdateOneWithoutUserInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  profile?: Maybe<UserProfileUpdateOneWithoutUserInput>;
  teamMemberships?: Maybe<TeamMembershipUpdateManyWithoutUserInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  confirmed?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateOneRequiredWithoutEmailConfirmationInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutEmailConfirmationInput>;
  create?: Maybe<UserUncheckedCreateWithoutEmailConfirmationInput>;
  update?: Maybe<UserUncheckedUpdateWithoutEmailConfirmationInput>;
  upsert?: Maybe<UserUpsertWithoutEmailConfirmationInput>;
};

export type UserUpdateOneRequiredWithoutProfileInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutProfileInput>;
  create?: Maybe<UserUncheckedCreateWithoutProfileInput>;
  update?: Maybe<UserUncheckedUpdateWithoutProfileInput>;
  upsert?: Maybe<UserUpsertWithoutProfileInput>;
};

export type UserUpdateOneRequiredWithoutProjectMembersipInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutProjectMembersipInput>;
  create?: Maybe<UserUncheckedCreateWithoutProjectMembersipInput>;
  update?: Maybe<UserUncheckedUpdateWithoutProjectMembersipInput>;
  upsert?: Maybe<UserUpsertWithoutProjectMembersipInput>;
};

export type UserUpdateOneRequiredWithoutTeamMembershipsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutTeamMembershipsInput>;
  create?: Maybe<UserUncheckedCreateWithoutTeamMembershipsInput>;
  update?: Maybe<UserUncheckedUpdateWithoutTeamMembershipsInput>;
  upsert?: Maybe<UserUpsertWithoutTeamMembershipsInput>;
};

export type UserUpdateWithoutEmailConfirmationInput = {
  ProjectMembersip?: Maybe<ProjectMembersipUpdateManyWithoutUserInput>;
  confirmed?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  profile?: Maybe<UserProfileUpdateOneWithoutUserInput>;
  teamMemberships?: Maybe<TeamMembershipUpdateManyWithoutUserInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutProfileInput = {
  ProjectMembersip?: Maybe<ProjectMembersipUpdateManyWithoutUserInput>;
  confirmed?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  emailConfirmation?: Maybe<EmailConfirmationUpdateOneWithoutUserInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  teamMemberships?: Maybe<TeamMembershipUpdateManyWithoutUserInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutProjectMembersipInput = {
  confirmed?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  emailConfirmation?: Maybe<EmailConfirmationUpdateOneWithoutUserInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  profile?: Maybe<UserProfileUpdateOneWithoutUserInput>;
  teamMemberships?: Maybe<TeamMembershipUpdateManyWithoutUserInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutTeamMembershipsInput = {
  ProjectMembersip?: Maybe<ProjectMembersipUpdateManyWithoutUserInput>;
  confirmed?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  emailConfirmation?: Maybe<EmailConfirmationUpdateOneWithoutUserInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  profile?: Maybe<UserProfileUpdateOneWithoutUserInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutEmailConfirmationInput = {
  create: UserUncheckedCreateWithoutEmailConfirmationInput;
  update: UserUncheckedUpdateWithoutEmailConfirmationInput;
};

export type UserUpsertWithoutProfileInput = {
  create: UserUncheckedCreateWithoutProfileInput;
  update: UserUncheckedUpdateWithoutProfileInput;
};

export type UserUpsertWithoutProjectMembersipInput = {
  create: UserUncheckedCreateWithoutProjectMembersipInput;
  update: UserUncheckedUpdateWithoutProjectMembersipInput;
};

export type UserUpsertWithoutTeamMembershipsInput = {
  create: UserUncheckedCreateWithoutTeamMembershipsInput;
  update: UserUncheckedUpdateWithoutTeamMembershipsInput;
};

export type UserWhereInput = {
  AND?: Maybe<Array<Maybe<UserWhereInput>>>;
  NOT?: Maybe<Array<Maybe<UserWhereInput>>>;
  OR?: Maybe<Array<Maybe<UserWhereInput>>>;
  ProjectMembersip?: Maybe<ProjectMembersipListRelationFilter>;
  confirmed?: Maybe<BoolFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<StringFilter>;
  emailConfirmation?: Maybe<EmailConfirmationWhereInput>;
  id?: Maybe<StringFilter>;
  profile?: Maybe<UserProfileWhereInput>;
  teamMemberships?: Maybe<TeamMembershipListRelationFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type UserWhereUniqueInput = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
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