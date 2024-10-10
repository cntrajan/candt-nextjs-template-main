import "dotenv/config";
import { GraphQLClient } from "graphql-request";
import { getSdk } from "./graphql/types";

const endPoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/${process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT}`;
console.log({NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN:process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN})
const client = new GraphQLClient(endPoint, {
  fetch,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
  },
  errorPolicy: "all",
});
export const sdk = getSdk(client);

