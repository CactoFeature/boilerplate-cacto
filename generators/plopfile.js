module.exports = (plop) => {
  plop.setGenerator("component", {
    description: "Create a component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your component name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/index.tsx",
        templateFile: "templates/Component.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/styles.ts",
        templateFile: "templates/styles.ts.hbs",
      },
    ],
  }),
    plop.setGenerator("template", {
      description: "Create a template",
      prompts: [
        {
          type: "input",
          name: "name",
          message: "What is your template name?",
        },
      ],
      actions: [
        {
          type: "add",
          path: "../src/templates/{{pascalCase name}}/index.tsx",
          templateFile: "templates/Component.tsx.hbs",
        },
        {
          type: "add",
          path: "../src/templates/{{pascalCase name}}/styles.ts",
          templateFile: "templates/styles.ts.hbs",
        },
      ],
    });
};
