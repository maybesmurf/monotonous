import { MercuriusLoaders } from "mercurius";
import { Context } from "./custom_context";
import { UserLoader } from "./models/user/user_loader";

export const loaders: MercuriusLoaders<Context> = {
  User: UserLoader,
};
