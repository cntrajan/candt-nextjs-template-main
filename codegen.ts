import type { CodegenConfig } from "@graphql-codegen/cli";
import "dotenv/config";
const endPoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/${process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT}`;
const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      [`${endPoint}`]: {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
        },
      },
    },
  ],
  documents: "./src/data/graphql/**/*.graphql",
  generates: {
    "./src/data/graphql/types.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
      config: {
        avoidOptionals: false,
        maybeValue: "T | undefined",
        skipTypename: true,
        onlyOperationTypes: true,
        dedupeFragments: true,
        inlineFragmentTypes: "combine",
      },
    },
  },
  hooks: { afterAllFileWrite: ["prettier --write"] },
};
export default config;
