#!/usr/bin/env node
import { Command } from 'commander/esm.mjs';
import gendiff from '../index.js';

const program = new Command();
program
  .description('Compares two configuration files and shows a difference.')
  .version('1.1.0')
  .helpOption('-h, --help', 'output usage information')
  .option('-f, --format [type]', 'output format', 'stylish')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    const result = gendiff(filepath1, filepath2, program.opts().format);
    console.log(result);
  });
program.parse(process.argv);
