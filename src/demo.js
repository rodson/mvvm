const template = `
  <div>
    <div>{{ title }}</div>
    <div>{{ desc }}</div>
    <button v-on:click="btnClick">
      click
    </button>
  </div>
`;

[{
    type: 'startTagOpen',
    value: 'div'
  },
  {
    type: 'startTagClose',
    value: '>'
  },
  {
    type: 'text',
    value: '\n    '
  },
  {
    type: 'startTagOpen',
    value: 'div'
  },
  {
    type: 'startTagClose',
    value: '>'
  },
  {
    type: 'text',
    value: '{{ title }}'
  },
  {
    type: 'endTag',
    value: 'div'
  },
  {
    type: 'text',
    value: '\n    '
  },
  {
    type: 'endTag',
    value: 'div'
  },
  ......
]
