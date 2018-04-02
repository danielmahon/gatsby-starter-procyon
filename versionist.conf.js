const plugins = require('versionist-plugins');

module.exports = {
  updateVersion: ['npm', plugins.git.push],
  getGitReferenceFromVersion: 'v-prefix',
  template: [
    '## v{{version}} - {{moment date "Y-MM-DD"}}',
    '',
    '{{#each commits}}',
    '- {{capitalize this.subject}}',
    '{{/each}}',
  ].join('\n'),
};
