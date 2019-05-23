#!/usr/bin/env node

// 引入依赖
const program = require('commander');

// 定义版本和参数依赖
program
  .version(require('./package.json').version, '-v, --version')
  .usage('<command> [options]');
program
   .command('init (template)')
  .description("Generate a new project")
  .alias('i')
  .action(function (template) {
    require('./lib/init')();
  });
program
  .command('list')
  .description("List all the templates")
  .alias('l')
  .action(function(){
    require('./lib/list');
  });

program.parse(process.argv);

if (program.args.length === 0) {
  program.help();
}
