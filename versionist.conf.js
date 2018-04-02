const plugins = require('versionist-plugins');

module.exports = {
  updateVersion: [plugins.git.commit, plugins.git.tag, plugins.git.push],
  getGitReferenceFromVersion: version => {
    console.log(version);
    return `v${version}`;
  },
  template: [
    '## v{{version}} - {{moment date "Y-MM-DD"}}',
    '',
    '{{#each commits}}',
    '- {{capitalize this.subject}}',
    '{{/each}}',
  ].join('\n'),
};
