const util = require('util');
const parser = require('rs-html-parser');
const {
  tokenize,
  parse,
  traverse
} = parser;

const template = `
  <div>
    <div>{{ title }}</div>
    <div>{{ desc }}</div>
    <button v-on:click="btnClick">click</button>
  </div>
`;

const state = {
  title: 'this is title',
  desc: 'this is description',
  btnClick: () => {
    console.log('button is click');
  }
}

render(template, state) {
  const tokens = tokenize(input.trim());
  const ast = parse(tokens);
  console.log(tokens);
  console.log(util.inspect(ast, false, null));
}

render(tempalte, state);
