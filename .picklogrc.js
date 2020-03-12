const pkg = require('./package');
const origin = pkg.repository.url;
const comparePath = `${origin}/compare/`;
const commitPath = `${origin}/commit/`;

module.exports = {
  filters: [
    {
      name: 'Features',
      regExp: /^(?:feat|add)/i,
    },
    {
      name: 'Bugfixes',
      regExp: /^fix/i,
    },
  ],
  parse(commits) {
    // RegExp.prototype.toJSON = RegExp.prototype.toString; // JSON.stringify会调用正则表达式的toJSON
    // return JSON.stringify(commits, null, 2); // output commits

    let output = '';

    commits.forEach(log => {
      let date = new Date();
      date = `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).substr(
        -2,
      )}-${('0' + date.getDate()).substr(-2)}`;

      let currentTag = log.tag || log.commits[0].h;
      let prevTag = log.previousTag || log.commits[log.commits.length - 1].h;
      output += `### [${currentTag}](${comparePath}${prevTag ||
        ''}...${currentTag}) (${date})\n\n`;

      log.results.forEach(result => {
        output += `#### ${result.filter.name}\n`;

        result.commits.forEach(commit => {
          output += `* ${commit.s}([${commit.h}](${commitPath}${commit.h}))\n`;
        });

        output += '\n';
      });

      output += '\n\n';
    });

    return output;
  },
};
