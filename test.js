import parser from 'rs-html-parser';
import util from 'util';
const a = require('./src/index');

describe('test', () => {
  const input = `
    <div>
      <h1 class="header">header</h1>
      <div>desc</div>
    </div>
  `;
  const tokens = parser.tokenize(input.trim());
  const ast = parser.parse(tokens);
});
