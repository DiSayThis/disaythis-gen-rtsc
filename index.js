#! /usr/bin/env node

const program = require("commander");
const generateReactClassComponent = require("./generateReactClassComponent");
const generateReactStatelessComponent = require("./generateReactStatelessComponent");
const generateReactStatelessComponentCss = require("./generateReactStatelessComponentCss");
const generateReactContainerComponent = require("./generateReactContainerComponent");

program.version("0.0.1", "-v, --version").description("Typescript based react component generator cli");
program
  .command("cssStatelessComponent <componentName>")
  .alias("m")
  .description("Generate a stateless component with css modules")
  .action((componentName) => {
    generateReactStatelessComponentCss(componentName);
  });

program
  .command("statelessComponent <componentName>")
  .alias("s")
  .description("Generate a stateless component")
  .action((componentName) => {
    generateReactStatelessComponent(componentName);
  });
program
  .command("classComponent <componentName>")
  .alias("c")
  .description("Generate a class component")
  .action((componentName) => {
    generateReactClassComponent(componentName);
  });

program
  .command("containerComponent <componentName>")
  .alias("r")
  .description("Generate a redux container component")
  .action((componentName) => {
    generateReactContainerComponent(componentName);
  });

program.description("Generate a stateless component with css modules").action((componentName) => {
  generateReactStatelessComponentCss(componentName);
});
program.parse(process.argv);
