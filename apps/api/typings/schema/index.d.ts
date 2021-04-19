/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import { Context } from "./../../src/graphql_schema/custom_context"
import { FieldShieldResolver, ObjectTypeShieldResolver } from "nexus-shield"
import { core } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    date<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "Date";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    date<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "Date";
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  RegisterInput: { // input type
    email: string; // String!
    firstName: string; // String!
    lastName: string; // String!
  }
}

export interface NexusGenEnums {
  MembershipStatuses: "ACCEPTED" | "BANNED" | "PENDING"
  ProjectRoles: "ADMIN" | "REVIEWER" | "VIEWER"
  TeamRoles: "ADMIN" | "BILLING" | "MEMBER"
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  Date: any
}

export interface NexusGenObjects {
  Mutation: {};
  PaginationParams: { // root type
    cursor?: string | null; // ID
    skip?: number | null; // Int
    take?: number | null; // Int
  }
  Project: { // root type
    createdAt: NexusGenScalars['Date']; // Date!
    id: string; // ID!
    name: string; // String!
    updatedAt: NexusGenScalars['Date']; // Date!
  }
  ProjectMembership: { // root type
    createdAt: NexusGenScalars['Date']; // Date!
    id: string; // ID!
    name: string; // String!
    updatedAt: NexusGenScalars['Date']; // Date!
    user?: NexusGenRootTypes['User'] | null; // User
  }
  Query: {};
  SuccessResponse: { // root type
    success: boolean; // Boolean!
  }
  Team: { // root type
    createdAt: NexusGenScalars['Date']; // Date!
    id: string; // ID!
    memberships?: NexusGenRootTypes['TeamMembership'] | null; // TeamMembership
    name: string; // String!
    projects?: NexusGenRootTypes['Project'] | null; // Project
    updatedAt: NexusGenScalars['Date']; // Date!
  }
  TeamMembership: { // root type
    createdAt: NexusGenScalars['Date']; // Date!
    id: string; // ID!
    role: NexusGenEnums['TeamRoles']; // TeamRoles!
    status: NexusGenEnums['MembershipStatuses']; // MembershipStatuses!
    team?: NexusGenRootTypes['Team'] | null; // Team
    updatedAt: NexusGenScalars['Date']; // Date!
    user?: NexusGenRootTypes['User'] | null; // User
  }
  User: { // root type
    confirmed: boolean; // Boolean!
    email: string; // String!
    id: string; // ID!
    profile?: NexusGenRootTypes['UserProfile'] | null; // UserProfile
  }
  UserProfile: { // root type
    firstName: string; // String!
    id: string; // ID!
    lastName: string; // String!
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  Mutation: { // field return type
    confirmEmail: NexusGenRootTypes['User'] | null; // User
    createProject: NexusGenRootTypes['Project']; // Project!
    createTeam: NexusGenRootTypes['Team']; // Team!
    login: NexusGenRootTypes['User'] | null; // User
    logout: NexusGenRootTypes['SuccessResponse'] | null; // SuccessResponse
    register: NexusGenRootTypes['User'] | null; // User
    requestLogin: NexusGenRootTypes['SuccessResponse'] | null; // SuccessResponse
  }
  PaginationParams: { // field return type
    cursor: string | null; // ID
    skip: number | null; // Int
    take: number | null; // Int
  }
  Project: { // field return type
    createdAt: NexusGenScalars['Date']; // Date!
    id: string; // ID!
    name: string; // String!
    updatedAt: NexusGenScalars['Date']; // Date!
  }
  ProjectMembership: { // field return type
    createdAt: NexusGenScalars['Date']; // Date!
    id: string; // ID!
    name: string; // String!
    updatedAt: NexusGenScalars['Date']; // Date!
    user: NexusGenRootTypes['User'] | null; // User
  }
  Query: { // field return type
    listTeamMembersips: Array<NexusGenRootTypes['TeamMembership'] | null>; // [TeamMembership]!
    listTeams: Array<NexusGenRootTypes['Team'] | null>; // [Team]!
    me: NexusGenRootTypes['User'] | null; // User
    team: NexusGenRootTypes['Team']; // Team!
    teamMembership: NexusGenRootTypes['TeamMembership']; // TeamMembership!
  }
  SuccessResponse: { // field return type
    success: boolean; // Boolean!
  }
  Team: { // field return type
    createdAt: NexusGenScalars['Date']; // Date!
    id: string; // ID!
    memberships: NexusGenRootTypes['TeamMembership'] | null; // TeamMembership
    name: string; // String!
    projects: NexusGenRootTypes['Project'] | null; // Project
    updatedAt: NexusGenScalars['Date']; // Date!
  }
  TeamMembership: { // field return type
    createdAt: NexusGenScalars['Date']; // Date!
    id: string; // ID!
    role: NexusGenEnums['TeamRoles']; // TeamRoles!
    status: NexusGenEnums['MembershipStatuses']; // MembershipStatuses!
    team: NexusGenRootTypes['Team'] | null; // Team
    updatedAt: NexusGenScalars['Date']; // Date!
    user: NexusGenRootTypes['User'] | null; // User
  }
  User: { // field return type
    confirmed: boolean; // Boolean!
    email: string; // String!
    id: string; // ID!
    profile: NexusGenRootTypes['UserProfile'] | null; // UserProfile
  }
  UserProfile: { // field return type
    firstName: string; // String!
    fullName: string; // String!
    id: string; // ID!
    lastName: string; // String!
  }
}

export interface NexusGenFieldTypeNames {
  Mutation: { // field return type name
    confirmEmail: 'User'
    createProject: 'Project'
    createTeam: 'Team'
    login: 'User'
    logout: 'SuccessResponse'
    register: 'User'
    requestLogin: 'SuccessResponse'
  }
  PaginationParams: { // field return type name
    cursor: 'ID'
    skip: 'Int'
    take: 'Int'
  }
  Project: { // field return type name
    createdAt: 'Date'
    id: 'ID'
    name: 'String'
    updatedAt: 'Date'
  }
  ProjectMembership: { // field return type name
    createdAt: 'Date'
    id: 'ID'
    name: 'String'
    updatedAt: 'Date'
    user: 'User'
  }
  Query: { // field return type name
    listTeamMembersips: 'TeamMembership'
    listTeams: 'Team'
    me: 'User'
    team: 'Team'
    teamMembership: 'TeamMembership'
  }
  SuccessResponse: { // field return type name
    success: 'Boolean'
  }
  Team: { // field return type name
    createdAt: 'Date'
    id: 'ID'
    memberships: 'TeamMembership'
    name: 'String'
    projects: 'Project'
    updatedAt: 'Date'
  }
  TeamMembership: { // field return type name
    createdAt: 'Date'
    id: 'ID'
    role: 'TeamRoles'
    status: 'MembershipStatuses'
    team: 'Team'
    updatedAt: 'Date'
    user: 'User'
  }
  User: { // field return type name
    confirmed: 'Boolean'
    email: 'String'
    id: 'ID'
    profile: 'UserProfile'
  }
  UserProfile: { // field return type name
    firstName: 'String'
    fullName: 'String'
    id: 'ID'
    lastName: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    confirmEmail: { // args
      email: string; // String!
      token: string; // String!
    }
    createProject: { // args
      name: string; // String!
      teamId: string; // ID!
    }
    createTeam: { // args
      name: string; // String!
    }
    login: { // args
      code: string; // String!
      email: string; // String!
    }
    register: { // args
      email: string; // String!
      firstName: string; // String!
      lastName: string; // String!
    }
    requestLogin: { // args
      email: string; // String!
    }
  }
  Query: {
    listTeams: { // args
      cursor?: string | null; // ID
      skip?: number | null; // Int
      take?: number | null; // Int
    }
    team: { // args
      id: string; // ID!
    }
    teamMembership: { // args
      id: string; // String!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = keyof NexusGenEnums;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
    /**
     * Default authorization rule to execute on all fields of this object
     */
    shield?: ObjectTypeShieldResolver<TypeName>
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
    /**
     * Authorization rule to execute for this field
     */
    shield?: FieldShieldResolver<TypeName, FieldName>
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}