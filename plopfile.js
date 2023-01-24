// eslint-disable-next-line no-undef
module.exports = function (plop) {
    plop.setGenerator('Generate new package', {
      description: 'Create a component',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'What is your package name?'
        }
      ],
      actions: [
        {
          type: 'add',
          path: 'packages/artly-ui-{{kebabCase name}}/.babelrc',
          templateFile: '.plop/package/babelrc.hbs'
        },
        {
            type: 'add',
            path: 'packages/artly-ui-{{kebabCase name}}/index.ts',
            templateFile: '.plop/package/index.hbs'
        },
        {
            type: 'add',
            path: 'packages/artly-ui-{{kebabCase name}}/jest-setup.ts',
            templateFile: '.plop/package/jest-setup.hbs'
        },
        {
            type: 'add',
            path: 'packages/artly-ui-{{kebabCase name}}/jest.config.js',
            templateFile: '.plop/package/jest.hbs'
        },
        {
            type: 'add',
            path: 'packages/artly-ui-{{kebabCase name}}/package.json',
            templateFile: '.plop/package/package.hbs'
        },
        {
            type: 'add',
            path: 'packages/artly-ui-{{kebabCase name}}/tsconfig.json',
            templateFile: '.plop/package/tsconfig.hbs'
        },
        {
            type: 'add',
            path: 'packages/artly-ui-{{kebabCase name}}/src/{{pascalCase name}}.spec.tsx',
            templateFile: '.plop/package/test.hbs'
        },
        {
            type: 'add',
            path: 'packages/artly-ui-{{kebabCase name}}/src/{{pascalCase name}}.tsx',
            templateFile: '.plop/package/component.hbs'
        },
        {
            type: 'add',
            path: 'packages/artly-ui-{{kebabCase name}}/src/styles.tsx',
            templateFile: '.plop/package/styles.hbs'
        },
        {
            type: 'add',
            path: 'packages/artly-ui-{{kebabCase name}}/src/types.tsx',
            templateFile: '.plop/package/types.hbs'
        },
        {
          type: 'add',
          path: 'packages/artly-ui-{{kebabCase name}}/tsup.config.ts',
          templateFile: '.plop/package/tsup.hbs'
      },
      ]
    });
  };
  