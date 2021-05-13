import { FieldResolver } from "nexus";

/**
 * @see Query
 * @name me
 * Query data for the currently logged in user;
 */
export const me: FieldResolver<"Query", "me"> = async (
  _source,
  _args,
  { currentUser }
) => currentUser;
