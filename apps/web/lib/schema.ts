import { IntrospectionData } from "@urql/exchange-graphcache/dist/types/ast";
import introspectedSchema from "schema_introspection.json";

export const schema = (introspectedSchema as unknown) as IntrospectionData;
