// import ora from 'ora';
// import chalk from 'chalk';
// import webpack from 'webpack';
// import webpackConfig from '../webpack/prod-lib';
// import webpackDebugConfig from '../webpack/debug-lib';
const ora = require('ora')
const chalk = require('chalk')
const webpack = require('webpack')
const webpackConfig = require('./webpack.lib.conf.js')
const webpackDebugConfig = require('./webpack.debug.lib.js');
const wehpackMainConfig = require('./webpack.lib.conf.main.js')

const spinner = ora(chalk.cyan('Building library'));

process.stdout.write('\n');
spinner.start();
process.env.NODE_ENV = 'production'
webpack([webpackConfig, webpackDebugConfig, wehpackMainConfig], (error, stats) => {
  if (error) {
    spinner.fail(chalk.red('Something wrong happened:\n'));

    throw error;
  }

  process.stdout.write('\n\n' + stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n\n');

  spinner.succeed(chalk.green('Build finished with success!\n'));
});
