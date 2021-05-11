import SchemaBuilder from "@giraphql/core";
import DataloaderPlugin from "@giraphql/plugin-dataloader";
import { Context } from "./graphql_schema/custom_context";
import { GraphQLDate, GraphQLTime, GraphQLDateTime } from "graphql-iso-date";

export const builder = new SchemaBuilder<{
  Context: Context;
  Scalars: {
    Date: { Input: Date; Output: Date };
    Time: { Input: Date; Output: Date };
    DateTime: { Input: Date; Output: Date };
  };
}>({
  plugins: [DataloaderPlugin],
});

builder.addScalarType("Date", GraphQLDate, {});
builder.addScalarType("Time", GraphQLTime, {});
builder.addScalarType("DateTime", GraphQLDateTime, {});
