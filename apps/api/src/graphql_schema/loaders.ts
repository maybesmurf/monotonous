import { MercuriusLoaders } from "mercurius";
import { Context } from "@monotonous/types";
import { UserLoader } from "./models/user/user_loader";

export const loaders: MercuriusLoaders<Context> = {
  User: UserLoader,
};
