import { Box } from "@artly-ui/box";
import * as themes from "@artly-ui/core";
import { Flex } from "@artly-ui/flex";
import React from 'react';

const kebabCase = (string) =>
  string
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/\.|-theme/gi, "")
    .replace(/-/gi, " ")
    .toLowerCase();

const themesList = Object.entries(themes).filter(
  ([key, value]) => key.endsWith("Theme") && typeof value !== "function"
);

const allThemes = themesList
  .map(([, value]) => ({
    name: kebabCase(value.selector),
    class: value.toString(),
    color: value.colors["primary-90"].value,
  }))
  .sort((a, b) => a.name.localeCompare(b.name));

const removeDuplicatedObjs = (array) => [
  ...new Map(array.map((v) => [v.name, v])).values(),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  themes: {
    default: "deep purple and amber",
    list: removeDuplicatedObjs(allThemes),
  },
};

export const decorators = [
  (Story) => {

    themes.resetCssStyles()
    
    return (<Flex
        css={{
          minHeight: '100vh',
        }}
      >
        <Box
          css={{
            margin: "auto",
            width: "100%"
          }}
        >
          <Story />
        </Box>
      </Flex>
    )
  },
]