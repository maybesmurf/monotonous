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
  createdAt?: Maybe<Scalars['Int']>;
  token?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
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


export type Mutation = {
  __typename: 'Mutation';
  confirmEmail?: Maybe<User>;
  login?: Maybe<User>;
  logout?: Maybe<SuccessResponse>;
  register?: Maybe<User>;
  requestLogin?: Maybe<SuccessResponse>;
};


export type MutationConfirmEmailArgs = {
  email: Scalars['String'];
  token: Scalars['String'];
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

export type Query = {
  __typename: 'Query';
  me?: Maybe<User>;
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
  confirmed?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type UserCreateInput = {
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  emailConfirmation?: Maybe<EmailConfirmationCreateNestedOneWithoutUserInput>;
  id?: Maybe<Scalars['String']>;
  profile?: Maybe<UserProfileCreateNestedOneWithoutUserInput>;
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

export type UserCreateOrConnectWithoutEmailConfirmationInput = {
  create: UserUncheckedCreateWithoutEmailConfirmationInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutProfileInput = {
  create: UserUncheckedCreateWithoutProfileInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutEmailConfirmationInput = {
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  profile?: Maybe<UserProfileCreateNestedOneWithoutUserInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserCreateWithoutProfileInput = {
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  emailConfirmation?: Maybe<EmailConfirmationCreateNestedOneWithoutUserInput>;
  id?: Maybe<Scalars['String']>;
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
  firstName?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  lastName?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type UserProfileCreateInput = {
  firstName: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  user: UserCreateNestedOneWithoutProfileInput;
};

export type UserProfileCreateManyInput = {
  firstName: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
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
  firstName: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
};

export type UserProfileMaxAggregateOutputType = {
  __typename: 'UserProfileMaxAggregateOutputType';
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type UserProfileMinAggregateOutputType = {
  __typename: 'UserProfileMinAggregateOutputType';
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type UserProfileOrderByInput = {
  firstName?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  lastName?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type UserProfileRelationFilter = {
  is?: Maybe<UserProfileWhereInput>;
  isNot?: Maybe<UserProfileWhereInput>;
};

export enum UserProfileScalarFieldEnum {
  FirstName = 'firstName',
  Id = 'id',
  LastName = 'lastName',
  UserId = 'userId'
}

export type UserProfileScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<UserProfileScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<UserProfileScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<UserProfileScalarWhereWithAggregatesInput>>>;
  firstName?: Maybe<StringWithAggregatesFilter>;
  id?: Maybe<StringWithAggregatesFilter>;
  lastName?: Maybe<StringWithAggregatesFilter>;
  userId?: Maybe<StringWithAggregatesFilter>;
};

export type UserProfileUncheckedCreateInput = {
  firstName: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  userId: Scalars['String'];
};

export type UserProfileUncheckedCreateNestedOneWithoutUserInput = {
  connect?: Maybe<UserProfileWhereUniqueInput>;
  connectOrCreate?: Maybe<UserProfileCreateOrConnectWithoutUserInput>;
  create?: Maybe<UserProfileUncheckedCreateWithoutUserInput>;
};

export type UserProfileUncheckedCreateWithoutUserInput = {
  firstName: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
};

export type UserProfileUncheckedUpdateInput = {
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  userId?: Maybe<StringFieldUpdateOperationsInput>;
};

export type UserProfileUncheckedUpdateManyInput = {
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
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
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
};

export type UserProfileUpdateInput = {
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutProfileInput>;
};

export type UserProfileUpdateManyMutationInput = {
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
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
  firstName?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  lastName?: Maybe<StringFieldUpdateOperationsInput>;
};

export type UserProfileUpsertWithoutUserInput = {
  create: UserProfileUncheckedCreateWithoutUserInput;
  update: UserProfileUncheckedUpdateWithoutUserInput;
};

export type UserProfileWhereInput = {
  AND?: Maybe<Array<Maybe<UserProfileWhereInput>>>;
  NOT?: Maybe<Array<Maybe<UserProfileWhereInput>>>;
  OR?: Maybe<Array<Maybe<UserProfileWhereInput>>>;
  firstName?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  lastName?: Maybe<StringFilter>;
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
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  emailConfirmation?: Maybe<EmailConfirmationUncheckedCreateNestedOneWithoutUserInput>;
  id?: Maybe<Scalars['String']>;
  profile?: Maybe<UserProfileUncheckedCreateNestedOneWithoutUserInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserUncheckedCreateWithoutEmailConfirmationInput = {
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  profile?: Maybe<UserProfileUncheckedCreateNestedOneWithoutUserInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserUncheckedCreateWithoutProfileInput = {
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  emailConfirmation?: Maybe<EmailConfirmationUncheckedCreateNestedOneWithoutUserInput>;
  id?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserUncheckedUpdateInput = {
  confirmed?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  emailConfirmation?: Maybe<EmailConfirmationUncheckedUpdateOneWithoutUserInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  profile?: Maybe<UserProfileUncheckedUpdateOneWithoutUserInput>;
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
  confirmed?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  profile?: Maybe<UserProfileUncheckedUpdateOneWithoutUserInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateWithoutProfileInput = {
  confirmed?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  emailConfirmation?: Maybe<EmailConfirmationUncheckedUpdateOneWithoutUserInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateInput = {
  confirmed?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  emailConfirmation?: Maybe<EmailConfirmationUpdateOneWithoutUserInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  profile?: Maybe<UserProfileUpdateOneWithoutUserInput>;
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

export type UserUpdateWithoutEmailConfirmationInput = {
  confirmed?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  profile?: Maybe<UserProfileUpdateOneWithoutUserInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutProfileInput = {
  confirmed?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  emailConfirmation?: Maybe<EmailConfirmationUpdateOneWithoutUserInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
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

export type UserWhereInput = {
  AND?: Maybe<Array<Maybe<UserWhereInput>>>;
  NOT?: Maybe<Array<Maybe<UserWhereInput>>>;
  OR?: Maybe<Array<Maybe<UserWhereInput>>>;
  confirmed?: Maybe<BoolFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<StringFilter>;
  emailConfirmation?: Maybe<EmailConfirmationWhereInput>;
  id?: Maybe<StringFilter>;
  profile?: Maybe<UserProfileWhereInput>;
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

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename: 'Mutation' }
  & { logout?: Maybe<(
    { __typename: 'SuccessResponse' }
    & Pick<SuccessResponse, 'success'>
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